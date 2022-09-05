import React from "react";
import Table, { TableContent, TableHeader } from "./table";

const PlanCheckTable: React.FC = () => {
  return (
    <Table
      Header={
        <tr>
          {TableHeader("เลือกวิชา")}
          {TableHeader("รหัสวิชา")}
          {TableHeader("ชื่อวิชา")}
          {TableHeader("หมวดหมู่")}
        </tr>
      }
      Content={
        <tr>
          {TableContent("check")}
          {TableContent("xxxxxx")}
          {TableContent("xxxxxx")}
          {TableContent("xxxxxx")}
        </tr>
      }
    />
  );
};

export default PlanCheckTable;
