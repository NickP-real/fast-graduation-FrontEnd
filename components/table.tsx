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
                  <td align="center" className="space-x-2">
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
        <section className="space-y-4">
          {Content.map((datas: TableContent, index: number) => {
            const texts = datas.texts;
            const components = datas.components;
            return (
              <main
                key={datas.toString() + index}
                className="flex flex-col space-y-2 rounded-md border p-4 shadow-md"
              >
                <div className="divide-y-2">
                  {texts.map((text: string, text_idx: number) => {
                    return text_idx === 0 ? (
                      <p
                        key={text + text_idx}
                        className="whitespace-pre-wrap py-1 font-bold"
                      >
                        {text}
                      </p>
                    ) : (
                      <p
                        key={text + text_idx}
                        className="whitespace-pre-wrap py-1"
                      >
                        {text}
                      </p>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center space-x-2">
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
