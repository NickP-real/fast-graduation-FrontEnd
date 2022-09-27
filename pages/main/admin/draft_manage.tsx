import DelTable from "components/admin/table/del_table";
import SubmitButton from "components/submit_button";
import React from "react";

const DraftManage: React.FC = () => {
  function handleOnAddClick() {
    return;
  }

  return (
    <div>
      <h2>จัดการรายวิชา</h2>

      <form className="flex flex-col justify-between">
        <table className="w-max border-separate border-spacing-x-3 border-spacing-y-2">
          <tbody>
            <tr>
              <td>รหัสวิชา</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>ชื่อวิชา (ภาษาไทย)</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>ชื่อวิชา (English)</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <section>
          <div>
            <h3>คำอธิบาย (ภาษาไทย)</h3>
            <textarea />
          </div>
          <div>
            <h3>คำอธิบาย (English)</h3>
            <textarea />
          </div>
        </section>

        <table className="w-max table-auto">
          <tbody>
            <tr>
              <td>หน่วยกิจ</td>
              <td>
                <input type="text" className="ml-2 w-16" />
              </td>
            </tr>
          </tbody>
        </table>

        <section>
          <h3>ภาคเรียนที่เปิด</h3>
          <table className="border-separate border-spacing-x-2">
            <tbody>
              {/* TODO: iterate over instead */}
              <tr>
                <td>
                  ปิด <input /> เปิด
                </td>
                <td>ภาคเรียนที่ 1</td>
              </tr>
              <tr>
                <td>
                  ปิด <input /> เปิด
                </td>
                <td>ภาคเรียนที่ 1</td>
              </tr>
              <tr>
                <td>
                  ปิด <input /> เปิด
                </td>
                <td>ภาคเรียนที่ 1</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>เงื่อนไข</h3>
          <table>
            <tbody>
              <tr>
                {/* TODO: might be iterate I guess */}
                <td>
                  <input type="checkbox" />
                  นักศึกษาชัินปีที่ <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="checkbox" />
                  consent off department
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <h3>วิชาที่พ่าน</h3>
        <div>
          <h3>1 กลุ่มในต่อไปนี้</h3>
          <DelTable onAddClick={handleOnAddClick} />
        </div>

        <button className="mx-auto block w-max rounded-lg bg-fyellow p-2 text-lg font-extrabold text-fpurple">
          เพิ่มกลุ่มรายวิชา
        </button>
      </form>

      <SubmitButton />
    </div>
  );
};

export default DraftManage;
