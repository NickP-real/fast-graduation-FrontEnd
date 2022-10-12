import { DelButton } from "components/button";
import Table, { TableContent } from "components/table";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type CurriculumTableProps = {
  handleOnAdd: () => void;
  link: string;
  contents: string[];
};

export const CurriculumTable: React.FC<CurriculumTableProps> = ({
  handleOnAdd,
  link,
  contents,
}: CurriculumTableProps) => {
  const headers: string[] = ["List", "Action"];
  const modifiedContent: TableContent[] = contents.map(
    (content, index: number) => {
      return {
        texts: [content],
        components: [
          <Link key={index + content} href={`${link}/${content}`}>
            Edit
          </Link>,
          <DelButton
            key={content + index}
            onClick={() => {
              return;
            }}
          />,
        ],
      };
    }
  );
  const lastRow: JSX.Element = (
    <button onClick={handleOnAdd} className="mx-auto flex items-center gap-x-1">
      <Image src="/add_cur.svg" alt="Add curriculum" width={15} height={15} />
      <p className="fast-text font-bold">เพิ่ม</p>
    </button>
  );

  return (
    <Table Header={headers} Content={modifiedContent} speacialRow={lastRow} />
  );
};
