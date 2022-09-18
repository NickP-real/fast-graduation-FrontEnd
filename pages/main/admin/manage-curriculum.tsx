import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ManageCurriculum: React.FC = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);

  function handleOnAdd() {
    setIsAdd(!isAdd);
    console.log(isAdd);
  }

  return (
    <AdminPage>
      <Panel>
        <h2 className="fast-head text-4xl">
          {!isAdd ? "จัดการหลักสูตร" : "เพิ่มหลักสูตร"}
        </h2>
        <table
          className={`my-4  w-full table-fixed border border-black ${
            !isAdd ? "min-h-[25vh]" : "min-h-min"
          }`}
        >
          <thead className="fast-text h-12 border border-black">
            <tr>
              <th className="text-xl font-extrabold">List</th>
            </tr>
          </thead>
          <tbody className="text-fred [&>tr]:h-12 [&>tr>td]:pl-4 [&>tr>td]:font-extrabold">
            {/* TODO: loop here for curriculum, make it link */}
            <tr>
              <td>วท.บ</td>
            </tr>
            <tr>
              <td>วท.บ</td>
            </tr>
            <tr>
              <td>วท.บ</td>
            </tr>
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

        {isAdd && (
          <section>
            <form className="fast-text text-xl font-extrabold">
              <table className="w-44 table-fixed border-spacing-3">
                <tbody>
                  <tr className="h-12">
                    <td>
                      <label htmlFor="start_date">เริ่มต้น</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="start_date"
                        className="border border-black bg-white"
                      />
                    </td>
                  </tr>
                  <tr className="h-12">
                    <td>
                      <label htmlFor="end_date">สิ้นสุด</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="end_date"
                        className="border border-black bg-white"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            <button className="ml-auto block rounded-2xl bg-fyellow px-6 py-3 text-2xl font-extrabold text-fred">
              ลบหลักสูตร
            </button>
          </section>
        )}
      </Panel>
    </AdminPage>
  );
};

export default ManageCurriculum;
