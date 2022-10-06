import React from "react";
import Panel from "components/main/panel";
import Page from "components/page";
import { NextPage } from "next";

export const Profile: NextPage = () => {
  return (
    <Page type="Admin">
      <main className="container my-5 mx-auto flex h-32 w-full flex-grow gap-x-5">
        <Panel small={true}>
          <h3 className="fast-text bg-white text-2xl">ข้อมูลส่วนตัว</h3>
        </Panel>
        <Panel shadow="orange"></Panel>
      </main>
    </Page>
  );
};

export default Profile;
