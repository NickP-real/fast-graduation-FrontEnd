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
import React, { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
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

  const [form, setForm] = useState<Course>(course);
  const [id, setId] = useState<string>(
    "0".repeat(6 - course.id.toString().length) + course.id.toString()
  );
  const [isMinYear, setIsMinYear] = useState<boolean>(!!course.min_year);

  const term: boolean[] = [!!form.term_1, !!form.term_2, !!form.term_s];

  function handleOnIdChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(numRegex) != null) setId(e.target.value);
  }

  function handleOnThNameChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(thRegex) != null)
      setForm((curr) => ({ ...curr, name_th: e.target.value }));
  }

  function handleOnEnNameChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(engRegex) != null)
      setForm((curr) => ({ ...curr, name_en: e.target.value }));
  }

  function handleOnThDescChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.match(/^[ก-๏0-9 ]*$/) != null)
      setForm((curr) => ({ ...curr, description_th: e.target.value }));
  }

  function handleOnEnDescChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.match(/^[.a-zA-Z0-9 ]*$/) != null)
      setForm((curr) => ({ ...curr, description_en: e.target.value }));
  }

  function handleOnCreditChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(numRegex) != null)
      setForm((curr) => ({ ...curr, credit: +e.target.value }));
  }

  function handleOnTermCheck(index: number) {
    const updated: boolean[] = term.map((item: boolean, i: number) =>
      i === index ? !item : item
    );
    setForm((curr) => ({
      ...curr,
      term_1: updated[0] ? 1 : 0,
      term_2: updated[1] ? 1 : 0,
      term_s: updated[2] ? 1 : 0,
    }));
  }

  const handleOnIsMinYearCheck = () => setIsMinYear(!isMinYear);

  function handleOnMinYearChange(e: SetStateAction<string>) {
    if (e.toString().match(numRegex) != null)
      setForm((curr) => ({ ...curr, min_year: +e }));
  }

  function handleOnIsConsentDeptCheck() {
    setForm((curr) => ({ ...curr, consent_dept: !form.consent_dept ? 1 : 0 }));
  }

  function handleOnCancelClick() {
    router.back();
  }

  async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("test");

    const body: Course = {
      ...form,
      id: +id,
      name_th: form.name_th.trim(),
      name_en: form.name_en.trim(),
      description_th: form.description_th.trim(),
      description_en: form.description_en.trim(),
      min_year: isMinYear ? form.min_year : null,
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
              <section className="space-y-2">
                <LabelInput
                  label="รหัสวิชา"
                  id="course_id"
                  value={id}
                  onChange={handleOnIdChange}
                  pattern={"[0-9]{6}"}
                  title="6 digits course number"
                  maxLength={6}
                />
                <LabelInput
                  label="ชื่อวิชา (ภาษาไทย)"
                  id="course_thai"
                  value={form.name_th}
                  onChange={handleOnThNameChange}
                  pattern={"[ก-๏ ]+[0-9]*"}
                  title="Thai only"
                />
                <LabelInput
                  label="ชื่อวิชา (English)"
                  id="course_eng"
                  value={form.name_en}
                  onChange={handleOnEnNameChange}
                  pattern={"[a-zA-Z ]+[0-9]*"}
                  title="English only"
                />
              </section>

              <section className="max-w-md space-y-1">
                <DescInput
                  label="คำอธิบาย (ภาษาไทย)"
                  id="ThDesc"
                  value={form.description_th}
                  onChange={handleOnThDescChange}
                  title="Thai only description"
                />
                <DescInput
                  label="คำอธิบาย (English)"
                  id="EnDesc"
                  value={form.description_en}
                  onChange={handleOnEnDescChange}
                  title="English only description"
                />
              </section>

              <section className="text-right">
                <LabelInput
                  label="หน่วยกิจ"
                  id="credit"
                  className="ml-2 w-16"
                  pattern="[1-9]{1}"
                  value={form.credit}
                  onChange={handleOnCreditChange}
                  title="1 digit of credit (1-9)"
                />
              </section>

              <section>
                <h2 className="font-bold">ภาคการเรียนที่เปิด</h2>
                <div className="space-y-2 text-right">
                  {term.map((_, index: number) => {
                    const termNum = index + 1;
                    const id = `${termNum}_sem`;
                    return (
                      <div key={index}>
                        <CheckboxInput
                          label={`ภาคการศึกษาที่ ${termNum}`}
                          id={id}
                          defaultChecked={term[index]}
                          onChange={() => handleOnTermCheck(index)}
                        />
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="font-bold">เงื่อนไข</h2>
                <div className="mx-auto w-max space-y-2">
                  <div className="space-x-2">
                    <CheckboxInput
                      label="นักศึกษาชั้นปีที่"
                      id="study_year"
                      defaultChecked={isMinYear}
                      onChange={() => handleOnIsMinYearCheck()}
                    />
                    <div className="inline-block w-14">
                      <ListBox
                        contents={studyYearList}
                        value={form.min_year ? form.min_year.toString() : "1"}
                        setValue={(e) => handleOnMinYearChange(e)}
                      />
                    </div>
                  </div>

                  <CheckboxInput
                    label="Consent of Department"
                    id="consent"
                    defaultChecked={!!form.consent_dept}
                    onChange={() => handleOnIsConsentDeptCheck()}
                  />
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

type InputProps<T> = {
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<T>) => void;
  id: string;
  title: string;
  className?: string;
};

type LabelInputProps = InputProps<HTMLInputElement> & {
  pattern: string;
  maxLength?: number | undefined;
};

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  value,
  onChange,
  id,
  pattern,
  title,
  className,
  maxLength = undefined,
}) => (
  <div>
    <label htmlFor={id} className="w-40 font-bold">
      {label}
    </label>
    <input
      type="text"
      className={className}
      id={id}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      pattern={pattern}
      required={true}
      title={title}
    />
  </div>
);

const DescInput: React.FC<InputProps<HTMLTextAreaElement>> = ({
  label,
  id,
  value,
  onChange,
  title,
}) => (
  <>
    <label htmlFor={id} className="font-bold">
      {label}
    </label>
    <textarea
      className="min-h-[80px] w-full p-1"
      name={id}
      value={value}
      onChange={onChange}
      required={true}
      title={title}
    />
  </>
);

type CheckboxInputProps = {
  label: string;
  id: string;
  defaultChecked: boolean;
  onChange: () => void;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  id,
  defaultChecked,
  onChange,
}) => (
  <div className="inline-block space-x-2">
    <input
      type="checkbox"
      id={id}
      defaultChecked={defaultChecked}
      onChange={() => onChange()}
    />
    <label htmlFor={id} className="hover:cursor-pointer">
      {label}
    </label>
  </div>
);

export default CourseEdit;
