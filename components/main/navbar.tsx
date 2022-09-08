import React from "react";
import Image from "next/image";

const AdminNavbar: React.FC = () => {
  return (
    <>
      <ul className="flex flex-grow gap-x-1 md:gap-x-8">
        <li>จัดการหลักสูตร</li>
        <li>จัดการข้อมูลแผนการศึกษา</li>
        <li>จัดการข้อมูลรายวิชาที่เปิดสอน</li>
      </ul>
      <LogoutAndProfile />
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
      <LogoutAndProfile />
    </>
  );
};

const LogoutAndProfile: React.FC = () => {
  return (
    <div className="flex gap-x-3">
      <Image alt="profile" src="/profile.svg" width={69 / 2} height={69 / 2} />
      <h3>ออกจากระบบ</h3>
    </div>
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
