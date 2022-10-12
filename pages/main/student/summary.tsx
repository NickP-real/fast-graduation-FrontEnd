import Panel from "components/main/panel";
import Page from "components/page";
import PlanListTable from "components/student/table/plan_list_table";
import Table from "components/table";
import React from "react";

const Summary: React.FC = () => {
  const numberInfoHeaders: string[] = ["หมวดหมู่", "หน่วยกิจรวม"];
  return (
    <Page type="Student">
      <h2 className="fast-head text-4xl">สรุปผลการเลือก</h2>
      <Panel>
        <div className="flex flex-col gap-y-7">
          <div className="justify-self-center">
            <PlanListTable />
          </div>

          <div className="mx-auto w-[90%]">
            <h2 className="fast-text mb-5 text-4xl">จำนวนหน่วยกิจ</h2>
            <Table
              Header={numberInfoHeaders}
              Content={[{ texts: ["Major", "0"] }, { texts: ["Minor", "5"] }]}
            />
          </div>

          <button className="mx-auto h-16 w-60 rounded-xl bg-fbrgreen/70 text-2xl font-extrabold text-[#CCABD8] hover:bg-fbrgreen">
            ยืนยันและดำเนินการ
          </button>
        </div>
      </Panel>
    </Page>
  );
};

export default Summary;
