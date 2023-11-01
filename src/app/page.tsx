import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-border bg-background px-4 py-1 shadow-md backdrop-blur transition-all duration-500 hover:bg-border ">
          <p className="text-sm font-semibold magic-text">
            TabiTabi Development
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-6xl mb-10">
          Poczuj moc{" "}
          <span className="magic-text-animate whitespace-nowrap">
            idiotów
          </span>
        </h1>

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
