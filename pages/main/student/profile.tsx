import Panel from "components/main/panel";
import { StudentPage } from "components/page";
import Table, { TableContent } from "components/table";
import { Course } from "model/model";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Api, catchErrorRedirectLogin } from "pages/api/api";
import React from "react";
import { getCalculatedCredit } from "utils/calculate_credit";

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  Api.setCookie(req.cookies);

  return await catchErrorRedirectLogin(async () => {
    const datas = await Api.courseBrowseFromPlan();
    const courses = datas.datas;
    const category = datas.categories;

    const enrolled = await Api.getUpdateEnrollment();

    const enrolledCourses: Course[] = enrolled.map(({ course_id }) => {
      return courses.find(({ id }) => id === course_id);
    }) as Course[];

    return {
      props: { enrolledCourses, category },
    };
  });
};

const Profile: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ enrolledCourses, category }) => {
  const allCredits = getCalculatedCredit(enrolledCourses);

  const numberInfoHeaders: string[] = ["หมวดหมู่", "หน่วยกิจรวม"];
  const creditTable: TableContent[] = [];

  for (const key in allCredits) {
    creditTable.push({
      texts: [category[key].name_en, allCredits[key].toString()],
    });
  }

  // TODO: get user info

  return (
    <StudentPage>
      <h1>ข้อมูลส่วนตัว</h1>
      <Panel>
        <main className="space-y-2">
          <p>นาย กขคง กขคง</p>
          <p>630511xxx</p>
          <section>หลักสูตรที่เรียน</section>
          <section>แผนการเรียน</section>
          <h2 className="font-bold">หน่วยกิจสะสม</h2>
          <Table Header={numberInfoHeaders} Content={creditTable} />
        </main>
      </Panel>
    </StudentPage>
  );
};

export default Profile;
