import Panel from "components/main/panel";
import AddCurriculumModal from "components/modal/add_curriculum";
import { AdminPage } from "components/page";
import { CurriculumTable } from "components/table/curriculum_table";
import { NextPage } from "next";
import React, { useState } from "react";

const ManageCurriculum: NextPage = () => {
  const content: string[] = ["วทบ.A", "วทบ.B"];
  const link = "/main/admin/manage-curriculum";

  const [isAddCurModal, setIsAddCurModal] = useState<boolean>(false);

  function handleOnAdd() {
    setIsAddCurModal(true);
    // setIsAdd(!isAdd);
  }

  return (
    <>
      <AddCurriculumModal open={isAddCurModal} setOpen={setIsAddCurModal} />
      <AdminPage>
        <Panel>
          <h2 className="fast-head text-4xl">จัดการหลักสูตร</h2>
          <main className="my-6">
            <CurriculumTable
              handleOnAdd={handleOnAdd}
              link={link}
              contents={content}
            />
          </main>
        </Panel>
      </AdminPage>
    </>
  );
};

export default ManageCurriculum;
