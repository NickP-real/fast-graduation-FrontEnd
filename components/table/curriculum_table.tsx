import { DelButton } from "components/admin/func_button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type CurriculumTableProps = {
  handleOnAdd: () => void;
  link: string;
  content: string[];
};

export const CurriculumTable: React.FC<CurriculumTableProps> = ({
  handleOnAdd,
  link,
  content,
}: CurriculumTableProps) => {
  return (
    <table
      className={`my-4 w-full table-fixed overflow-y-auto border border-black`}
    >
      <thead className="fast-text h-12 border border-black">
        <tr>
          <th className="text-xl font-extrabold">List</th>
        </tr>
      </thead>
      <tbody className="text-fred [&>tr]:h-12 [&>tr>td]:px-4 [&>tr>td]:font-extrabold">
        {/* TODO: loop here for curriculum, make it link */}
        {content.map((data, index) => (
          <tr key={index}>
            <td className="relative">
              <Link href={`${link}/${data}`}>{data}</Link>
              <DelButton
                onClick={() => {
                  return;
                }}
              />
            </td>
          </tr>
        ))}
        <tr>
          <td className="relative">
            <button
              onClick={handleOnAdd}
              className="fast-text absolute right-0 top-1/2 mr-4 flex -translate-y-1/2 items-center justify-center gap-x-1"
            >
              <Image
                src="/add_cur.svg"
                alt="Add curriculum"
                width={15}
                height={15}
              />
              เพิ่ม
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
