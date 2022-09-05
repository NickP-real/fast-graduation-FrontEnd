import Panel from "components/main/panel";
import Page from "components/page";
import PlanTable from "components/student/table/plan_table";
import React from "react";

const Plan: React.FC = () => {
  return (
    <Page type="Student">
      <h2 className="text-4xl fast-head">จัดการแผนการเรียน</h2>
      <Panel>
        <div className="flex flex-col gap-y-7 justify-center items-center">
          <PlanTable />
          <button className="bg-[#FFDD95B5] w-60 h-16 rounded-xl text-2xl text-[#fa897b] font-extrabold">
            ตรวจสอบการเลือก
          </button>
        </div>
      </Panel>
    </Page>
  );
};

export default Plan;
