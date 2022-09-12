import Panel from "components/main/panel";
import Page from "components/page";
import PlanTable from "components/student/table/plan_table";
import React from "react";

const Plan: React.FC = () => {
  return (
    <Page type="Student">
      <h2 className="fast-head text-4xl">จัดการแผนการเรียน</h2>
      <Panel>
        <div className="flex flex-col items-center justify-center gap-y-7">
          <PlanTable />
          <button className="h-16 w-60 rounded-xl bg-[#FFDD95B5] text-2xl font-extrabold text-[#fa897b]">
            ตรวจสอบการเลือก
          </button>
        </div>
      </Panel>
    </Page>
  );
};

export default Plan;
