import Modal from "components/modal/modal";
import PlanListTable from "components/student/table/plan_list_table";
import Table, { TableContent } from "components/table";
import { CategoryAbbr, Course } from "model/model";
import React, { Dispatch, SetStateAction } from "react";

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
  const numberInfoHeaders: string[] = ["หมวดหมู่", "หน่วยกิจรวม"];

  const allCredits: { [key: number]: number } = {
    4: 0,
    3: 0,
    2: 0,
    5: 0,
    0: 0,
    1: 0,
    6: 0,
    9: 0,
    8: 0,
    7: 0,
  };

  enrollCourse.forEach(({ credit, category_id }: Course) => {
    if (category_id !== 1)
      return (allCredits[category_id ? category_id - 1 : 0] += credit);

    if (6 - allCredits[0] === 0) {
      allCredits[1] += credit;
    } else if (credit + allCredits[0] > 6) {
      const left = 6 - allCredits[0];
      allCredits[0] = 6;
      allCredits[1] += credit - left;
    } else {
      allCredits[0] += credit;
    }
  });

  const contents: TableContent[] = [];

  for (const key in allCredits) {
    contents.push({
      texts: [categories[key].name_en, allCredits[key].toString()],
    });
  }

  function handleOnCancelClick() {
    setOpen(false);
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
          <button
            className="h-16 w-60 rounded-xl bg-fbrgreen/70 text-2xl font-extrabold text-fpurple shadow-md hover:bg-fbrgreen"
            onClick={handleOnConfirmClick}
          >
            ยืนยันและดำเนินการ
          </button>
          <button
            onClick={handleOnCancelClick}
            className="h-16 w-32 rounded-xl bg-fbryellow/70 text-2xl font-extrabold text-fred shadow-md hover:bg-fbryellow"
          >
            ยกเลิก
          </button>
        </section>
      </main>
    </Modal>
  );
};

export default SummaryModal;
