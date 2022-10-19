import CourseSearchModal from "components/course_search_modal";
import Panel from "components/main/panel";
import { StudentPage } from "components/page";
import SummaryModal from "components/student/summary_modal";
import PlanTable from "components/student/table/plan_table";
import { Course, EnrollCourse } from "model/model";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { Api, catchErrorRedirectLogin } from "pages/api/api";
import React, { useState } from "react";

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  Api.setCookie(req.cookies);

  return await catchErrorRedirectLogin(async () => {
    const datas = await Api.courseBrowseFromPlan();
    const courses = datas.datas;
    const category = datas.categories;

    const enrolled = await Api.getUpdateEnrollment();

    let enrolledCourses = enrolled.map(({ course_id }) => {
      return courses.find(({ id }) => id === course_id);
    });

    if (!enrolledCourses) {
      enrolledCourses = [];
      return { enrolledCourses, courses, category };
    }
    return {
      props: { enrolledCourses, courses, category },
    };
  });
};

const Enrollment: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ enrolledCourses, courses, category }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isSummary, setIsSummary] = useState<boolean>(false);
  const [enrollCourse, setEnrollCourse] = useState<Course[]>(enrolledCourses);

  function handleOnAddClick() {
    setModalOpen(true);
  }

  function handleOnSummaryClick() {
    setIsSummary(true);
  }

  async function handleOnConfirmClick() {
    if (JSON.stringify(enrolledCourses) !== JSON.stringify(enrollCourse)) {
      const body: EnrollCourse[] = enrollCourse.map(({ id, category_id }) => {
        return {
          course_id: id,
          cat_id: category_id ? category_id : 0,
          term: 1,
          year: 2020,
          grade: "B+",
        };
      });

      const res = await Api.postUpdateEnrollment(body);

      if (res.data.status !== "success") {
        alert("Update Failed");
        return;
      }
    }
    router.push("/main/student/suggestion");
  }

  return (
    <>
      <SummaryModal
        enrollCourse={enrollCourse}
        categories={category}
        open={isSummary}
        setOpen={setIsSummary}
        handleOnConfirmClick={handleOnConfirmClick}
      />
      <CourseSearchModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        courses={courses}
        setEnrollCourse={setEnrollCourse}
        enrollCourse={enrollCourse}
        catagories={category}
      />
      <StudentPage>
        <h2 className="fast-head text-4xl">จัดการแผนการเรียน</h2>
        <Panel>
          <div className="flex flex-col items-center justify-center gap-y-7">
            <PlanTable
              courses={enrollCourse}
              setCourses={setEnrollCourse}
              onClick={handleOnAddClick}
              categories={category}
            />
            <button
              className="rounded-xl bg-[#FFDD95B5] px-4 py-2 text-xl font-extrabold text-[#fa897b] shadow-md"
              onClick={handleOnSummaryClick}
            >
              ตรวจสอบการเลือก
            </button>
          </div>
        </Panel>
      </StudentPage>
    </>
  );
};

export default Enrollment;
