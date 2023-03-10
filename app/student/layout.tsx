import Navbar from "@/components/navbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar type="Student" />
      <main className="container my-2 mx-auto text-black ">{children}</main>
    </>
  );
}
