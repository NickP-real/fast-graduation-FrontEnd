import { DelButton } from "components/admin/func_button";
import Panel from "components/main/panel";
import AddCurriculumModal from "components/modal/add_curriculum_modal";
import { AdminPage } from "components/page";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ManageCurriculum: React.FC = () => {
  const content: string[] = ["วทบ.A", "วทบ.B"];
  const link = "/main/admin/manage-curriculum";

  const [isAddCurModal, setIsAddCurModal] = useState<boolean>(false);

  function handleOnAdd() {
    setIsAddCurModal(true);
    // setIsAdd(!isAdd);
  }

  return (
    <>
      <AddCurriculumModal open={isAddCurModal} onClose={setIsAddCurModal} />
      <AdminPage>
        <Panel>
          <h2 className="fast-head text-4xl">จัดการหลักสูตร</h2>
          <CurriculumTable handleOnAdd={handleOnAdd} link={link} />
        </Panel>
      </AdminPage>
    </>
  );
};

type CurriculumTableProps = {
  handleOnAdd: () => void;
  link: string;
};

export const CurriculumTable: React.FC<CurriculumTableProps> = ({
  handleOnAdd,
  link,
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
        <tr>
          <td className="relative">
            <Link href={`${link}/วท.บ`}>วท.บ</Link>
            <DelButton
              onClick={() => {
                return;
              }}
            />
          </td>
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
  );
};

export default ManageCurriculum;
