import { Button } from "components/button/button";
import Panel from "components/main/panel";
import { StudentPage } from "components/page";
import Table, { TableContent } from "components/table";
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
    const data = await Api.missing_credit();
    const { categories } = await Api.courseBrowseFromPlan();
    return {
      props: { data, categories },
    };
  });
};

export default function MissingCredit(
  props: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>>
) {
  const router = useRouter();

  const contents: TableContent[] = [];
  const numberInfoHeaders: string[] = ["หมวดหมู่", "หน่วยกิจรวม"];
  const allCredits: { [key: number]: number } = props.data.data[2];
  for (const key in allCredits) {
    const nums = props.categories[key]?.name_en ?? 400;
    contents.push({
      texts: [nums, allCredits[key].toString()],
    });
  }

  function handleOnBackClick() {
    router.back();
  }
  return (
    <StudentPage>
      <h1>ตรวจสอบหน่วยกิจ</h1>
      <Panel>
        <div className="my-2 text-xl">
          <p>หลักสูตร: {props.data.data[0][1]}</p>
          <p>ตัวโท: {props.data.data[0][0]}</p>
        </div>
        <Table Header={numberInfoHeaders} Content={contents} />
        <h2 className="mt-4 mb-2">หมายเหตุ</h2>
        <div className="pl-4">
          {props.data.data[1].length !== 0 ? (
            props.data.data[1].map((text) => <p>- {text}</p>)
          ) : (
            <p>ไม่มี</p>
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <Button
            className="bg-fbryellow/70 px-6 py-3 text-xl text-fred hover:bg-fbryellow"
            onClick={handleOnBackClick}
            label="ย้อนกลับ"
          />
        </div>
      </Panel>
    </StudentPage>
  );
}
