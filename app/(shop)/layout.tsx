import Footer from "../components/footer";
import Header from "../components/header-pc";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-body-gradient">
      {/* @ts-expect-error Async Server Component */}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </main>
  );
}
