import Navbar from "./main/navbar";
import Image from "next/image";

interface Props {
  type: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Page: React.FC<Props> = ({ type, children }: Props) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="relative h-20">
        <div className="gradient absolute top-0 h-full w-full blur"></div>
        <div className="container relative mx-auto h-full w-full">
          <Image
            src="/fastgrad.svg"
            width={200}
            height={100}
            alt="fast graduation logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </div>

        <header className="relative h-16 bg-white before:absolute before:right-0 before:-bottom-2 before:z-[-1] before:h-5 before:w-full before:max-w-[95%] before:bg-gradient-to-r before:from-fgreen/50 before:to-fpurple">
        <div className="fast-text container mx-auto flex h-full items-center justify-between text-sm md:text-2xl">
          <Navbar type={type} />
        </div>
      </header>

      <main className="container my-5 mx-auto flex-grow">{children}</main>
    </div>
  );
};

export default Page;
