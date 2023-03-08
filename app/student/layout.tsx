import Image from "next/image";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-white relative">
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
      <div className="bg-white border-b border-gray-500">
        <nav className="flex h-20 text-black items-center container mx-auto justify-between">
          <div className="space-x-5">
            <Link href="/student/enrollment">จัดการข้อมูลการเรียน</Link>
            <Link href="/student">แนะนำแผนการเรียน</Link>
          </div>
          <div className="space-x-4 flex items-center">
            <UserCircleIcon className="h-12 w-12" />
            <a>ออกจากระบบ</a>
          </div>
        </nav>
      </div>
      {children}
    </>
  );
}
