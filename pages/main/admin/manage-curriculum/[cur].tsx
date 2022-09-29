import Panel from "components/main/panel";
import { AdminPage } from "components/page";
import React from "react";
import { CurriculumTable } from ".";

const CurriculumEdit: React.FC = () => {
  function handleOnAdd() {}
  function handleOnSaveClick() {}
  function handleOnCancelClick() {}

  return (
    <AdminPage>
      <Panel>
        <h2 className="fast-head text-4xl">เพิ่มหลักสูตร</h2>
        <CurriculumTable handleOnAdd={handleOnAdd} />
        <section>
          <form className="fast-text text-xl font-extrabold">
            <table className="table-fixed">
              <tbody>
                <tr className="h-12 text-right">
                  <td>
                    <label htmlFor="start_date">เริ่มต้น</label>
                    <input type="date" id="start_date" className="mx-3" />
                    <label htmlFor="start_year">ปีการศึกษา</label>
                    <input
                      type="number"
                      id="start_date"
                      className="mx-3 w-28"
                    />
                  </td>
                </tr>
                <tr className="h-12 text-right">
                  <td>
                    <label htmlFor="end_date">สิ้นสุด</label>
                    <input type="date" id="end_date" className="mx-3" />
                    <label htmlFor="end_year">ปีการศึกษา</label>
                    <input
                      type="number"
                      id="start_date"
                      className="mx-3 w-28"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <ActionButton
            onSaveClick={handleOnSaveClick}
            onCancelClick={handleOnCancelClick}
          />
        </section>
      </Panel>
    </AdminPage>
  );
};

type ActionProps = {
  onSaveClick: () => void;
  onCancelClick: () => void;
};

const ActionButton: React.FC<ActionProps> = ({
  onSaveClick,
  onCancelClick,
}: ActionProps) => {
  return (
    <div className="flex items-center justify-end space-x-6">
      <button
        className="rounded-2xl bg-fbrgreen px-6 py-3 text-2xl font-extrabold text-fpurple shadow-md"
        onClick={onSaveClick}
      >
        บันทึก
      </button>
      <button
        className="rounded-2xl bg-fyellow px-6 py-3 text-2xl font-extrabold text-fred shadow-md"
        onClick={onCancelClick}
      >
        ยกเลิก
      </button>
    </div>
  );
};

export default CurriculumEdit;
