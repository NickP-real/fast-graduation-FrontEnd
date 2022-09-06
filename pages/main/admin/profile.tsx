import React from "react";
import Panel from "components/main/panel";
import Page from "components/page";

export const Profile: React.FC = () => {
  return (
    <Page type="Admin">
      <main className="container flex flex-grow gap-x-5 my-5 mx-auto w-full h-32">
        <Panel width={40} shadow="25px_40px_40px_-15px_rgba(204,171,216,0.45)">
          <h3 className="text-2xl bg-white fast-text">ข้อมูลส่วนตัว</h3>
        </Panel>
        <Panel
          width={60}
          shadow="25px_40px_40px_-15px_rgba(250,137,123,0.35)"
        ></Panel>
      </main>
    </Page>
  );
};

export default Profile;
