import React, { ReactNode } from "react";

export type TableContent = {
  texts: string[];
  components?: ReactNode[];
};

type Props = {
  Header: string[];
  Content: TableContent[];
  speacialRow?: ReactNode;
};

export const Table: React.FC<Props> = ({
  Header,
  Content,
  speacialRow,
}: Props) => {
  return (
    <table className="w-full table-fixed rounded-lg text-center shadow [&_tr]:h-12">
      <thead className="border-b-2 bg-fpurple/10 text-base font-bold tracking-wide">
        <tr>
          {Header.map((item: string) => {
            return (
              <td
                key={item}
                className="fast-text first:rounded-tl-lg last:rounded-tr-lg"
              >
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-sm ">
        {Content.map((rowDatas: TableContent, index: number) => {
          return (
            <tr key={index} className="even:bg-gray-50 hover:bg-gray-100">
              {rowDatas.texts.map((text: string, text_idx: number) => {
                return (
                  <td key={text + index + text_idx} className="whitespace-pre">
                    {text}
                  </td>
                );
              })}

              {rowDatas.components && (
                <td className="text-center align-middle transition-opacity delay-75 ease-out lg:opacity-0 lg:hover:opacity-100">
                  {rowDatas.components.map((component: ReactNode) => component)}
                </td>
              )}
            </tr>
          );
        })}
        {speacialRow && (
          <tr className="relative">
            <td colSpan={Header.length}>{speacialRow}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
