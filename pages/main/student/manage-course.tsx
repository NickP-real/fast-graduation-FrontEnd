import CourseSearchModal from "components/course_search_modal";
import Panel from "components/main/panel";
import { StudentPage } from "components/page";
import PlanTable, { PlanContent } from "components/student/table/plan_table";
import React, { useEffect, useState } from "react";

const ManageCourse: React.FC = () => {
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

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [plans, setPlans] = useState<PlanContent[]>(datas);

  useEffect(() => {
    console.log(plans);
  }, [plans]);

  function handleOnAddClick() {
    setModalOpen(true);
  }

  return (
    <>
      <CourseSearchModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        plans={plans}
        setPlans={setPlans}
      />
      <StudentPage>
        <h2 className="fast-head text-4xl">จัดการแผนการเรียน</h2>
        <Panel>
          <div className="flex flex-col items-center justify-center gap-y-7">
            <PlanTable
              plans={plans}
              setPlans={setPlans}
              onAddClick={handleOnAddClick}
            />
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
