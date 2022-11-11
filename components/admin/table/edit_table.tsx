import Table, { TableContent } from "components/table";
import React from "react";

type Props = {
  contents: TableContent[];
};

const EditTable: React.FC<Props> = ({ contents }: Props) => {
  const headers: string[] = ["รหัสวิชา", "ชื่อวิชา", "Action"];

  return <Table Header={headers} Content={contents} />;
};

export default EditTable;
