import React from "react";
import Table, { TableContent } from "components/table";
import { DelButton, InfoButton } from "components/button/button";
import { CategoryAbbr, Course } from "model/model";

type Props = {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  categories: CategoryAbbr[];
  handleOnInfoClick: (e: number) => void;
};

const PlanTable: React.FC<Props> = ({
  courses,
  setCourses,
  categories,
  handleOnInfoClick,
}: Props) => {
  const headers: string[] = ["รหัสวิชา", "ชื่อวิชา", "หมวดหมู่", "Action"];
  const modifiedContents: TableContent[] = courses.map(
    ({ id, name_en, name_th, category_id }, index: number) => {
      const courseId = "0".repeat(6 - id.toString().length) + id.toString();
      const courseName = `${name_en}\n${name_th}`;
      const category = categories[category_id ? category_id - 1 : 0];
      const displayCat = `${category.abbr_en
        .split(" ")
        .map((text) => {
          return text[0].toUpperCase() + text.substring(1);
        })
        .join(" ")}\n${category.abbr_th}`;
      return {
        texts: [courseId.toString(), courseName, displayCat],
        components: [
          <InfoButton
            key={"0" + courseId + courseName + index}
            onClick={() => handleOnInfoClick(index)}
          />,
          <DelButton
            key={"1" + courseId + courseName + index}
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

  return <Table Header={headers} Content={modifiedContents} />;
};

export default PlanTable;
