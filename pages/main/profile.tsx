import Image from "next/image";
import React from "react";

export const Profile: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-20 gradient">
        <Image
          src="/fastgrad.svg"
          width={200}
          height={100}
          alt="fast graduation logo"
        />
      </div>

      <header className="h-16 bg-white border">
        <div className="container flex justify-between items-center mx-auto h-full text-2xl fast-text">
          <ul className="flex flex-grow gap-x-8">
            <li>จัดการหลักสูตร</li>
            <li>จัดการข้อมูลแผนการศึกษา</li>
            <li>จัดการข้อมูลรายวิชาที่เปิดสอน</li>
          </ul>
          <h3>ออกจากระบบ</h3>
        </div>
      </header>

      <main className="container flex flex-grow gap-x-5 my-5 mx-auto w-full h-32">
        <section className="w-[40%] rounded-[10px] px-8 py-5 bg-white shadow-[25px_40px_40px_-15px_rgba(204,171,216,0.45)]">
          <h3 className="text-2xl bg-white fast-text">ข้อมูลส่วนตัว</h3>
        </section>
        <section className="w-[60%] rounded-[10px] shadow-[25px_40px_40px_-15px_rgba(250,137,123,0.35)]"></section>
      </main>
    </div>
  );
};

export default Profile;
