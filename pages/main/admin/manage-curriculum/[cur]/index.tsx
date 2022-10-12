import EditCurriculumPage from "components/edit_curriculum_page";
import { useRouter } from "next/router";
import React from "react";

const CurriculumEdit: React.FC = () => {
  const router = useRouter();
  const { cur } = router.query;
  const link = `/main/admin/manage-curriculum/${cur?.toString()}/edit`;
  const content: string[] = ["A", "B", "C"];

  function handleOnAdd() {
    return;
  }
  function handleOnSaveClick() {
    return;
  }
  function handleOnCancelClick() {
    router.back();
  }

  return (
    <EditCurriculumPage
      contents={content}
      handleOnAdd={handleOnAdd}
      link={link}
      headerText="แก้ไขหลักสูตร"
    />
  );
};

export default CurriculumEdit;
