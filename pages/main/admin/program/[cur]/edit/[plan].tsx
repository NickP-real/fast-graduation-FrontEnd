import DelTable from "components/admin/table/del_table";
import CourseSearchModal from "components/course_search_modal";
import { AdminPage } from "components/page";
import SubmitButton from "components/submit_button";
import React, { useState } from "react";

const Edit: React.FC = () => {
  const [mode, setMode] = useState<boolean>(false);
  const [isModal, setModal] = useState<boolean>(false);

  function handleOnCourseClick(e: React.MouseEvent) {
    e.preventDefault();
    if (mode) {
      setMode(false);
    }
  }

  function handleOnTimelineClick(e: React.MouseEvent) {
    e.preventDefault();
    if (!mode) {
      setMode(true);
    }
  }

  function handleOnAddClick() {
    setModal(true);
  }

  type TableProps = {
    label: string;
    content?: string[];
  };

  const ContentTable: React.FC<TableProps> = ({ label }: TableProps) => {
    return (
      <section className="py-6">
        <h3 className="mb-1">{label}</h3>
        <DelTable onClick={handleOnAddClick} />
      </section>
    );
  };

  type NumberInfoProps = {
    label: string;
  };

  const NumberInfo: React.FC<NumberInfoProps> = ({
    label,
  }: NumberInfoProps) => {
    return (
      <section className="py-6">
        <h3>{label}</h3>
        <div className="ml-auto block max-w-max space-x-2">
          <label htmlFor="credit">หน่วยกิจขั้นต่ำ</label>
          <input type="number" id="credit" className="w-20 text-center" />
        </div>
      </section>
    );
  };

  return (
    <>
      {/* <CourseSearchModal isOpen={isModal} setIsOpen={setModal} /> */}

      <AdminPage>
        <main className="mx-auto max-w-4xl">
          <h1>จัดการแผนการศึกษา</h1>
          <div className="my-5 w-full border border-black shadow-[25px_40px_40px_-15px_rgba(204,171,216,0.45)]">
            <header className="flex h-16 text-xl font-extrabold text-fpurple">
              <button
                className={`w-[50vw] tracking-wider ${
                  !mode ? "border-b-0 border-r-[1px]" : "border-b-[1px]"
                } border-black`}
                onClick={handleOnCourseClick}
              >
                จัดการวิชา
              </button>
              <button
                className={`w-[50vw] tracking-wider ${
                  mode ? "border-b-0 border-l-[1px]" : "border-b-[1px]"
                } border-black`}
                onClick={handleOnTimelineClick}
              >
                จัดการ Timeline
              </button>
            </header>

            {!mode && (
              <form className="divide-y-2 divide-fred px-10">
                <ContentTable label="วิชาแกน (Core)" />
                <ContentTable label="วิชาเลือก (General Elective)" />

                <NumberInfo label="วิชาเลือกเสรี (Free Elective)" />

                <ContentTable label="วิชาเอกบังคับร่วม (Compulsory)" />
                <ContentTable label="วิชาเอกเลือก (Major Elective)" />

                <NumberInfo label="วิชาโท (Minor)" />
                {/* Div below for divider */}
                <div></div>
              </form>
            )}

            {mode && (
              <form className="px-10">
                <ContentTable label="ปี x เทอม 1" />
              </form>
            )}

            <SubmitButton />
          </div>
        </main>
      </AdminPage>
    </>
  );
};

export default Edit;
