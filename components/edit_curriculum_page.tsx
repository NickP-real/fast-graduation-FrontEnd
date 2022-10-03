import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import {
  CurriculumTable,
  CurriculumTableProps,
} from "components/table/curriculum_table";
import { useRouter } from "next/router";
import React from "react";

type Props = CurriculumTableProps & {
  headerText: "แก้ไขหลักสูตร" | "เพิ่มหลักสูตร";
};

const EditCurriculumPage: React.FC<Props> = ({
  content,
  handleOnAdd,
  headerText,
  link,
}: Props) => {
  const router = useRouter();
  // const link = `/main/admin/manage-curriculum/${cur?.toString()}/edit`;
  // const content: string[] = ["A", "B", "C"];

  // function handleOnAdd() { }
  function handleOnSaveClick() { }
  function handleOnCancelClick() {
    router.back();
  }

  return (
    <AdminPage>
      <Panel>
        <h2 className="fast-head text-4xl">{headerText}</h2>
        <CurriculumTable
          handleOnAdd={handleOnAdd}
          link={link}
          content={content}
        />
        <form className="fast-text my-4 max-w-max text-xl font-extrabold md:space-y-2">
          <section className="flex flex-col gap-y-1 md:flex-row md:gap-y-0 md:space-x-2">
            <div>
              <label htmlFor="start_date" className="w-28 md:w-14">
                เริ่มต้น
              </label>
              <input type="date" id="start_date" className="md:mx-3" />
            </div>
            <div>
              <label htmlFor="start_year" className="w-28 md:w-24">
                ปีการศึกษา
              </label>
              <input type="number" id="start_date" className="w-28 md:mx-3" />
            </div>
          </section>

          <section className="flex flex-col gap-y-1 md:flex-row md:gap-y-0 md:space-x-2">
            <div>
              <label htmlFor="end_date" className="w-28 md:w-14">
                สิ้นสุด
              </label>
              <input type="date" id="end_date" className="md:mx-3" />
            </div>
            <div>
              <label htmlFor="end_year" className="w-28 md:w-24">
                ปีการศึกษา
              </label>
              <input type="number" id="end_year" className="w-28 md:mx-3" />
            </div>
          </section>
        </form>
        <ActionButton
          onSaveClick={handleOnSaveClick}
          onCancelClick={handleOnCancelClick}
        />
      </Panel>
    </AdminPage>
  );
};

type ActionProps = {
  onSaveClick: () => void;
  onCancelClick: () => void;
};

const ActionButton: React.FC<ActionProps> = ({
  onSaveClick,
  onCancelClick,
}: ActionProps) => {
  return (
    <div className="flex items-center justify-end space-x-6">
      <button
        className="rounded-2xl bg-fbrgreen px-6 py-3 text-2xl font-extrabold text-fpurple shadow-md"
        onClick={onSaveClick}
      >
        บันทึก
      </button>
      <button
        className="rounded-2xl bg-fyellow px-6 py-3 text-2xl font-extrabold text-fred shadow-md"
        onClick={onCancelClick}
      >
        ยกเลิก
      </button>
    </div>
  );
};

export default EditCurriculumPage;
