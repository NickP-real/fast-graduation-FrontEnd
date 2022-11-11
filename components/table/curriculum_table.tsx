import Table, { TableContent } from "components/table";
import React from "react";

export type CurriculumTableProps = {
  contents: TableContent[];
};

export const CurriculumTable: React.FC<CurriculumTableProps> = ({
  contents,
}: CurriculumTableProps) => {
  const headers: string[] = ["List", "Action"];

  return <Table Header={headers} Content={contents} />;
};
