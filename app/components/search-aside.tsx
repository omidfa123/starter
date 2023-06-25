import Accordion from "./ui/accordion";
import LinkWithQuery from "./ui/link-with-query";
import Switch from "./ui/switch";

export default function SearchAside() {
  return (
    <aside className="h-max w-60 rounded-3xl border-[1.5px] border-solid border-[#EEE] bg-white  shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]">
      <div className="mx-auto mb-4 w-max rounded-b-3xl bg-secondary px-10 py-1 text-sm font-medium text-white">
        فیلتر ها
      </div>
      <Accordion />
      <Switch text="کالای تخفیف دار" />
      <Switch text="فقط کالاهای موجود" />
    </aside>
  );
}
