import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import React, { ChangeEvent, useState } from "react";
import SearchTable from "components/admin/table/search_table";
import SearchBar from "components/search_bar";
import { NextPage } from "next";
import CourseSearchModal from "components/course_search_modal";
import { PlanContent } from "components/student/table/plan_table";

const ManageCourse: NextPage = () => {
  const datas: PlanContent[] = [
    {
      courseId: "1234",
      courseName: "one two three four",
      courseCategory: "test",
    },
    {
      courseId: "1235",
      courseName: "one two three four",
      courseCategory: "test",
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [plans, setPlans] = useState<PlanContent[]>(datas);
  const [query, setQuery] = useState<string>("");

  const filterdPlans: PlanContent[] = query
    ? plans.filter((plan: PlanContent) => {
        const id: string = plan.courseId;
        const name: string = plan.courseName;
        const category: string = plan.courseCategory;
        const searchStr: string = `${id}${name}${category}`.toLowerCase().replace(/\s+/g, "");
        return searchStr.includes(query.toLowerCase().replace(/\s+/g, ""));
      })
    : plans;

  function handleOnChange(e:ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  const handleOnDelClick = () => setQuery("")

  return (
    <>
      <CourseSearchModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        plans={plans}
        setPlans={setPlans}
      />
      <AdminPage>
        <h2 className="fast-text text-3xl">จัดการข้อมูลรายวิชาที่เปิดสอน</h2>
        <Panel>
          <SearchBar query={query} handleOnChange={handleOnChange} handleOnDelClick={handleOnDelClick}/>
          <div className="my-6">
            <SearchTable
              plans={filterdPlans}
              setPlans={setPlans}
              setIsOpen={setIsOpen}
            />
          </div>
        </Panel>
      </AdminPage>
    </>
  );
};

export default ManageCourse;
