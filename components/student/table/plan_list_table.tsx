import React from "react";
import Table, { TableContent } from "components/table";
import { CategoryAbbr, Course } from "model/model";

type Props = {
  enrollCourse: Course[];
  category: CategoryAbbr[];
};

const PlanListTable: React.FC<Props> = ({ enrollCourse, category }: Props) => {
  const headers: string[] = ["รหัสวิชา", "ชื่อวิชา", "หมวดหมู่"];
  const contents: TableContent[] = enrollCourse.map(
    ({ id, name_en, name_th, category_id }) => {
      const courseId = "0".repeat(6 - id.toString().length) + id.toString();
      const courseName = `${name_en}\n${name_th}`;
      const categoryDisp = category[category_id ? category_id - 1 : 0];
      return {
        texts: [
          courseId,
          courseName,
          `${categoryDisp.abbr_en
            .split(" ")
            .map((text) => {
              return text[0].toUpperCase() + text.substring(1);
            })
            .join(" ")}\n${categoryDisp.abbr_th}`,
        ],
      };
    }
  );

  return <Table Header={headers} Content={contents} />;
};

export default PlanListTable;
