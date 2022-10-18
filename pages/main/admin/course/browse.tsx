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
import CourseSearchModal from "components/course_search_modal";
import { Api } from "pages/api/api";
import { Course } from "model/model";

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  Api.setCookie(req.cookies);
  const datas = await Api.courseBrowse();
  return {
    props: {
      datas,
    },
  };
};

const CourseBrowse: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ datas }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [courses, setCourses] = useState<Course[]>(datas);
  const [query, setQuery] = useState<string>("");

  const filterdCourses: Course[] = query
    ? courses.filter((course: Course) => {
        const id: string = course.id.toString();
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

  const handleOnDelClick = () => setQuery("");

  return (
    <>
      <CourseSearchModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        plans={courses}
        setPlans={setCourses}
      />
      <AdminPage>
        <h1>จัดการข้อมูลรายวิชาที่เปิดสอน</h1>
        <Panel>
          <SearchBar
            query={query}
            handleOnChange={handleOnChange}
            handleOnDelClick={handleOnDelClick}
          />
          <div className="my-6">
            <CourseTable courses={filterdCourses} />
          </div>
        </Panel>
      </AdminPage>
    </>
  );
};

export default CourseBrowse;
