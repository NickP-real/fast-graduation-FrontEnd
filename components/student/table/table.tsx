import React, { ReactNode } from "react";

interface Props {
  Header: ReactNode;
  Content: ReactNode;
}

export const Table: React.FC<Props> = ({ Header, Content }: Props) => {
  return (
    <table className="w-full text-center border border-black border-collapse table-fixed">
      <thead className="h-12 fast-text">{Header}</thead>
      <tbody className="h-12 text-[#fa897b] font-extrabold">{Content}</tbody>
    </table>
  );
};

export const TableHeader: React.FC<string> = (str: string) => {
  return <th className="border border-black">{str}</th>;
};

export const TableContent: React.FC<string> = (str: string) => {
  return <td className="border border-black">{str}</td>;
};

export default Table;
