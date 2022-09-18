import AddButton from "components/add_button";
import React from "react";
import Table from "components/table";

interface Props {
  type?: string;
}

const PlanTable: React.FC<Props> = () => {
  return (
    <Table
      Header={
        <tr>
          <th className="w-[15%] border border-black">เลือกวิชาที่ผ่านมา</th>
          <th className="border border-black">รหัสวิชา</th>
          <th className="border border-black">ชื่อวิชา</th>
          <th className="border border-black">หมวดหมู่</th>
        </tr>
      }
      Content={
        /* TODO: loop info here */
        <>
          <tr>
            <td className="border border-black">check</td>
            <td className="border border-black">xxxxxx</td>
            <td className="border border-black">xxxxxx</td>
            <td className="border border-black">xxxxxx</td>
          </tr>
          <AddButton
            onClick={() => {
              return;
            }}
          />
        </>
      }
    />
  );
};

export default PlanTable;
