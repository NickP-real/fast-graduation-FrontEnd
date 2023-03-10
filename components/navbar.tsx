import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const studentNavItem = {
  "/student/enrollment": {
    name: "จัดการข้อมูลการเรียน",
  },
  "/student/suggestion": {
    name: "แนะนำแผนการเรียน",
  },
};

const adminNavItem = {
  "/admin/course": {
    name: "จัดการข้อมูลการเรียน",
  },
  "/admin/program": {
    name: "แนะนำแผนการเรียน",
  },
};

export default function Navbar({ type }: { type: "Student" | "Admin" }) {
  const navItem = type === "Student" ? studentNavItem : adminNavItem;
  const root = type === "Student" ? "/student" : "/admin";

  return (
    <>
      <div className="relative bg-white">
        <div className="gradient h-20 p-4"></div>
        <div className="container mx-auto">
          <Image
            src="/fastgrad.svg"
            alt="Fast Graduation Logo"
            className="absolute top-1/2 -translate-y-1/2"
            width={117}
            height={58}
            priority
          />
        </div>
      </div>
      <div className="border-b border-gray-500 bg-white">
        <nav className="container mx-auto flex h-16 items-center justify-between text-sm text-black">
          <div className="space-x-5">
            {Object.entries(navItem).map(([path, { name }]) => (
              <Link href={path} key={path}>
                {name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link href={root}>
              <UserCircleIcon className="h-10 w-10" />
            </Link>
            <a>ออกจากระบบ</a>
          </div>
        </nav>
      </div>
    </>
  );
}
