import Table, { TableContent } from "components/table";
import { StudentInfo } from "model/model";
import React from "react";

type Props = {
  studentDatas: StudentInfo[];
};
const StudentInfoTable: React.FC<Props> = ({ studentDatas }: Props) => {
  console.log(studentDatas);
  const header: string[] = [
    "Student ID",
    "First Name",
    "Middle Name",
    "Last Name",
  ];
  const content: TableContent[] = studentDatas.map((data) => {
    const firstName = `${data.first_name_en}\n${data.first_name_th}`;
    const midName = data.mid_name_en
      ? `${data.mid_name_en}\n${data.mid_name_th}`
      : "-";
    const lastName = `${data.last_name_en}\n${data.last_name_th}`;
    return {
      texts: [data.student_id, firstName, midName, lastName],
    } as TableContent;
  });
  return <Table Header={header} Content={content} />;
};

export default StudentInfoTable;
