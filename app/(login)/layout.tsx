export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className=" min-h-screen  flex-col flex">{children}</main>
    </>
  );
}
