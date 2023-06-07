const features = [
  { icon: "atra-icon-star", title: "تضمین اصالت کالا", color: "#9773FF" },
  { icon: "atra-icon-coine", title: "قیمت مناسب", color: "#FFC700" },
  { icon: "atra-icon-24", title: "پشتیبانی 24 ساعته", color: "#FF5E5E" },
  { icon: "atra-icon-hands", title: "گارانتی 3 ساله", color: "#FFB370" },
  { icon: "atra-icon-track", title: "حمل و نقل رایگان", color: "#4E95FF" },
  { icon: "atra-icon-product", title: "تنوع در محصولات", color: "#FF98FB" },
];

export default function Features() {
  return (
    <div className="grid-container ">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-0.5">
          <div className="h-[4px] w-2 rounded-full bg-primary shadow-[0px_0px_4px_rgba(255,168,38,0.4)] " />
          <div className="h-[4px] w-[28px] rounded-full bg-primary shadow-[0px_0px_4px_rgba(255,168,38,0.4)] " />
        </div>
        <h6 className="mb-14 text-2xl font-bold ">
          چرا ما رو باید{" "}
          <mark className="bg-transparent text-primary">انتخاب</mark> کنید ؟
        </h6>
        <div className="mb-[86px] flex flex-wrap items-center justify-center gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div
                className="flex h-[74px] w-[74px] items-center justify-center rounded-3xl text-[32px] text-white"
                style={{ backgroundColor: feature.color }}
                title={feature.title}
              >
                <span className={feature.icon}></span>
              </div>
              <p className="font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
