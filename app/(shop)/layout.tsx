import Footer from "../components/footer";
import Header from "../components/header-pc";

export default function ShopLayout(p) {
  console.log(p);

  return (
    <main className="flex min-h-screen flex-col bg-body-gradient">
      <Header />
      <main className="flex-1">{p.children}</main>
      <Footer />
    </main>
  );
}
