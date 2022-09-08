import Panel from "components/main/panel";
import Page from "components/page";
import PlanListTable from "components/student/table/plan_list_table";
import React from "react";

const Summary: React.FC = () => {
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
            <table className="fast-text mx-auto w-[90%] table-fixed border-collapse text-center">
              <thead className="h-12">
                <tr>
                  <th className="w-[60%] border border-black">หมวดหมู่</th>
                  <th className="border border-black">หน่วยกิจรวม</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-12">
                  <td className="border border-black">Major</td>
                  <td className="border border-black"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="mx-auto h-16 w-60 rounded-xl bg-[#D0E6A5] text-2xl font-extrabold text-[#CCABD8]">
            ยืนยันและดำเนินการ
          </button>
        </div>
      </Panel>
    </Page>
  );
};

export default Summary;
