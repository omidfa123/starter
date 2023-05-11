export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-body-gradient">
      <header>هدر</header>
      <main className="flex-1">{children}</main>
      <footer>فوتر</footer>
    </main>
  );
}
