import Navbar from "./main/navbar";
import Image from "next/image";

interface Props {
  type: "Student" | "Admin";
  children?: React.ReactNode | React.ReactNode[];
}

const Page: React.FC<Props> = ({ type, children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col overflow-y-auto">
      <Header />
      <Navbar type={type} />
      <main className="container my-5 mx-auto flex-grow px-4 md:px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Header: React.FC = () => (
  <header className="relative h-20">
    <div
      className="gradient absolute top-0 h-full w-full blur"
      aria-hidden={true}
    />
    <div className="relative mx-2 h-full drop-shadow-lg md:mx-5">
      <Image
        src="/fastgrad.svg"
        alt="fast graduation logo"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        className="object-contain"
        priority={true}
      />
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="m-2 h-max text-black print:hidden">
    <div className="flex justify-end gap-x-4">
      <Image
        src="/fastgrad.svg"
        alt="fast graduate logo"
        width={471 / 4}
        height={243 / 4}
      />
      <div className="w-2 flex-shrink rounded bg-gradient-to-b from-[rgba(251,162,131,0.53)] to-[rgba(204,171,216,0.85)]"></div>
      <div className="fast-text w-36 break-words text-xs">
        <p>ติดต่อผู้ดูแลระบบ</p>
        <p>1234 ถ.คอนกรีต ต.บ้าน อ.เมือง จ.อิงแลนด์ 56789</p>
        <p>053-xxx-xxx</p>
        <p>reg@cnu.ca.th</p>
      </div>
    </div>
  </footer>
);

interface PageProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const StudentPage: React.FC<PageProps> = ({ children }: PageProps) => (
  <Page type="Student">{children}</Page>
);

export const AdminPage: React.FC<PageProps> = ({ children }: PageProps) => (
  <Page type="Admin">{children}</Page>
);
