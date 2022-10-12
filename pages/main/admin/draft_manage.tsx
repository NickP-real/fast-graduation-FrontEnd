import DelTable from "components/admin/table/del_table";
import ListBox from "components/listbox";
import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import SubmitButton from "components/submit_button";
import { NextPage } from "next";
import React, { useState } from "react";

const DraftManage: NextPage = () => {
  const studyYearList: string[] = ["1", "2", "3"];

  const [studyYear, setStudyYear] = useState<string>(studyYearList[0]);

  function handleOnAddClick() {
    return;
  }

  return (
    <AdminPage>
      <main className="mx-auto max-w-4xl">
        <h1>จัดการรายวิชา</h1>
        <Panel>
          <form className="flex flex-col items-center justify-between space-y-4">
            <main className="space-y-6">
              <section className="space-y-2 [&_label]:w-32 [&_label]:font-bold">
                <div>
                  <label htmlFor="course_id">รหัสวิชา</label>
                  <input type="text" id="course_id" />
                </div>
                <div>
                  <label htmlFor="course_thai">ชื่อวิชา (ภาษาไทย)</label>
                  <input type="text" id="course_thai" />
                </div>
                <div>
                  <label htmlFor="course_eng">ชื่อวิชา (English)</label>
                  <input type="text" id="course_eng" />
                </div>
              </section>

              <section className="space-y-1 [&_textarea]:min-h-[80px] [&_textarea]:w-full [&_textarea]:p-1 [&>p]:font-bold">
                <p>คำอธิบาย (ภาษาไทย)</p>
                <textarea />
                <p>คำอธิบาย (English)</p>
                <textarea />
              </section>

              <section className="text-right">
                <label htmlFor="credit" className="font-bold">
                  หน่วยกิจ
                </label>
                <input type="number" id="credit" className="ml-2 w-16" />
              </section>

              <section>
                <h2 className="font-bold">ภาคการเรียนที่เปิด</h2>
                <div className="space-y-2 text-right [&_div]:space-x-2">
                  <div>
                    <input type="checkbox" id="first_sem" />
                    <label htmlFor="first_sem">ภาคการศึกษาที่ 1</label>
                  </div>
                  <div>
                    <input type="checkbox" id="sec_sem" />
                    <label htmlFor="sec_sem">ภาคการศึกษาที่ 2</label>
                  </div>
                  <div>
                    <input type="checkbox" id="third_sem" />
                    <label htmlFor="third_sem">ภาคการศึกษาที่ 3</label>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold">เงื่อนไข</h2>
                <div className="mx-auto w-52 space-y-2">
                  <div className="space-x-2">
                    <input type="checkbox" id="study_year" />
                    <label htmlFor="study_year">นักศึกษาชั้นปีที่</label>
                    <div className="inline-block w-14">
                      <ListBox
                        contents={studyYearList}
                        value={studyYear}
                        setValue={setStudyYear}
                      />
                    </div>
                  </div>

                  <div className="space-x-2">
                    <input type="checkbox" id="consent" />
                    <label htmlFor="consent">Consent of Department</label>
                  </div>
                </div>
              </section>
            </main>

            <section className="my-2 w-full px-4">
              <h2 className="font-bold">วิชาที่พ่าน</h2>
              {/* TODO: iterate here */}
              <div className="my-2">
                <h3 className="my-2">1 กลุ่มในต่อไปนี้</h3>
                <DelTable onClick={handleOnAddClick} />
              </div>
            </section>

            <button className="mx-auto block w-max rounded-lg bg-fyellow p-2 text-lg font-extrabold text-fpurple">
              เพิ่มกลุ่มรายวิชา
            </button>
          </form>

          <SubmitButton />
        </Panel>
      </main>
    </AdminPage>
  );
};

export default DraftManage;
