import React from "react";
import Panel from "components/main/panel";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { AdminPage } from "components/page";
import { Api, catchErrorRedirectLogin } from "pages/api/api";
import StudentInfoTable from "components/table/student_info_table";

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  Api.setCookie(req.cookies);

  return await catchErrorRedirectLogin(async () => {
    const data = await Api.getStudentsInfo();
    console.log(data);
    return {
      props: { studentDatas: data },
    };
  });
};

export const Profile: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ studentDatas }) => {
  return (
    <AdminPage>
      <Panel>
        <main className="space-y-4">
          <p className="font-bold">ชื่อ: </p>
          <StudentInfoTable studentDatas={studentDatas} />
        </main>
      </Panel>
    </AdminPage>
  );
};

export default Profile;
