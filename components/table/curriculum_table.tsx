import { AddButton } from "components/button";
import Table, { TableContent } from "components/table";
import React from "react";

export type CurriculumTableProps = {
  handleOnAdd: () => void;
  contents: TableContent[];
};

export const CurriculumTable: React.FC<CurriculumTableProps> = ({
  handleOnAdd,
  contents,
}: CurriculumTableProps) => {
  const headers: string[] = ["List", "Action"];

  const lastRow: JSX.Element = <AddButton onClick={handleOnAdd} />;

  return <Table Header={headers} Content={contents} speacialRow={lastRow} />;
};
