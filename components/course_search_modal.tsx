import SearchBar from "components/search_bar";
import SubmitButton from "components/submit_button";
import Table from "components/table";
import React, { Dispatch } from "react";
import { Dialog } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const CourseSearchModal: React.FC<Props> = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="container fixed inset-0 mx-auto my-auto h-max rounded-lg bg-gradient-to-b from-fred to-fpurple shadow-md"
    >
      <Dialog.Panel className="m-2 rounded bg-white px-10 py-2">
        <Dialog.Title>
          <h2>ค้นหา กระบวนวิชา</h2>
        </Dialog.Title>
        <SearchBar />

        <Table
          Header={
            <tr className="text-fred">
              <td>เลือก</td>
              <td>รหัสวิชา</td>
              <td>ชื่อวิชา</td>
            </tr>
          }
          Content={
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>xxxxxxx</td>
              <td>xxxxxxx</td>
            </tr>
          }
        />

        <SubmitButton />
      </Dialog.Panel>
    </Dialog>
  );
};

export default CourseSearchModal;
