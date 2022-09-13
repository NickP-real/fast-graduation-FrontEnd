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

      <Navbar type={type} />

      <main className="container my-5 mx-auto flex-grow">{children}</main>
    </div>
  );
};

export default Page;
