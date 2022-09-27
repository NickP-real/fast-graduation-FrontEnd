import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ManageCurriculum: React.FC = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);

  function handleOnAdd() {
    setIsAdd(!isAdd);
  }

  function handleOnCancelClick() {
    setIsAdd(false);
  }

  function handleOnSaveClick() {
    setIsAdd(false);
  }

  return (
    <AdminPage>
      <Panel>
        <h2 className="fast-head text-4xl">
          {!isAdd ? "จัดการหลักสูตร" : "เพิ่มหลักสูตร"}
        </h2>
        <table
          className={`my-4  min-h-[25vh] w-full table-fixed overflow-y-auto border border-black`}
        >
          <thead className="fast-text h-12 border border-black">
            <tr>
              <th className="text-xl font-extrabold">List</th>
            </tr>
          </thead>
          <CurriculumTable isAdd={isAdd} handleOnAdd={handleOnAdd} />
        </table>

        {isAdd && (
          <section>
            <form className="fast-text text-xl font-extrabold">
              <table className="table-fixed">
                <tbody>
                  <tr className="h-12">
                    <td>
                      <label htmlFor="start_date">เริ่มต้น</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="start_date"
                        className="mx-3 border border-black bg-white"
                      />
                    </td>
                    <td>
                      <label htmlFor="start_year">ปีการศึกษา</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="start_date"
                        className="mx-3 w-28 border border-black bg-white"
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
                        className="mx-3 border border-black bg-white"
                      />
                    </td>
                    <td>
                      <label htmlFor="end_year">ปีการศึกษา</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id="start_date"
                        className="mx-3 w-28 border border-black bg-white"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            <div className="flex items-center justify-end space-x-6">
              <button
                className="rounded-2xl bg-fbrgreen px-6 py-3 text-2xl font-extrabold text-fpurple shadow-md"
                onClick={handleOnSaveClick}
              >
                บันทึก
              </button>
              <button
                className="rounded-2xl bg-fyellow px-6 py-3 text-2xl font-extrabold text-fred shadow-md"
                onClick={handleOnCancelClick}
              >
                ยกเลิก
              </button>
            </div>
          </section>
        )}
      </Panel>
    </AdminPage>
  );
};

type CurriculumTableProps = {
  isAdd: boolean;
  handleOnAdd: () => void;
};

const CurriculumTable: React.FC<CurriculumTableProps> = ({
  isAdd,
  handleOnAdd,
}: CurriculumTableProps) => {
  return (
    <tbody className="text-fred [&>tr]:h-12 [&>tr>td]:pl-4 [&>tr>td]:font-extrabold">
      {!isAdd}
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
            {!isAdd ? "แก้ไข" : "เพิ่ม"}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageCurriculum;
