import React from "react";
import Table, { TableContent, TableHeader } from "./table";

const PlanListTable: React.FC = () => {
  return (
    <Table
      Header={
        <tr>
          {TableHeader("รหัสวิชา")}
          {TableHeader("ชื่อวิชา")}
          {TableHeader("หมวดหมู่")}
        </tr>
      }
      Content={
        <>
          <tr className="h-12">
            {TableContent("xxxxxx")}
            {TableContent("xxxxxx")}
            {TableContent("xxxxxx")}
          </tr>
          <tr className="h-12">
            {TableContent("xxxxxx")}
            {TableContent("xxxxxx")}
            {TableContent("xxxxxx")}
          </tr>
          <tr className="h-12">
            {TableContent("xxxxxx")}
            {TableContent("xxxxxx")}
            {TableContent("xxxxxx")}
          </tr>
        </>
      }
    />
  );
};

export default PlanListTable;
