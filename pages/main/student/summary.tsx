import Panel from "components/main/panel";
import Page from "components/page";
import PlanListTable from "components/student/table/plan_list_table";
import React from "react";

const Summary: React.FC = () => {
  return (
    <Page type="Student">
      <h2 className="text-4xl fast-head">สรุปผลการเลือก</h2>
      <Panel>
        <div className="flex flex-col gap-y-7">
          <div className="justify-self-center">
            <PlanListTable />
          </div>

          <div className="mx-auto w-[90%]">
            <h2 className="mb-5 text-4xl fast-text">จำนวนหน่วยกิจ</h2>
            <table className="text-center w-[90%] fast-text border-collapse table-fixed mx-auto">
              <thead className="h-12">
                <tr>
                  <th className="border border-black w-[60%]">หมวดหมู่</th>
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

          <button className="bg-[#D0E6A5] w-60 h-16 rounded-xl text-2xl text-[#CCABD8] font-extrabold mx-auto">
            ยืนยันและดำเนินการ
          </button>
        </div>
      </Panel>
    </Page>
  );
};

export default Summary;
