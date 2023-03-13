import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import React, { ChangeEvent, useState } from "react";
import CourseTable from "components/admin/table/course_table";
import SearchBar from "components/search_bar";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Api, catchErrorRedirectLogin } from "pages/api/api";
import { Course } from "model/model";
import { AddCourseButton } from "components/button/button";
import ConfirmModal from "components/modal/confirm";
import { useRouter } from "next/router";
import AddCourseModal from "components/modal/add_course";

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  Api.setCookie(req.cookies);
  return await catchErrorRedirectLogin(async () => {
    const datas = await Api.courseBrowse();
    return {
      props: {
        datas,
      },
    };
  });
};

const CourseBrowse: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ datas }) => {
  const router = useRouter();

  const [courses, setCourses] = useState<Course[]>(datas);
  const [query, setQuery] = useState<string>("");

  const [currDel, setCurrDel] = useState<number>(-1);
  const [isDelModal, setIsDelModal] = useState<boolean>(false);

  const [isAddModal, setIsAddModal] = useState<boolean>(false);

  const filterdCourses: Course[] = query
    ? courses.filter((course: Course) => {
        const id: string =
          "0".repeat(6 - course.id.toString().length) + course.id.toString();
        const name: string = course.name_en + course.name_th;
        const searchStr: string = `${id}${name}`
          .toLowerCase()
          .replace(/\s+/g, "");
        return searchStr.includes(query.toLowerCase().replace(/\s+/g, ""));
      })
    : courses;

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  const handleOnSearchClear = () => setQuery("");

  function handleOnDeleteClick(index: number) {
    setCurrDel(index);
    setIsDelModal(true);
  }

  async function handleOnDel() {
    const update: Course[] = courses.filter((_, index) => currDel !== index);
    const delCourse = courses.find((_, index) => currDel === index);
    if (delCourse) await Api.courseDelete(delCourse?.id);
    setCourses(() => update);
  }

  const handleOnCourseAddClick = () => setIsAddModal(true);

  async function handleOnAdd(newCourseId: number) {
    let isExist = false;
    courses.forEach((course) => {
      if (course.id === newCourseId) {
        alert(`${newCourseId} already exist.`);
        isExist = true;
        return;
      }
    });

    if (isExist) return;

    // TODO: Api add
    const body: Course = {
      consent_dept: 0,
      credit: 1,
      id: newCourseId,
      description_en: "",
      description_th: "",
      min_year: 1,
      name_en: "",
      name_th: "",
      term_1: 1,
      term_2: 0,
      term_s: 0,
    };
    const res = await Api.courseAdd(body);
    console.log(res);
    router.push(`/main/admin/course/edit/${newCourseId}`);
    setIsAddModal(false);
  }

  return (
    <>
      <AddCourseModal
        open={isAddModal}
        setOpen={setIsAddModal}
        handleOnAdd={handleOnAdd}
      />
      <ConfirmModal
        open={isDelModal}
        setOpen={setIsDelModal}
        onConfirm={handleOnDel}
      />
      <AdminPage>
        <h1>จัดการข้อมูลรายวิชาที่เปิดสอน</h1>
        <Panel>
          <div className="ml-auto w-max">
            <AddCourseButton onClick={handleOnCourseAddClick} />
          </div>
          <SearchBar
            query={query}
            handleOnChange={handleOnChange}
            handleOnDelClick={handleOnSearchClear}
          />
          <div className="my-6">
            <CourseTable
              courses={filterdCourses}
              handleOnDeleteClick={handleOnDeleteClick}
            />
          </div>
        </Panel>
      </AdminPage>
    </>
  );
};

export default CourseBrowse;
