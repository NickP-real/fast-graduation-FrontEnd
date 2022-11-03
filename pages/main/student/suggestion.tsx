import Panel from "components/main/panel";
import { StudentPage } from "components/page";
import PlanListTable from "components/student/table/plan_list_table";
import { Course } from "model/model";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { Api, catchErrorRedirectLogin } from "pages/api/api";

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  Api.setCookie(req.cookies);

  return await catchErrorRedirectLogin(async () => {
    const datas = await Api.courseBrowseFromPlan();
    const courses = datas.datas;
    const category = datas.categories;

    const { term_1, term_2 } = await Api.getSuggestion();

    const term1Course = term_1.map((id) =>
      courses.find(({ id: find_id }) => id === find_id)
    );
    const term2Course = term_2.map((id) =>
      courses.find(({ id: find_id }) => id === find_id)
    );

    return {
      props: { term1Course, term2Course, category },
    };
  });
};

const Suggestion: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ term1Course, term2Course, category }) => {
  const router = useRouter();

  function handleOnConfirmClick() {
    router.push("/main/student/profile");
  }

  function handleOnPrintClick() {
    window.print();
  }

  return (
    <StudentPage>
      <h1 className="print:text-fred">ผลการแนะนำ</h1>
      <div className="flex flex-col gap-y-6">
        <Panel>
          <h2 className="mb-6 font-bold">เทอมถัดไป</h2>
          <PlanListTable
            category={category}
            enrollCourse={term1Course as Course[]}
          />
        </Panel>
        <Panel>
          <h2 className="mb-6 font-bold">2 เทอมถัดไป</h2>
          <PlanListTable
            category={category}
            enrollCourse={term2Course as Course[]}
          />
        </Panel>

        <section className="mx-auto flex gap-x-10">
          <ConfirmButton
            textColor="purple"
            bgColor="green"
            text="เสร็จสิ้น"
            onClick={handleOnConfirmClick}
          />
          <ConfirmButton
            textColor="black"
            bgColor="blue"
            text="พิมพ์"
            onClick={handleOnPrintClick}
          />
        </section>
      </div>
    </StudentPage>
  );
};

type ButtonProps = {
  text: string;
  textColor: "purple" | "black";
  bgColor: "green" | "blue";
  onClick: () => void;
};

const ConfirmButton: React.FC<ButtonProps> = ({
  text,
  textColor,
  bgColor,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`h-12 w-32 rounded-lg ${
        textColor === "purple" ? "text-fpurple" : "text-fblack"
      } ${
        bgColor == "green"
          ? "bg-fbrgreen/70 hover:bg-fbrgreen"
          : "bg-fdblue/70 hover:bg-fdblue"
      } text-center text-xl font-extrabold shadow-md print:hidden`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Suggestion;
