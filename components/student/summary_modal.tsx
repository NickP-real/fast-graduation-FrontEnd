import { Button } from "components/button/button";
import Modal from "components/modal/modal";
import PlanListTable from "components/student/table/plan_list_table";
import Table, { TableContent } from "components/table";
import { CategoryAbbr, Course } from "model/model";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { getCalculatedCredit } from "utils/calculate_credit";

type Props = {
  enrollCourse: Course[];
  categories: CategoryAbbr[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOnConfirmClick: () => void;
};

const SummaryModal: React.FC<Props> = ({
  enrollCourse,
  categories,
  open,
  setOpen,
  handleOnConfirmClick,
}: Props) => {
  const router = useRouter();
  const numberInfoHeaders: string[] = ["หมวดหมู่", "หน่วยกิจรวม"];

  const allCredits: { [key: number]: number } =
    getCalculatedCredit(enrollCourse);

  const contents: TableContent[] = [];

  for (const key in allCredits) {
    contents.push({
      texts: [categories[key].name_en, allCredits[key].toString()],
    });
  }

  function handleOnCancelClick() {
    setOpen(false);
  }

  function handleOnCreditClick() {
    router.push("/main/student/missing_credit");
  }

  return (
    <Modal title="สรุปผลการเลือก" open={open} setOpen={setOpen}>
      <main className="flex max-w-4xl flex-col gap-y-7">
        <div className="justify-self-center">
          <PlanListTable enrollCourse={enrollCourse} category={categories} />
        </div>

        <div className="mx-auto w-[90%]">
          <h2 className="mb-5 font-bold">จำนวนหน่วยกิจ</h2>
          <Table Header={numberInfoHeaders} Content={contents} />
        </div>

        <section className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-12 sm:space-y-0">
          <Button
            className="bg-fbrgreen/70 px-6 py-3 text-xl text-fpurple hover:bg-fbrgreen"
            onClick={handleOnConfirmClick}
            label="ยืนยันและดำเนินการ"
          />
          <Button
            className="bg-fbrgreen/70 px-6 py-3 text-xl text-fpurple hover:bg-fbrgreen"
            onClick={handleOnCreditClick}
            label="ตรวจสอบหน่วยกิจ"
          />
          <Button
            className="bg-fbryellow/70 px-6 py-3 text-xl text-fred hover:bg-fbryellow"
            onClick={handleOnCancelClick}
            label="ยกเลิก"
          />
        </section>
      </main>
    </Modal>
  );
};

export default SummaryModal;
