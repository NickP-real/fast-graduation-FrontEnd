import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarData {
  value: string;
  href: string;
}

interface LayoutProps {
  datas: NavbarData[];
  type: "Student" | "Admin";
}

const NavbarLayout: React.FC<LayoutProps> = ({ datas, type }: LayoutProps) => {
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
      <LogoutAndProfile type={type} />
    </>
  );
};

const AdminNavbar: React.FC = () => {
  const adminNav: NavbarData[] = [
    { value: "จัดการหลักสูตร", href: "/main/admin/manage-curriculum" },
    {
      value: "จัดการข้อมูลรายวิชาที่เปิดสอน",
      href: "/main/admin/manage-course",
    },
  ];
  return <NavbarLayout datas={adminNav} type="Admin" />;
};

const StudentNavbar: React.FC = () => {
  const studentNav: NavbarData[] = [
    { value: "จัดการข้อมูลการเรียน", href: "/main/student/manage-course" },
    { value: "แนะนำแผนการศึกษา", href: "/main/student/suggestion" },
  ];
  return <NavbarLayout datas={studentNav} type="Student" />;
};

interface LogoutAndProfileProps {
  type: "Student" | "Admin";
}

const LogoutAndProfile: React.FC<LogoutAndProfileProps> = ({
  type,
}: LogoutAndProfileProps) => {
  const href: string =
    type === "Student" ? "/main/student/profile" : "/main/admin/profile";
  return (
    <div className="flex items-center gap-x-3">
      <Link href={href} passHref>
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
  type: "Student" | "Admin";
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
      <div className="fast-text container mx-auto flex h-full items-center justify-between text-sm md:text-xl">
        {Navtype(type)}
      </div>
      <div className="container mx-auto h-2 bg-gradient-to-r from-fgreen to-fpurple"></div>
    </header>
  );
};

export default Navbar;
