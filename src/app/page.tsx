import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col items-center mt-10">
        <div className="header-badge mx-auto mb-4 flex max-w-fit items-center space-x-2 overflow-hidden rounded-full px-4 py-1">
          <p className="header-text">TabiTabi Development</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-6xl mb-3 text-center text-slate-200">
          Poczuj moc{" "}
          <span className="magic-text-animate whitespace-nowrap">idiotów</span>
        </h1>
        <p className="text-slate-300 text-center text-lg md:text-xl font-semibold">
          Coś o nas i historie z tworzenia strony.
        </p>

        {/* <form className="flex gap-3 items-center">
          <input
            type="text"
            className="rounded-lg bg-transparent border text-white p-2.5"
            placeholder="email"
          />
          <button
            type="submit"
            className="rounded-lg relative text-white text-sm p-3 gradient "
          >
            Newsletter
          </button>
        </form> */}
      </div>
    </MaxWidthWrapper>
  );
}
