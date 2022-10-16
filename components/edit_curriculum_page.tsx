import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import {
  CurriculumTable,
  CurriculumTableProps,
} from "components/table/curriculum_table";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = CurriculumTableProps & {
  headerText: "แก้ไขหลักสูตร" | "เพิ่มหลักสูตร";
  start: number;
  end: number;
};

const EditCurriculumPage: React.FC<Props> = ({
  contents,
  handleOnAdd,
  headerText,
  start,
  end,
}: Props) => {
  const router = useRouter();
  const studyYear: string[] = ["ภาคเรียนที่ 1", "ภาคเรียนที่ 2"];

  const [startYear, setStartYear] = useState<number>(start);
  const [endYear, setEndYear] = useState<number>(end);

  const [startSemester, setStartSemester] = useState<string>(studyYear[0]);
  const [endSemester, setEndSemester] = useState<string>(studyYear[1]);
  // const link = `/main/admin/manage-curriculum/${cur?.toString()}/edit`;
  // const content: string[] = ["A", "B", "C"];

  function handleOnStartSemesterChange(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    setStartSemester(e.target.value);
  }

  function handleOnEndSemesterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setEndSemester(e.target.value);
  }

  function handleOnStartYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStartYear(Number(e.target.value));
  }

  function handleOnEndYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEndYear(Number(e.target.value));
  }

  // function handleOnAdd() { }
  function handleOnSaveClick() {
    return;
  }
  function handleOnCancelClick() {
    router.back();
  }

  return (
    <AdminPage>
      <Panel>
        <h2 className="fast-head text-4xl">{headerText}</h2>

        <div className="my-6">
          <CurriculumTable handleOnAdd={handleOnAdd} contents={contents} />
        </div>

        <form className="fast-text my-4 max-w-max items-center space-y-1 text-xl font-extrabold md:space-y-2">
          <section className="flex flex-col gap-y-1 md:flex-row md:gap-y-0 md:space-x-2">
            <div>
              <label className="w-28 md:w-14" htmlFor="start_year">
                เริ่มต้น
              </label>
              <YearListbox
                name="start_semester"
                id="start_semester"
                value={startSemester}
                onChange={handleOnStartSemesterChange}
                contents={studyYear}
              />
            </div>

            <div>
              <label htmlFor="start_year" className="w-28 md:w-24">
                ปีการศึกษา
              </label>
              <input
                type="number"
                id="start_date"
                className="w-36 md:mx-3"
                value={startYear}
                onChange={handleOnStartYearChange}
              />
            </div>
          </section>

          <section className="flex flex-col gap-y-1 md:flex-row md:gap-y-0 md:space-x-2">
            <div>
              <label className="w-28 md:w-14" htmlFor="end_year">
                สิ้นสุด
              </label>
              <YearListbox
                name="end_semester"
                id="end_semester"
                value={endSemester}
                onChange={handleOnEndSemesterChange}
                contents={studyYear}
              />
            </div>

            <div>
              <label htmlFor="end_year" className="w-28 md:w-24">
                ปีการศึกษา
              </label>
              <input
                type="number"
                id="end_year"
                className="w-36 md:mx-3"
                value={endYear}
                onChange={handleOnEndYearChange}
              />
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

type ListboxProps = {
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  contents: string[];
};

const YearListbox: React.FC<ListboxProps> = ({
  name,
  id,
  value,
  onChange,
  contents,
}: ListboxProps) => {
  return (
    <select
      name={name}
      id={id}
      className="w-36 text-fred md:mx-3"
      value={value}
      onChange={onChange}
    >
      {contents.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
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
