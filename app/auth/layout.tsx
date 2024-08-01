export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {children}
    </div>
  );
}
