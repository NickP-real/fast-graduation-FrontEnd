import EditCurriculumPage from "components/edit_curriculum_page";
import { useRouter } from "next/router";
import React from "react";

const CurriculumEdit: React.FC = () => {
  const router = useRouter();
  const { cur } = router.query;
  const link = `/main/admin/manage-curriculum/${cur?.toString()}/edit`;
  const content: string[] = ["A", "B", "C"];

  function handleOnAdd() { }
  function handleOnSaveClick() { }
  function handleOnCancelClick() {
    router.back();
  }

  return (
    <EditCurriculumPage
      content={content}
      handleOnAdd={handleOnAdd}
      link={link}
      headerText="แก้ไขหลักสูตร"
    />
  );
};

export default CurriculumEdit;
