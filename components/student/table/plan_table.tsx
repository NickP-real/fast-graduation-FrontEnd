import Image from "next/image";
import React from "react";
import Table from "./table";

interface Props {
  type?: string;
}

const PlanTable: React.FC<Props> = () => {
  return (
    <Table
      Header={
        <tr>
          <th className="w-[20%] border border-black">เลือกวิชาที่ผ่านมา</th>
          <th className="border border-black">รหัสวิชา</th>
          <th className="border border-black">ชื่อวิชา</th>
          <th className="border border-black">หมวดหมู่</th>
        </tr>
      }
      Content={
        /* TODO: loop info here */
        <>
          <tr className="h-12">
            <td className="border border-black">check</td>
            <td className="border border-black">xxxxxx</td>
            <td className="border border-black">xxxxxx</td>
            <td className="border border-black">xxxxxx</td>
          </tr>
          <tr className="relative h-12">
            <div className="flex absolute top-1/2 left-1/2 gap-x-1 justify-center items-center -translate-x-1/2 -translate-y-1/2">
              <Image
                alt="เพิ่มวิชา"
                src="/plus_btn.svg"
                height={60 / 2.5}
                width={60 / 2.5}
              />
              <a>เพิ่มวิชา</a>
            </div>
          </tr>
        </>
      }
    />
  );
};

export default PlanTable;
