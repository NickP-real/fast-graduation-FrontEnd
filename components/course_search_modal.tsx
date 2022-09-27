import SearchBar from "components/search_bar";
import SubmitButton from "components/submit_button";
import Table from "components/table";
import React, { Dispatch } from "react";
import Modal from "./modal";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const CourseSearchModal: React.FC<Props> = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal title="ค้นหากระบวนวิชา" open={isOpen} onClose={setIsOpen}>
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
    </Modal>
  );
};

export default CourseSearchModal;
