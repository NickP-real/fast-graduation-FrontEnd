import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import {
  CurriculumTable,
  CurriculumTableProps,
} from "components/table/curriculum_table";
import { NextRouter } from "next/router";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import AddPlanModal from "./modal/add_plan";
import ConfirmModal from "./modal/confirm";

type Props = CurriculumTableProps & {
  headerText: "แก้ไขหลักสูตร" | "เพิ่มหลักสูตร";
  start: number;
  end: number;
  handleOnCancelClick: () => void;
  handleOnSaveClick: () => void;
  handleOnStartYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnEndYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addPlanOpen: boolean;
  setAddPlanOpen: Dispatch<SetStateAction<boolean>>;
  handleOnPlanAdd: (thName: string, enName: string) => void;
  confirmOpen: boolean;
  setConfirmOpen: Dispatch<SetStateAction<boolean>>;
  router: NextRouter;
};

const EditCurriculumPage: React.FC<Props> = ({
  contents,
  handleOnAdd,
  headerText,
  start,
  end,
  handleOnCancelClick,
  handleOnSaveClick,
  handleOnStartYearChange,
  handleOnEndYearChange,
  addPlanOpen,
  setAddPlanOpen,
  handleOnPlanAdd,
  confirmOpen,
  setConfirmOpen,
  router,
}: Props) => {
  // const link = `/main/admin/manage-curriculum/${cur?.toString()}/edit`;
  // const content: string[] = ["A", "B", "C"];

  return (
    <>
      <AddPlanModal
        open={addPlanOpen}
        setOpen={setAddPlanOpen}
        onClick={handleOnPlanAdd}
      />
      <ConfirmModal
        open={confirmOpen}
        setOpen={setConfirmOpen}
        router={router}
      />
      <AdminPage>
        <Panel>
          <h2 className="fast-head text-4xl">{headerText}</h2>

          <div className="my-6">
            <CurriculumTable handleOnAdd={handleOnAdd} contents={contents} />
          </div>

          <form className="fast-text my-4 max-w-max items-center space-y-2 text-xl font-extrabold">
            <label htmlFor="start_year" className="w-40 md:w-36">
              เริ่มต้นปีการศึกษา
            </label>
            <input
              type="number"
              id="start_date"
              className="w-24 text-center md:mx-3"
              value={start}
              onChange={handleOnStartYearChange}
            />

            <label htmlFor="end_year" className="w-40 md:w-36">
              สิ้นสุดปีการศึกษา
            </label>
            <input
              type="number"
              id="end_year"
              className="w-24 text-center md:mx-3"
              value={end}
              onChange={handleOnEndYearChange}
            />
          </form>

          <ActionButton
            onSaveClick={handleOnSaveClick}
            onCancelClick={handleOnCancelClick}
          />
        </Panel>
      </AdminPage>
    </>
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
        className="rounded-2xl bg-fbrgreen/70 px-6  py-3 text-2xl font-extrabold text-fpurple shadow-md hover:bg-fbrgreen"
        onClick={onSaveClick}
      >
        บันทึก
      </button>
      <button
        className="rounded-2xl bg-fbryellow/70 px-6 py-3 text-2xl font-extrabold text-fred shadow-md hover:bg-fbryellow"
        onClick={onCancelClick}
      >
        ยกเลิก
      </button>
    </div>
  );
};

export default EditCurriculumPage;
