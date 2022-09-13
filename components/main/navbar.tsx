import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarData {
  value: string;
  href: string;
}

const NavbarLayout: React.FC<NavbarData[]> = (datas: NavbarData[]) => {
  return (
    <>
      <ul className="flex flex-grow gap-x-1 md:gap-x-8">
        {datas.map((data) => {
          return (
            <Link href={data.href} key={data.value}>
              <a>{data.value}</a>
            </Link>
          );
        })}
      </ul>
      <LogoutAndProfile />
    </>
  );
};

const AdminNavbar: React.FC = () => {
  const adminNav: NavbarData[] = [
    { value: "จัดการหลักสูตร", href: "/admin/" },
    { value: "จัดการข้อมูลแผนการศึกษา", href: "/admin/" },
    { value: "จัดการข้อมูลรายวิชาที่เปิดสอน", href: "/admin/" },
  ];
  return NavbarLayout(adminNav);
};

const StudentNavbar: React.FC = () => {
  const studentNav: NavbarData[] = [
    { value: "จัดการข้อมูลการเรียน", href: "/main/student/manage_course" },
    { value: "แนะนำแผนการศึกษา", href: "/main/student/" },
  ];
  return NavbarLayout(studentNav);
};

const LogoutAndProfile: React.FC = () => {
  return (
    <div className="flex items-center gap-x-3">
      <Link href="/main/student/profile" passHref>
        <a className="flex items-center justify-center">
          <Image
            alt="profile"
            src="/profile.svg"
            width={69 / 2}
            height={69 / 2}
          />
        </a>
      </Link>
      <h3>ออกจากระบบ</h3>
    </div>
  );
};

interface NavbarType {
  type: string;
}

export const Navbar: React.FC<NavbarType> = ({ type }: NavbarType) => {
  function Navtype(type: string) {
    if (type === "Student") {
      return <StudentNavbar />;
    } else {
      return <AdminNavbar />;
    }
  }
  return (
    <header className="relative h-16 bg-white">
      <div className="fast-text container mx-auto flex h-full items-center justify-between text-sm md:text-2xl">
        {Navtype(type)}
      </div>
      <div className="container mx-auto h-2 bg-gradient-to-r from-fgreen to-fpurple"></div>
    </header>
  );
};

export default Navbar;
