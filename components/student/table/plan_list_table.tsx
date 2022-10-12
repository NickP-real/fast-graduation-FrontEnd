import React from "react";
import Table from "components/table";

const PlanListTable: React.FC = () => {
  const headers: string[] = ["รหัสวิชา", "ชื่อวิชา", "หมวดหมู่"];
  const contents = [{ texts: ["xxxxxx", "xxxxxx", "xxxxxx"] }];
  return <Table Header={headers} Content={contents} />;
};

export default PlanListTable;
