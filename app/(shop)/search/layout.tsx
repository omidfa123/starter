import SearchAside from "../../components/search-aside";
import SortBy from "../../components/sort-by";
import Breadcrumbs from "../../components/ui/breadcrumbs";

export default function SidBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid-container">
      <Breadcrumbs />
      <SortBy />
      <div className="flex gap-[76px]">
        <SearchAside />
        {children}
      </div>
    </div>
  );
}
