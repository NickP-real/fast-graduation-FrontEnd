import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ConfirmModal from "components/modal/confirm";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  redirectToAuth,
  signOut,
} from "supertokens-auth-react/recipe/emailpassword";

interface NavbarData {
  value: string;
  href: string;
}

type Showing = {
  isShow: boolean;
};

type LayoutProps = NavbarType &
  Showing & {
    datas: NavbarData[];
  };

const NavbarLayout: React.FC<LayoutProps> = ({
  datas,
  type,
  isShow,
}: LayoutProps) => {
  const [confirm, setConfirm] = useState(false);

  function logoutClicked() {
    setConfirm(true);
  }

  async function onLogoutConfirm() {
    await signOut();
    redirectToAuth();
  }

  return (
    <>
      <ConfirmModal
        open={confirm}
        setOpen={setConfirm}
        onConfirm={onLogoutConfirm}
      />
      <nav
        className={`my-auto w-max transition-all duration-300 ease-in md:z-auto md:flex md:w-full md:items-center md:justify-between md:opacity-100 ${
          isShow ? "h-24 opacity-100" : "h-0 opacity-0"
        } md:h-max `}
      >
        <ul className="fast-text flex flex-col md:flex-row md:gap-x-8">
          {datas.map((data) => {
            return (
              <Link href={data.href} key={data.value}>
                <a className="my-1 md:my-0">{data.value}</a>
              </Link>
            );
          })}
          <a
            className="my-1 hover:cursor-pointer md:my-0 md:hidden"
            onClick={logoutClicked}
          >
            ออกจากระบบ
          </a>
        </ul>

        <div className="hidden space-x-2 md:flex md:h-max md:items-center md:opacity-100">
          <ProfileButton type={type} />
          <a className="fast-text hover:cursor-pointer" onClick={logoutClicked}>
            ออกจากระบบ
          </a>
        </div>
      </nav>
    </>
  );
};

const ProfileButton: React.FC<NavbarType> = ({ type }: NavbarType) => {
  const href: string =
    type === "Student" ? "/main/student/profile" : "/main/admin/profile";
  return (
    <Link href={href} passHref>
      <a className="flex">
        <Image
          alt="profile"
          src="/profile.svg"
          width={64 / 2}
          height={64 / 2}
        />
      </a>
    </Link>
  );
};

type MobileIcon = NavbarType &
  Showing & {
    onClick: () => void;
  };

const MobileIcon: React.FC<MobileIcon> = ({
  type,
  isShow,
  onClick,
}: MobileIcon) => {
  return (
    <div className="flex items-center justify-end space-x-2 md:hidden">
      <ProfileButton type={type} />
      {!isShow ? (
        <Bars3Icon
          className="fast-bg h-8 w-8 rounded-full p-1 text-white"
          onClick={onClick}
        />
      ) : (
        <XMarkIcon
          className="fast-bg h-8 w-8 rounded-full p-1 text-white"
          onClick={onClick}
        />
      )}
    </div>
  );
};

type NavbarType = {
  type: "Student" | "Admin";
};

export const Navbar: React.FC<NavbarType> = ({ type }: NavbarType) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  function handleOnMobileIconClick() {
    setIsShow(!isShow);
  }

  const adminNav: NavbarData[] = [
    { value: "จัดการหลักสูตร", href: "/main/admin/program/browse" },
    {
      value: "จัดการข้อมูลรายวิชาที่เปิดสอน",
      href: "/main/admin/course/browse",
    },
  ];

  const studentNav: NavbarData[] = [
    { value: "จัดการข้อมูลการเรียน", href: "/main/student/enrollment" },
    { value: "แนะนำแผนการศึกษา", href: "/main/student/suggestion" },
  ];

  function Navtype(type: string) {
    if (type === "Student") {
      return <NavbarLayout datas={studentNav} type="Student" isShow={isShow} />;
    } else {
      return <NavbarLayout datas={adminNav} type="Admin" isShow={isShow} />;
    }
  }

  return (
    <header className="bg-white print:hidden">
      <div className=" container mx-auto px-4 py-4 text-base md:flex">
        <MobileIcon
          type={type}
          onClick={handleOnMobileIconClick}
          isShow={isShow}
        />
        {Navtype(type)}
      </div>
      <div className="container mx-auto h-2 bg-gradient-to-r from-fgreen to-fpurple"></div>
    </header>
  );
};

export default Navbar;
