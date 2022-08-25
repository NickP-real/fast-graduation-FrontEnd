import React from "react";

const AdminNavbar: React.FC = () => {
  return (
    <>
      <ul className="flex flex-grow gap-x-8">
        <li>จัดการหลักสูตร</li>
        <li>จัดการข้อมูลแผนการศึกษา</li>
        <li>จัดการข้อมูลรายวิชาที่เปิดสอน</li>
      </ul>
      <h3>ออกจากระบบ</h3>
    </>
  );
};

const StudentNavbar: React.FC = () => {
  return (
    <>
      <ul className="flex flex-grow gap-x-8">
        <li>จัดการข้อมูลการเรียน</li>
        <li>แนะนำแผนการศึกษา</li>
      </ul>
      <h3>ออกจากระบบ</h3>
    </>
  );
};

interface NavbarType {
  type: string;
}

// Singleton
export const Navbar: React.FC<NavbarType> = ({ type }: NavbarType) => {
  function Navtype(type: string) {
    if (type === "Student") {
      return <StudentNavbar />;
    } else {
      return <AdminNavbar />;
    }
  }
  return <>{Navtype(type)}</>;
};

export default Navbar;
