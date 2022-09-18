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
    <Dialog open={isOpen} onClose={setIsOpen}>
      <Dialog.Panel>
        <h2>ค้นหา กระบวนวิชา</h2>
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
