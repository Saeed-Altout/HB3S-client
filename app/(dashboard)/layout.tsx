import { Navbar } from "./_components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      Footer
    </div>
  );
}
