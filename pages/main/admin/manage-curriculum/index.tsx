import Panel from "components/main/panel";
import AddCurriculumModal from "components/modal/add_curriculum";
import { AdminPage } from "components/page";
import { CurriculumTable } from "components/table/curriculum_table";
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
      <AddCurriculumModal open={isAddCurModal} setOpen={setIsAddCurModal} />
      <AdminPage>
        <Panel>
          <h2 className="fast-head text-4xl">จัดการหลักสูตร</h2>
          <CurriculumTable
            handleOnAdd={handleOnAdd}
            link={link}
            content={content}
          />
        </Panel>
      </AdminPage>
    </>
  );
};

export default ManageCurriculum;
