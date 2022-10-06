import Panel from "components/main/panel";
import Page from "components/page";
import { NextPage } from "next";
import React from "react";

const Profile: NextPage = () => {
  return (
    <Page type="Student">
      <main className="container my-5 mx-auto flex w-full gap-x-5">
        <Panel small={true}>
          <h3 className="fast-text bg-white text-2xl">ข้อมูลส่วนตัว</h3>
          <main>
            <p>นาย กขคง กขคง</p>
            <p>630510xxx</p>

            <section>หลักสูตรที่เรียน</section>
            <section>แผนการเรียน</section>

            <p>หน่วยกิจสะสม</p>
            <table>
              <tbody className="text-center uppercase">
                <tr>
                  <td>major</td>
                  <td></td>
                </tr>
                <tr>
                  <td>minor</td>
                  <td></td>
                </tr>
                <tr>
                  <td>core</td>
                  <td></td>
                </tr>
                <tr>
                  <td>ge</td>
                  <td></td>
                </tr>
                <tr>
                  <td>fe</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </main>
        </Panel>
        <Panel shadow="orange">....</Panel>
      </main>
    </Page>
  );
};

export default Profile;
