import React from "react";
import Table, { TableContent, TableHeader } from "components/table";

const PlanCheckTable: React.FC = () => {
  return (
    <Table
      Header={
        <tr>
          <TableHeader str="เลือกวิชา" />
          <TableHeader str="รหัสวิชา" />
          <TableHeader str="ชื่อวิชา" />
          <TableHeader str="หมวดหมู่" />
        </tr>
      }
      Content={
        <tr>
          <TableContent str="check" />
          <TableContent str="xxxxxx" />
          <TableContent str="xxxxxx" />
          <TableContent str="xxxxxx" />
        </tr>
      }
    />
  );
};

export default PlanCheckTable;
