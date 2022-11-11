import { DelButton, EditButton } from "components/button/button";
import { EditCurriculumPage } from "components/edit_curriculum_page";
import AddPlanModal from "components/modal/add_plan";
import ConfirmModal from "components/modal/confirm";
import { TableContent } from "components/table";
import { ProgramPlan } from "model/model";
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
  const [addedPlan, setAddedPlan] = useState<ProgramPlan[]>([]);

  const [startYear, setStartYear] = useState<number>(Number(start));
  const [endYear, setEndYear] = useState<number>(Number(end));

  const [addPlanOpen, setAddPlanOpen] = useState<boolean>(false);
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);

  const [isDelConfirm, setIsDelConfirm] = useState<boolean>(false);
  const [currDel, setCurrDel] = useState<number>(-1);

  const modifiedContent: TableContent[] = makeModifiedContent(
    plans,
    link,
    router,
    handleOnDelClick
  );

  function handleOnAddClick() {
    setAddPlanOpen(true);
  }

  function handleOnPlanAdd(thaiName: string, engName: string) {
    const newPlan: ProgramPlan = {
      program_id: Number(cur),
      min_credit: 0,
      name_en: engName,
      name_th: thaiName,
    };
    setPlans([...plans, newPlan]);
    setAddedPlan([...addedPlan, newPlan]);
    setAddPlanOpen(false);
  }

  async function handleOnSaveClick() {
    // TODO: Api for delete plans
    let i = 0;
    for (i; i < addedPlan.length; i++) {
      const plan = addedPlan[i];
      const res = await Api.programPlanAdd(plan);
      console.log(res);
      if (res === "fail") {
        alert(`fail to add\n${plan.name_en}\n${plan.name_th}`);
        return;
      }
    }

    const curAddedPlan = i + 1 === addedPlan.length ? [] : addedPlan.slice(i);
    setAddedPlan(curAddedPlan);
    if (!curAddedPlan.length) {
      alert("Updated!");
      router.back();
    }
  }

  function handleOnCancelClick() {
    if (
      JSON.stringify(plans) !== JSON.stringify(datas) ||
      Number(start) !== startYear ||
      Number(end) !== endYear
    ) {
      setConfirmOpen(true);
      return;
    }
    router.back();
  }

  function onConfirm() {
    router.back();
  }

  function handleOnStartYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStartYear(+e.target.value);
  }

  function handleOnEndYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEndYear(+e.target.value);
  }

  function handleOnDelClick(index: number) {
    setCurrDel(index);
    setIsDelConfirm(true);
  }

  function handleOnDel() {
    const update: ProgramPlan[] = plans.filter((_, index) => index !== currDel);
    setPlans(() => update);
    setIsDelConfirm(false);
  }

  return (
    <>
      <AddPlanModal
        open={addPlanOpen}
        setOpen={setAddPlanOpen}
        onSubmit={handleOnPlanAdd}
      />
      <ConfirmModal
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={onConfirm}
      />
      <ConfirmModal
        open={isDelConfirm}
        setOpen={setIsDelConfirm}
        onConfirm={handleOnDel}
      />
      <EditCurriculumPage
        contents={modifiedContent}
        start={startYear}
        end={endYear}
        handleOnAdd={handleOnAddClick}
        headerText="แก้ไขหลักสูตร"
        handleOnSaveClick={handleOnSaveClick}
        handleOnCancelClick={handleOnCancelClick}
        handleOnStartYearChange={handleOnStartYearChange}
        handleOnEndYearChange={handleOnEndYearChange}
      />
    </>
  );
};

const makeModifiedContent = (
  plans: ProgramPlan[],
  link: string,
  router: NextRouter,
  handleOnDelClick: (index: number) => void
): TableContent[] =>
  plans.map((plan: ProgramPlan, index: number) => {
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
          onClick={() => handleOnDelClick(index)}
        />,
      ],
    };
  });

export default CurriculumEdit;
