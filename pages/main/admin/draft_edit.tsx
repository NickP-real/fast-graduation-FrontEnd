import DelTable from "components/admin/table/del_table";
import CourseSearchModal from "components/course_search_modal";
import { AdminPage } from "components/page";
import SubmitButton from "components/submit_button";
import React, { useState } from "react";

const DraftEdit: React.FC = () => {
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

  function handleOnAddClick(e: React.MouseEvent) {
    e.preventDefault();
    setModal(true);
  }

  return (
    <>
      <CourseSearchModal isOpen={isModal} setIsOpen={setModal} />
      <AdminPage>
        <div className="w-full border border-black shadow-[25px_40px_40px_-15px_rgba(204,171,216,0.45)]">
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
            <form className="px-10">
              <section>
                <h3>วิชาแกน (Core)</h3>
                <DelTable onAddClick={handleOnAddClick} />
              </section>
              <hr className="my-5 h-1 border-b-0 bg-fbrred" />

              <section>
                <h3>วิชาเลือก (General Elective)</h3>
                <DelTable onAddClick={handleOnAddClick} />
              </section>
              <hr className="my-5 h-1 border-b-0 bg-fbrred" />

              <section>
                <h3>วิชาเลือกเสรี (Free Elective)</h3>
                <table className="ml-auto border-separate border-spacing-x-3">
                  <tbody>
                    <tr>
                      <td>หน่วยกิจขั้นต่ำ</td>
                      <td>
                        <input
                          type="text"
                          className="w-20 border border-black bg-white text-center active:rounded-none"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <hr className="my-5 h-1 border-b-0 bg-fbrred" />

              <section>
                <h3>วิชาเอกบังคับร่วม (Compulsory)</h3>
                <DelTable onAddClick={handleOnAddClick} />
              </section>
              <hr className="my-5 h-1 border-b-0 bg-fbrred" />

              <section>
                <h3>วิชาเอกเลือก (Major Elective)</h3>
                <DelTable onAddClick={handleOnAddClick} />
              </section>
              <hr className="my-5 h-1 border-b-0 bg-fbrred" />

              <section>
                <h3>วิชาโท (Minor)</h3>
              </section>
              <hr className="my-5 h-1 border-b-0 bg-fbrred" />
            </form>
          )}

          {mode && (
            <form className="px-10">
              <section>
                <h3>ปี x เทอม 1</h3>
                <DelTable onAddClick={handleOnAddClick} />
              </section>
            </form>
          )}

          <SubmitButton />
        </div>
      </AdminPage>
    </>
  );
};

export default DraftEdit;
