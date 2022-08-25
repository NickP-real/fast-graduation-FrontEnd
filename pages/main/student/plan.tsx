import Panel from "components/main/panel";
import Page from "components/page";
import React from "react";

const Plan: React.FC = () => {
  return (
    <Page type="Student">
      <main className="container flex-grow my-5 mx-auto">
        <h2 className="text-4xl fast-head">จัดการแผนการเรียน</h2>
        <Panel>
          <div className="flex flex-col gap-y-7 justify-center items-center">
            <PlanTable />
            <button className="bg-[#FFDD95B5] w-60 h-16 rounded-xl text-2xl text-[#fa897b] font-extrabold">
              ตรวจสอบการเลือก
            </button>
          </div>
        </Panel>
      </main>
    </Page>
  );
};

interface Props {
  type?: string;
}

// Singleton
const PlanTable: React.FC<Props> = (type: Props) => {
  return (
    <>
      <table className="w-full text-center border border-black border-collapse table-fixed">
        <thead className="h-12 fast-text">
          <tr>
            <th className="w-[20%] border border-black">เลือกวิชาที่ผ่านมา</th>
            <th className="border border-black">รหัสวิชา</th>
            <th className="border border-black">ชื่อวิชา</th>
            <th className="border border-black">หมวดหมู่</th>
          </tr>
        </thead>
        <tbody className="text-[#fa897b] font-extrabold">
          {/* TODO: loop info here */}
          <tr className="h-12">
            <td className="border border-black">check</td>
            <td className="border border-black">xxxxxx</td>
            <td className="border border-black">xxxxxx</td>
            <td className="border border-black">xxxxxx</td>
          </tr>
          <tr className="h-12">
            <td>เพิ่มวิชา</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Plan;
