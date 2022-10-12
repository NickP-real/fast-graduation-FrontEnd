import Panel from "components/main/panel";
import Page from "components/page";
import PlanListTable from "components/student/table/plan_list_table";

const Suggestion: React.FC = () => {
  return (
    <Page type="Student">
      <h2 className="fast-head text-4xl">ผลการแนะนำ</h2>
      <div className="flex flex-col gap-y-6">
        <Panel>
          <h2 className="fast-head mb-6 text-4xl">ปี x เทอม 1</h2>
          <PlanListTable />
        </Panel>
        <Panel>
          <h2 className="fast-head mb-6 text-4xl">ปี x เทอม 2</h2>
          <PlanListTable />
        </Panel>

        <section className="mx-auto flex gap-x-10">
          <ConfirmButton textColor="purple" bgColor="green" text="เสร็จสิ้น" />
          <ConfirmButton textColor="black" bgColor="blue" text="พิมพ์" />
        </section>
      </div>
    </Page>
  );
};

type ButtonProps = {
  text: string;
  textColor: "purple" | "black";
  bgColor: "green" | "blue";
};

const ConfirmButton: React.FC<ButtonProps> = ({
  text,
  textColor,
  bgColor,
}: ButtonProps) => {
  return (
    <button
      className={`h-12 w-32 rounded-lg ${
        textColor === "purple" ? "text-fpurple" : "text-fblack"
      } ${
        bgColor == "green"
          ? "bg-fbrgreen/70 hover:bg-fbrgreen"
          : "bg-fdblue/70 hover:bg-fdblue"
      } text-center text-xl font-extrabold shadow-md`}
    >
      {text}
    </button>
  );
};

export default Suggestion;
