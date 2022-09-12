import Panel from "components/main/panel";
import Page from "components/page";
import PlanCheckTable from "components/student/table/plan_check_table";

const Result: React.FC = () => {
  return (
    <Page type="Student">
      <h2 className="fast-head text-4xl">ผลการแนะนำ</h2>
      <div className="flex flex-col gap-y-6">
        <Panel>
          <h2 className="fast-head mb-6 text-4xl">ปี x เทอม 1</h2>
          <PlanCheckTable />
        </Panel>
        <Panel>
          <h2 className="fast-head mb-6 text-4xl">ปี x เทอม 2</h2>
          <PlanCheckTable />
        </Panel>

        <section className="mx-auto flex gap-x-10">
          <button className="w-32 rounded-[32px] bg-[#D0E6A5] py-3 px-6 text-[#CCABD8]">
            บันทึก
          </button>
          <button className="w-32 rounded-[32px] bg-[#FFE7B4] py-3 px-6 text-[#FA897B]">
            แก้ไข
          </button>
        </section>
      </div>
    </Page>
  );
};

export default Result;
