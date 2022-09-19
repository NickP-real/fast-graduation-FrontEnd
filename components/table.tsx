import React, { ReactNode } from "react";

interface Props {
  Header: ReactNode;
  Content: ReactNode;
}

export const Table: React.FC<Props> = ({ Header, Content }: Props) => {
  return (
    <table className="w-full table-fixed border-collapse border border-black text-center">
      <thead className="fast-text h-12 [&>tr]:h-12 [&>tr>td]:border [&>tr>td]:border-black">
        {Header}
      </thead>
      <tbody className="h-12 font-extrabold text-fred [&>tr]:h-12">
        {Content}
      </tbody>
    </table>
  );
};

interface TableStr {
  str: string;
}

export const TableHeader: React.FC<TableStr> = ({ str }: TableStr) => {
  return <th className="border border-black">{str}</th>;
};

export const TableContent: React.FC<TableStr> = ({ str }: TableStr) => {
  return <td className="border border-black">{str}</td>;
};

export default Table;
