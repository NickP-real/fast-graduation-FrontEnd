import Panel from "components/main/panel";
import Page from "components/page";
import PlanCheckTable from "components/student/table/plan_check_table";

const Suggestion: React.FC = () => {
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
          <ConfirmButton textColor="purple" bgColor="green" text="บันทึก" />
          <ConfirmButton textColor="red" bgColor="yellow" text="แก้ไข" />
        </section>
      </div>
    </Page>
  );
};

type ButtonProps = {
  text: string;
  textColor: "purple" | "red";
  bgColor: "green" | "yellow";
};

const ConfirmButton: React.FC<ButtonProps> = ({
  text,
  textColor,
  bgColor,
}: ButtonProps) => {
  return (
    <button
      className={`h-12 w-32 rounded-[32px] ${
        textColor === "purple" ? "text-fpurple" : "texp-fred"
      } ${
        bgColor == "green" ? "bg-fbrgreen" : "bg-fbryellow"
      } text-center text-xl font-extrabold shadow-md`}
    >
      {text}
    </button>
  );
};

export default Suggestion;
