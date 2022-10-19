import CancelButton from "components/button/cancel_button";
import ListBox from "components/listbox";
import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import SubmitButton from "components/button/submit_button";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Api, catchErrorRedirectLogin } from "pages/api/api";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { engRegex, numRegex, thRegex } from "utils/regex";
import { Course } from "model/model";
import { useRouter } from "next/router";

export const getServerSideProps = async ({
  req,
  query,
}: GetServerSidePropsContext) => {
  Api.setCookie(req.cookies);
  return await catchErrorRedirectLogin(async () => {
    const course = await Api.courseFind(Number(query.id));
    return {
      props: {
        course,
      },
    };
  });
};

const CourseEdit: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ course }) => {
  const router = useRouter();
  const studyYearList: string[] = ["1", "2", "3"];

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
  const [isMinYear, setIsMinYear] = useState<boolean>(!!course.min_year);
  const [isConsentDept, setIsConsentDept] = useState<boolean>(
    !!course.consent_dept
  );

  function handleOnIdChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(numRegex) != null) setId(e.target.value);
  }

  function handleOnThNameChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(thRegex) != null) setThName(e.target.value);
  }

  function handleOnEnNameChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(engRegex) != null) setEnName(e.target.value);
  }

  function handleOnThDescChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.match(/^[ก-๏0-9 ]*$/) != null) setThDesc(e.target.value);
  }

  function handleOnEnDescChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.match(/^[.a-zA-Z0-9 ]*$/) != null)
      setEnDesc(e.target.value);
  }

  function handleOnCreditChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(numRegex) != null)
      setCredit(Number(e.target.value));
  }

  function handleOnTermCheck(index: number) {
    const updated: boolean[] = term.map((item: boolean, i: number) =>
      i === index ? !item : item
    );
    setTerm(() => updated);
  }

  const handleOnIsMinYearCheck = () => setIsMinYear(!isMinYear);
  const handleOnIsConsentDeptCheck = () => setIsConsentDept(!isConsentDept);

  function handleOnCancelClick() {
    router.back();
  }

  async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("test");

    const body: Course = {
      consent_dept: isConsentDept ? 1 : 0,
      credit: credit,
      description_en: enDesc,
      description_th: thDesc,
      id: Number(id),
      min_year: isMinYear ? minYear : null,
      name_en: enName,
      name_th: thName,
      term_1: term[0] ? 1 : 0,
      term_2: term[1] ? 1 : 0,
      term_s: term[2] ? 1 : 0,
    };

    if (JSON.stringify(body) === JSON.stringify(course)) {
      router.back();
      return;
    }

    const status = await Api.courseEdit(course.id, body);

    if (status !== "success") {
      alert("Update Failed");
      return;
    }

    alert("Update Success");
    router.back();
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
                    value={id}
                    onChange={handleOnIdChange}
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
                    pattern={"[ก-๏ ]+[0-9]*"}
                    required={true}
                    title="Thai only"
                  />
                </div>
                <div>
                  <label htmlFor="course_eng">ชื่อวิชา (English)</label>
                  <input
                    type="text"
                    id="course_eng"
                    value={enName}
                    onChange={handleOnEnNameChange}
                    pattern={"[a-zA-Z ]+[0-9]*"}
                    required={true}
                    title="English only"
                  />
                </div>
              </section>

              <section className="space-y-1 [&_textarea]:min-h-[80px] [&_textarea]:w-full [&_textarea]:p-1 [&>p]:font-bold">
                <p>คำอธิบาย (ภาษาไทย)</p>
                <textarea
                  name="ThDesc"
                  value={thDesc}
                  onChange={handleOnThDescChange}
                  required={true}
                  title="Thai only description"
                />
                <p>คำอธิบาย (English)</p>
                <textarea
                  name="EnDesc"
                  value={enDesc}
                  onChange={handleOnEnDescChange}
                  required={true}
                  title="English only description"
                />
              </section>

              <section className="text-right">
                <label htmlFor="credit" className="font-bold">
                  หน่วยกิจ
                </label>
                <input
                  type="text"
                  id="credit"
                  className="ml-2 w-16"
                  pattern="[1-9]{1}"
                  value={credit}
                  onChange={handleOnCreditChange}
                  required={true}
                  title={"1 digit of credit (1-9)"}
                />
              </section>

              <section>
                <h2 className="font-bold">ภาคการเรียนที่เปิด</h2>
                <div className="space-y-2 text-right [&_div]:space-x-2">
                  {term.map((_, index: number) => {
                    const termNum = index + 1;
                    const id = `${termNum}_sem`;
                    return (
                      <div key={index}>
                        <input
                          type="checkbox"
                          id={id}
                          defaultChecked={term[index]}
                          onChange={() => handleOnTermCheck(index)}
                        />
                        <label htmlFor={id} className="hover:cursor-pointer">
                          ภาคการศึกษาที่ {termNum}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="font-bold">เงื่อนไข</h2>
                <div className="mx-auto w-max space-y-2">
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      id="study_year"
                      defaultChecked={isMinYear}
                      onChange={() => handleOnIsMinYearCheck()}
                    />
                    <label
                      htmlFor="study_year"
                      className="hover:cursor-pointer"
                    >
                      นักศึกษาชั้นปีที่
                    </label>
                    <div className="inline-block w-14">
                      <ListBox
                        contents={studyYearList}
                        value={minYear ? minYear.toString() : "1"}
                        setValue={(e) => setMinYear(Number(e))}
                      />
                    </div>
                  </div>

                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      defaultChecked={isConsentDept}
                      onChange={() => handleOnIsConsentDeptCheck()}
                    />
                    <label htmlFor="consent" className="hover:cursor-pointer">
                      Consent of Department
                    </label>
                  </div>
                </div>
              </section>
            </main>

            {/* <section className="my-2 w-full px-4"> */}
            {/*   <h2 className="font-bold">วิชาที่พ่าน</h2> */}
            {/* TODO: iterate here */}
            {/*   <div className="my-2"> */}
            {/*     <h3 className="my-2">1 กลุ่มในต่อไปนี้</h3> */}
            {/*     <DelTable onClick={handleOnAddClick} /> */}
            {/*   </div> */}
            {/* </section> */}

            {/* <button className="mx-auto block w-max rounded-lg bg-fyellow p-2 text-lg font-extrabold text-fpurple"> */}
            {/*   เพิ่มกลุ่มรายวิชา */}
            {/* </button> */}

            <div className="flex space-x-14">
              <SubmitButton />
              <CancelButton onClick={handleOnCancelClick} />
            </div>
          </form>
        </Panel>
      </main>
    </AdminPage>
  );
};

export default CourseEdit;
