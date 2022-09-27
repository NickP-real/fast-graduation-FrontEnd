import Navbar from "./main/navbar";
import Image from "next/image";

interface Props {
  type: "Student" | "Admin";
  children?: React.ReactNode | React.ReactNode[];
}

const Page: React.FC<Props> = ({ type, children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col overflow-y-auto">
      <div className="relative h-20">
        <div className="gradient absolute top-0 h-full w-full blur"></div>
        <div className="container relative mx-auto h-full w-full drop-shadow-lg">
          <Image
            src="/fastgrad.svg"
            alt="fast graduation logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className="object-contain"
          />
        </div>
      </div>

      <Navbar type={type} />

      <main className="container my-5 mx-auto flex-grow px-2 md:px-10">
        {children}
      </main>
    </div>
  );
};

interface PageProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const StudentPage: React.FC<PageProps> = ({ children }: PageProps) => {
  return <Page type="Student">{children}</Page>;
};

export const AdminPage: React.FC<PageProps> = ({ children }: PageProps) => {
  return <Page type="Admin">{children}</Page>;
};

export default Page;
