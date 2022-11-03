import { AddButton, DelButton, EditButton } from "components/button/button";
import Panel from "components/main/panel";
import AddProgramModal from "components/modal/add_program";
import { AdminPage } from "components/page";
import { TableContent } from "components/table";
import { CurriculumTable } from "components/table/curriculum_table";
import { Program } from "model/model";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { NextRouter, useRouter } from "next/router";
import { Api, catchErrorRedirectLogin } from "pages/api/api";
import React, { useState } from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  Api.setCookie(context.req.cookies);

  return await catchErrorRedirectLogin(async () => {
    const datas = await Api.programBrowse();
    return {
      props: {
        datas,
      },
    };
  });
};

const ProgramBrowse: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ datas }) => {
  const router = useRouter();
  const link = "/main/admin/program";
  const [isAddCurModal, setIsAddCurModal] = useState<boolean>(false);
  const [programs, setProgram] = useState<Program[]>(datas);

  const modifiedContent: TableContent[] = makeModifiedContent(
    programs,
    link,
    router
  );

  function handleOnAdd() {
    setIsAddCurModal(true);
    // setIsAdd(!isAdd);
  }

  return (
    <>
      <AddProgramModal
        open={isAddCurModal}
        setOpen={setIsAddCurModal}
        setProgram={setProgram}
      />
      <AdminPage>
        <h1>จัดการหลักสูตร</h1>
        <Panel>
          <div className="ml-auto w-max">
            <AddButton onClick={handleOnAdd} />
          </div>
          <main className="my-6">
            <CurriculumTable contents={modifiedContent} />
          </main>
        </Panel>
      </AdminPage>
    </>
  );
};

const makeModifiedContent = (
  programs: Program[],
  link: string,
  router: NextRouter
): TableContent[] =>
  programs.map((content: Program, index: number) => {
    const program = content.program_name_th.split("(")[1].slice(0, -1);
    return {
      texts: [program],
      components: [
        <EditButton
          key={"0" + content.program_id + index}
          onClick={() => {
            router.push({
              pathname: `${link}/${content.program_id}`,
              query: { start: content.start_year, end: content.end_year },
            });
          }}
        />,
        <DelButton
          key={"1" + content.program_id + index}
          onClick={() => {
            return;
          }}
        />,
      ],
    };
  });

export default ProgramBrowse;
