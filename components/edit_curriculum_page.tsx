import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import {
  CurriculumTable,
  CurriculumTableProps,
} from "components/table/curriculum_table";
import React, { ChangeEvent } from "react";
import { AddButton } from "./button/button";

type Props = CurriculumTableProps & {
  headerText: "แก้ไขหลักสูตร" | "เพิ่มหลักสูตร";
  start: number;
  end: number;
  handleOnCancelClick: () => void;
  handleOnSaveClick: () => void;
  handleOnStartYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnEndYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnAdd: () => void;
};

export const EditCurriculumPage: React.FC<Props> = ({
  contents,
  handleOnAdd,
  headerText,
  start,
  end,
  handleOnCancelClick,
  handleOnSaveClick,
  handleOnStartYearChange,
  handleOnEndYearChange,
}: Props) => {
  return (
    <AdminPage>
      <h1>{headerText}</h1>
      <Panel>
        <main className="space-y-6">
          <div className="ml-auto w-max">
            <AddButton onClick={handleOnAdd} />
          </div>
          <CurriculumTable contents={contents} />

          <form className="fast-text my-4 max-w-max items-center space-y-2 text-xl font-extrabold">
            <YearInput
              label="เริ่มต้นปีการศึกษา"
              id="start_year"
              value={start}
              onChange={handleOnStartYearChange}
            />
            <YearInput
              label="สิ้นสุดปีการศึกษา"
              id="end_year"
              value={end}
              onChange={handleOnEndYearChange}
            />
          </form>

          <ActionButton
            onSaveClick={handleOnSaveClick}
            onCancelClick={handleOnCancelClick}
          />
        </main>
      </Panel>
    </AdminPage>
  );
};

type YearInputProps = {
  label: string;
  id: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const YearInput: React.FC<YearInputProps> = ({
  label,
  id,
  value,
  onChange,
}: YearInputProps) => (
  <>
    <label htmlFor={id} className="w-40">
      {label}
    </label>
    <input
      type="number"
      id={id}
      className="w-24 text-center md:mx-3"
      defaultValue={value}
      onChange={onChange}
    />
  </>
);

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
