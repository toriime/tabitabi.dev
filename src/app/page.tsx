import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Brush } from "lucide-react";
export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center">
        <div className="header-badge mx-auto mb-4 flex max-w-fit items-center space-x-2 overflow-hidden rounded-full px-4 py-1">
          <p className="header-text">TabiTabi Development</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-6xl mb-10">
          Poczuj moc{" "}
          <span className="magic-text-animate whitespace-nowrap">
            idiotów
          </span>
        </h1>
        <p className="text-slate-300 text-center text-lg md:text-xl font-semibold">
          Coś o nas i historie z tworzenia strony.
        </p>

          <form className="flex gap-3 items-center m-3">
            <input
              type="text"
              //disable white border on focus
              className="rounded-xl font-semibold w-[70%] bg-transparent light-border text-white p-[10px_15px] focus:outline-none focus:border-borderLight"
              placeholder="Adres email"
            />
            <button
              type="submit"
              className="rounded-lg relative text-white text-sm p-3 button-gradient w-[7rem] font-bold"
            >
              Newsletter
            </button>
          </form>

          <div className="w-full p-[50px_82px_0px]">
            <div className="relative z-10 flex flex-col">
              <h1 className="text-4xl font-semibold w-full md:text-5xl mb-3 text-slate-200 text-center sm:text-start">
                Oglądaj, dodawaj i oceniaj anime na
                <span className="magic-text-animate whitespace-nowrap">
                  {" "}
                  Toriime.pl
                </span>
              </h1>
            </div>

            <div className="gap-5 flex flex-wrap mt-10 justify-center">
              <div className="w-[22rem] isolate relative rounded-xl p-5 border-[1px] border-borderLight">
                <div className="flex flex-col items-center">
                  <Brush className="text-title" />
                  <h3 className="font-bold text-1xl text-center text-title">
                    Piękny wygląd
                  </h3>
                  <p className="font-medium text-md text-center text-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quibusdam.
                  </p>
                  {/* miejsce na zdjęcie */}
                </div>
              </div>
              <div className="w-[22rem] isolate relative rounded-xl p-5 border-[1px] border-borderLight h-fulls">
                <div className="flex flex-col items-center">
                  <Brush className="text-title" />
                  <h3 className="font-bold text-1xl text-center text-title">
                    Piękny wygląd
                  </h3>
                  <p className="font-medium text-md text-center text-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quibusdam.
                  </p>
                  {/* miejsce na zdjęcie */}
                </div>
              </div>
              <div className="w-[22rem] isolate relative rounded-xl p-5 border-[1px] border-borderLight h-fulls">
                <div className="flex flex-col items-center">
                  <Brush className="text-title" />
                  <h3 className="font-bold text-1xl text-center text-title">
                    Piękny wygląd
                  </h3>
                  <p className="font-medium text-md text-center text-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum, quibusdam.
                  </p>
                  {/* miejsce na zdjęcie */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </MaxWidthWrapper>
  );
}
