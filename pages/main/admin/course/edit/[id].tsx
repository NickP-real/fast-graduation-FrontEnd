import DelTable from "components/admin/table/del_table";
import ListBox from "components/listbox";
import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import SubmitButton from "components/submit_button";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Api } from "pages/api/api";
import React, { ChangeEvent, FormEvent, useState } from "react";

export const getServerSideProps = async ({
  req,
  query,
}: GetServerSidePropsContext) => {
  Api.setCookie(req.cookies);
  const course = await Api.courseFind(Number(query.id));

  return {
    props: {
      course,
    },
  };
};

const CourseEdit: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ course }) => {
  const studyYearList: string[] = ["1", "2", "3"];

  const [studyYear, setStudyYear] = useState<string>(studyYearList[0]);
  const [id, setId] = useState<string>(
    "0".repeat(6 - course.id.toString().length) + course.id.toString()
  );

  const [thName, setThName] = useState<string>(course.name_th);
  const [enName, setEnName] = useState<string>(course.name_en);
  const [thDesc, setThDesc] = useState<string>(course.description_th);
  const [enDesc, setEnDesc] = useState<string>(course.description_en);
  const [credit, setCredit] = useState<number>(course.credit);
  const [term, setTerm] = useState<boolean[]>([
    !!course.term_1,
    !!course.term_2,
    !!course.term_s,
  ]);
  const [minYear, setMinYear] = useState<number | null>(course.min_year);
  const [consentDept, setConsentDept] = useState<boolean>(
    !!course.consent_dept
  );

  const handleOnIdChange = (e: ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);
  const handleOnThNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setThName(e.target.value);
  const handleOnEnNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEnName(e.target.value);
  const handleOnThDescChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setThDesc(e.target.value);
  const handleOnEnDescChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setEnDesc(e.target.value);
  const handleOnCreditChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCredit(Number(e.target.value));

  function handleOnTermCheck(index: number) {
    const updated: boolean[] = term.map((item: boolean, i: number) =>
      i === index ? !item : item
    );
    setTerm(() => updated);
  }

  function handleOnAddClick() {
    return;
  }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("test");
  }

  return (
    <AdminPage>
      <main className="mx-auto max-w-4xl">
        <h1>จัดการรายวิชา</h1>
        <Panel>
          <form
            className="flex flex-col items-center justify-between space-y-4"
            onSubmit={handleOnSubmit}
          >
            <main className="space-y-6">
              <section className="space-y-2 [&_label]:w-40 [&_label]:font-bold">
                <div>
                  <label htmlFor="course_id">รหัสวิชา</label>
                  <input
                    type="text"
                    id="course_id"
                    value={id.toString()}
                    onChange={handleOnIdChange}
                    minLength={6}
                    maxLength={6}
                    pattern={"[0-9]{6}"}
                    required={true}
                    title="6 digits course number"
                  />
                </div>
                <div>
                  <label htmlFor="course_thai">ชื่อวิชา (ภาษาไทย)</label>
                  <input
                    type="text"
                    id="course_thai"
                    value={thName}
                    onChange={handleOnThNameChange}
                  />
                </div>
                <div>
                  <label htmlFor="course_eng">ชื่อวิชา (English)</label>
                  <input
                    type="text"
                    id="course_eng"
                    value={enName}
                    onChange={handleOnEnNameChange}
                  />
                </div>
              </section>

              <section className="space-y-1 [&_textarea]:min-h-[80px] [&_textarea]:w-full [&_textarea]:p-1 [&>p]:font-bold">
                <p>คำอธิบาย (ภาษาไทย)</p>
                <textarea value={thDesc} onChange={handleOnThDescChange} />
                <p>คำอธิบาย (English)</p>
                <textarea value={enDesc} onChange={handleOnEnDescChange} />
              </section>

              <section className="text-right">
                <label htmlFor="credit" className="font-bold">
                  หน่วยกิจ
                </label>
                <input
                  type="number"
                  id="credit"
                  className="ml-2 w-16"
                  value={credit}
                  onChange={handleOnCreditChange}
                />
              </section>

              <section>
                <h2 className="font-bold">ภาคการเรียนที่เปิด</h2>
                <div className="space-y-2 text-right [&_div]:space-x-2">
                  {term.map((item: boolean, index: number) => {
                    const termNum = index + 1;
                    const id = `${termNum}_sem`;
                    return (
                      <div key={index}>
                        <input
                          type="checkbox"
                          id={id}
                          checked={term[index]}
                          onClick={() => handleOnTermCheck(index)}
                        />
                        <label htmlFor={id}>ภาคการศึกษาที่ {termNum}</label>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="font-bold">เงื่อนไข</h2>
                <div className="mx-auto w-max space-y-2">
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

            <SubmitButton />
          </form>
        </Panel>
      </main>
    </AdminPage>
  );
};

export default CourseEdit;
