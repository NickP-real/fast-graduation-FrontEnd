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
    <>
      <table className="hidden w-full table-fixed rounded-lg text-center text-base shadow sm:table [&_tr]:h-12">
        <thead className="border-b-2 bg-fpurple/10 font-bold tracking-wide">
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
        <tbody className="divide-y divide-gray-100">
          {Content.map((rowDatas: TableContent, index: number) => {
            return (
              <tr key={index} className="even:bg-gray-50 hover:bg-gray-100">
                {rowDatas.texts.map((text: string, text_idx: number) => {
                  return (
                    <td
                      key={text + index + text_idx}
                      className="whitespace-pre-line"
                    >
                      {text}
                    </td>
                  );
                })}

                {rowDatas.components && (
                  <td className="space-x-2 text-center align-middle">
                    {rowDatas.components.map(
                      (component: ReactNode) => component
                    )}
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

      <div className="block w-full sm:hidden">
        <section className="grid grid-cols-1 gap-y-4">
          {Content.map((datas: TableContent, index: number) => {
            const texts = datas.texts;
            const components = datas.components;
            return (
              <main
                key={datas.toString() + index}
                className="grid grid-cols-2 rounded-md border p-4 shadow-md"
              >
                <div>
                  {texts.map((text: string, text_idx: number) => {
                    return (
                      <p key={text + text_idx} className="whitespace-pre-wrap">
                        {text}
                      </p>
                    );
                  })}
                </div>
                <div className="flex flex-col space-y-2 justify-self-end">
                  {components &&
                    components.map((component: ReactNode) => component)}
                </div>
              </main>
            );
          })}
        </section>
        <div className="mx-auto mt-4 w-max">{speacialRow}</div>
      </div>
    </>
  );
};

export default Table;
