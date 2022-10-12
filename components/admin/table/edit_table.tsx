import { AddButton, ButtonProps } from "components/button";
import Table, { TableContent } from "components/table";
import React from "react";

type Props = ButtonProps & {
  contents: TableContent[];
};

const EditTable: React.FC<Props> = ({ onClick, contents }: Props) => {
  const headers: string[] = ["รหัสวิชา", "ชื่อวิชา", "Action"];

  return (
    <Table
      Header={headers}
      Content={contents}
      speacialRow={<AddButton onClick={onClick} key="AddButton" />}
    />
  );
};

export default EditTable;
