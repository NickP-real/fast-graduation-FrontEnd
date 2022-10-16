import { DelButton, EditButton } from "components/button";
import EditCurriculumPage from "components/edit_curriculum_page";
import { TableContent } from "components/table";
import { ProgramPlan } from "model/model";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { Api, catchErrorRedirectLogin } from "pages/api/api";
import React, { useState } from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  Api.setCookie(context.req.cookies);
  // console.log(context.query.cur);
  return await catchErrorRedirectLogin(async () => {
    const datas = await Api.programPlanBrowse(Number(context.query.cur));
    return {
      props: {
        datas,
      },
    };
  });
};

const CurriculumEdit: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ datas }) => {
  const router = useRouter();
  const { cur, start, end } = router.query;
  const link = `/main/admin/program/${cur?.toString()}/edit`;
  const [plans, setPlans] = useState<ProgramPlan[]>(datas);

  const modifiedContent: TableContent[] = plans.map(
    (plan: ProgramPlan, index: number) => {
      const planName = `${plan.name_en}\n${plan.name_th}`;
      return {
        texts: [planName],
        components: [
          <EditButton
            key={`0${index}${plan.id}${plan.program_id}`}
            onClick={() => {
              router.push(`${link}/${plan.id}`);
            }}
          />,
          <DelButton
            key={`1${index}${plan.id}${plan.program_id}`}
            onClick={() => {
              return;
            }}
          />,
        ],
      };
    }
  );

  // useEffect(() => {
  //   async function fetchData() {
  //     const datas = await api
  //       .get(`admin/program_plan/browse?q={${cur}}`)
  //       .then((res) => console.log(res.data));
  //   }
  //   if (cur) {
  //     fetchData();
  //   }
  // }, [cur]);

  function handleOnAdd() {
    return;
  }
  function handleOnSaveClick() {
    return;
  }
  function handleOnCancelClick() {
    router.back();
  }

  return (
    <EditCurriculumPage
      contents={modifiedContent}
      start={Number(start)}
      end={Number(end)}
      handleOnAdd={handleOnAdd}
      headerText="แก้ไขหลักสูตร"
    />
  );
};

export default CurriculumEdit;
