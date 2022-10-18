import React from "react";
import Table, { TableContent } from "components/table";
import { DelButton, AddCourseButton, ButtonProps } from "components/button";
import { Course } from "model/model";

type Props = ButtonProps & {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
};

const PlanTable: React.FC<Props> = ({
  courses,
  setCourses,
  onClick,
}: Props) => {
  const headers: string[] = ["รหัสวิชา", "ชื่อวิชา", "Action"];
  const modifiedContents: TableContent[] = courses.map(
    ({ id, name_en, name_th }, index: number) => {
      const courseName = `${name_en}\n${name_th}`;
      return {
        texts: [id.toString(), courseName],
        components: [
          <DelButton
            key={id + courseName}
            onClick={() => handleOnDelClick(index)}
          />,
        ],
      };
    }
  );

  function handleOnDelClick(pos: number) {
    const updateDatas: Course[] = courses.filter((_, index) => {
      return pos !== index;
    });
    setCourses(updateDatas);
  }

  return (
    <Table
      Header={headers}
      Content={modifiedContents}
      speacialRow={<AddCourseButton onClick={onClick} />}
    />
  );
};

export default PlanTable;
