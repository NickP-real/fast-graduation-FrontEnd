import CourseSearchModal from "components/course_search_modal";
import Panel from "components/main/panel";
import { StudentPage } from "components/page";
import PlanTable, { PlanContent } from "components/student/table/plan_table";
import React, { useState } from "react";

const ManageCourse: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const datas: PlanContent[] = [
    {
      courseId: "111111",
      courseName: "test",
      courseCategory: "also test",
    },
    {
      courseId: "111112",
      courseName: "test",
      courseCategory: "also test",
    },
  ];

  function handleOnAddClick() {
    setModalOpen(true);
  }

  return (
    <>
      <CourseSearchModal isOpen={modalOpen} setIsOpen={setModalOpen} />
      <StudentPage>
        <h2 className="fast-head text-4xl">จัดการแผนการเรียน</h2>
        <Panel>
          <div className="flex flex-col items-center justify-center gap-y-7">
            <PlanTable datas={datas} onAddClick={handleOnAddClick} />
            <button className="rounded-xl bg-[#FFDD95B5] px-4 py-2 text-xl font-extrabold text-[#fa897b] shadow-md">
              ตรวจสอบการเลือก
            </button>
          </div>
        </Panel>
      </StudentPage>
    </>
  );
};

export default ManageCourse;
