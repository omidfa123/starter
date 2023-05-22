export default function Search() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="دنبال چی میگردی ؟"
        className="w-full rounded-2xl px-6 py-4 font-medium shadow-[0px_0px_8px_rgba(0,0,0,0.02)] placeholder:text-text-200 focus:rounded-b-none focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center py-3.5 pl-2">
        <span>search</span>
      </div>
    </div>
  );
}
