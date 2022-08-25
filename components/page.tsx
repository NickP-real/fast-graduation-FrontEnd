import Navbar from "./main/navbar";
import Image from "next/image";

interface Props {
  type: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Page: React.FC<Props> = ({ type, children }: Props) => {
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

      <header className="relative h-16 bg-white before:h-5 before:bg-gradient-to-r before:from-[#86E3CE]/50 before:to-[#CCABD8] before:w-full before:z-[-1] before:right-0 before:max-w-[95%] before:-bottom-2 before:absolute">
        <div className="container flex justify-between items-center mx-auto h-full text-2xl fast-text">
          <Navbar type={type} />
        </div>
      </header>

      {children}
    </div>
  );
};

export default Page;
