import Panel from "components/main/panel";
import Page from "components/page";
import PlanCheckTable from "components/student/table/plan_check_table";

const Result: React.FC = () => {
  return (
    <Page type="Student">
      <h2 className="text-4xl fast-head">ผลการแนะนำ</h2>
      <div className="flex flex-col gap-y-6">
        <Panel>
          <h2 className="mb-6 text-4xl fast-head">ปี x เทอม 1</h2>
          <PlanCheckTable />
        </Panel>
        <Panel>
          <h2 className="mb-6 text-4xl fast-head">ปี x เทอม 2</h2>
          <PlanCheckTable />
        </Panel>

        <section className="flex gap-x-10 mx-auto">
          <button className="py-3 px-6 bg-[#D0E6A5] text-[#CCABD8] w-32 rounded-[32px]">
            บันทึก
          </button>
          <button className="py-3 px-6 bg-[#FFE7B4] text-[#FA897B] w-32 rounded-[32px]">
            แก้ไข
          </button>
        </section>
      </div>
    </Page>
  );
};

export default Result;
