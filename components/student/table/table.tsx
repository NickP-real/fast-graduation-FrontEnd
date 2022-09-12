import React, { ReactNode } from "react";

interface Props {
  Header: ReactNode;
  Content: ReactNode;
}

export const Table: React.FC<Props> = ({ Header, Content }: Props) => {
  return (
    <table className="w-full table-fixed border-collapse border border-black text-center">
      <thead className="fast-text h-12 [&>tr]:h-12">{Header}</thead>
      <tbody className="h-12 font-extrabold text-[#fa897b] [&>tr]:h-12">
        {Content}
      </tbody>
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
