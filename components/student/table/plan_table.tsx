import AddButton, { Props as AddButtonProps } from "components/add_button";
import React from "react";
import Table from "components/table";
import { XMarkIcon } from "@heroicons/react/24/outline";

export type PlanContent = {
  courseId: string;
  courseName: string;
  courseCategory: string;
};

type Props = AddButtonProps & {
  plans: PlanContent[];
  setPlans: React.Dispatch<React.SetStateAction<PlanContent[]>>;
};

const PlanTable: React.FC<Props> = ({ plans, setPlans, onAddClick }: Props) => {
  function handleOnDelClick(pos: number) {
    const updateDatas: PlanContent[] = plans.filter((_, index) => {
      return pos !== index;
    });
    setPlans(updateDatas);
  }

  return (
    <Table
      Header={
        <tr>
          <th className="border border-black">รหัสวิชา</th>
          <th className="border border-black">ชื่อวิชา</th>
          <th className="border border-black">หมวดหมู่</th>
        </tr>
      }
      Content={
        <>
          {plans.map(
            ({ courseId, courseName, courseCategory }, index: number) => {
              return (
                <tr key={courseId}>
                  <td className="border border-black">{courseId}</td>
                  <td className="border border-black">{courseName}</td>
                  <td className="relative border border-black">
                    {courseCategory}
                    <DelButton onDelClick={() => handleOnDelClick(index)} />
                  </td>
                </tr>
              );
            }
          )}
          <AddButton onAddClick={onAddClick} />
        </>
      }
    />
  );
};

type DelProps = {
  onDelClick: () => void;
};

const DelButton: React.FC<DelProps> = ({ onDelClick }: DelProps) => {
  return (
    <button
      className="absolute right-0 top-0 mr-5 flex translate-y-1/2 items-center gap-x-1"
      onClick={onDelClick}
    >
      <XMarkIcon className="h-5 stroke-2" />
      ลบ
    </button>
  );
};

export default PlanTable;
