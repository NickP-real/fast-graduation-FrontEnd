import React from "react";
import Table, { TableContent } from "components/table";
import { DelButton, AddButton, ButtonProps } from "components/button";

export type PlanContent = {
  courseId: string;
  courseName: string;
  courseCategory: string;
};

type Props = ButtonProps & {
  plans: PlanContent[];
  setPlans: React.Dispatch<React.SetStateAction<PlanContent[]>>;
};

const PlanTable: React.FC<Props> = ({ plans, setPlans, onClick }: Props) => {
  const headers: string[] = ["รหัสวิชา", "ชื่อวิชา", "หมวดหมู่", "Action"];
  const modifiedContents: TableContent[] = plans.map(
    ({ courseId, courseName, courseCategory }, index: number) => {
      return {
        texts: [courseId, courseName, courseCategory],
        components: [
          <DelButton
            key={courseId + courseName}
            onClick={() => handleOnDelClick(index)}
          />,
        ],
      };
    }
  );

  function handleOnDelClick(pos: number) {
    const updateDatas: PlanContent[] = plans.filter((_, index) => {
      return pos !== index;
    });
    setPlans(updateDatas);
  }

  return (
    <Table
      Header={headers}
      Content={modifiedContents}
      speacialRow={<AddButton onClick={onClick} />}
    />
  );
};

export default PlanTable;
