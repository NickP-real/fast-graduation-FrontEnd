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
            <Link href="/student/enrollment">จัดการข้อมูลการเรียน</Link>
            <Link href="/student/suggestion">แนะนำแผนการเรียน</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/student">
              <UserCircleIcon className="h-10 w-10" />
            </Link>
            <a>ออกจากระบบ</a>
          </div>
        </nav>
      </div>
      <main className="container my-2 mx-auto text-black ">{children}</main>
    </>
  );
}
