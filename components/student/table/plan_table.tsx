import React from "react";
import Table from "./table";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

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
          <tr className="relative h-12">
            <td className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-x-1">
              <PlusCircleIcon className="w-7" />
              <a>เพิ่มวิชา</a>
            </td>
          </tr>
        </>
      }
    />
  );
};

export default PlanTable;
