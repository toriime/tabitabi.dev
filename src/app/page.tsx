import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Brush, CogIcon, HeartIcon, LanguagesIcon } from "lucide-react";
export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-[calc(100vh-80px)] justify-center items-center flex">
        <div className="flex flex-col items-center">
          <div className="header-badge mx-auto mb-4 flex max-w-fit items-center space-x-2 overflow-hidden rounded-full px-4 py-1">
            <p className="header-text">TabiTabi Development</p>
          </div>
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-6xl mb-3 text-center text-title">
            Poczuj moc{" "}
            <span className="magic-text-animate whitespace-nowrap">
              idiotów
            </span>
          </h1>
          <p className="text-slate-300 text-center text-lg md:text-xl font-semibold">
            Poznaj nas oraz nasz projekt.
          </p>

          <form className="flex gap-3 items-center m-3">
            <input
              type="text"
              //disable white border on focus
              className="rounded-xl font-semibold w-[70%] bg-transparent light-border text-white p-[10px_15px] focus:outline-none focus:border-borderLight disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Tymczasowo niedostępne"
              disabled={true}
            />
            <button
              type="submit"
              className="rounded-lg relative text-white text-sm p-3 button-gradient w-[7rem] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={true}
            >
              Newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="relative w-full p-[100px_52px_0px] ">
        {/* nagłówek */}
        <div className="relative z-10 flex flex-col w-full">
          <h1 className="w-full md:text-5xl mb-3 text-slate-200 text-center">
            <span className="text-6xl font-semibold magic-text-animate bottom-border-gradient py-1 whitespace-nowrap">
              Toriime
            </span>
            <p className="text-lg pt-4">Nasz główny projekt</p>
          </h1>
        </div>
        {/* informacje o projekcie */}
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 mt-10">
          <div className="w-full isolate relative rounded-xl p-5 border-[1px] border-borderLight h-fulls">
            <div className="flex flex-col items-center">
              <span className="border border-borderLight rounded-full p-2 flex items-center justify-center mb-2 backdrop-blur bg-slate-600/10">
                <Brush className="text-title" />
              </span>
              <h3 className="font-bold text-1xl text-center text-title">
                Unikatowy wygląd
              </h3>
              <p className="font-medium text-md text-center text-desc">
                Toriime wyróżnia się na tle innych stron o anime, w
                szczególności swoim wyglądem, który został dokładnie przemyślany
                przez Myst i zrealizowany przez nas.
              </p>
              {/* miejsce na zdjęcie */}
            </div>
          </div>
          <div className="w-full isolate relative rounded-xl p-5 border-[1px] border-borderLight h-fulls">
            <div className="flex flex-col items-center">
              <span className="border border-borderLight rounded-full p-2 flex items-center justify-center mb-2 backdrop-blur bg-slate-600/10">
                <CogIcon className="text-title" />
              </span>
              <h3 className="font-bold text-1xl text-center text-title">
                Funkcjonalność
              </h3>
              <p className="font-medium text-md text-center text-desc">
                Toriime poza oglądaniem odcinków anime, w domyśle będzie
                posiadał również wiele innych funkcji, takich jak np. listy
                anime, profile, własny system komentarzy, czy wiele więcej.
                Bądzcie na biężąco, aby dowiedzieć się o następnych funkcjach!
              </p>
              {/* miejsce na zdjęcie */}
            </div>
          </div>
          <div className="w-full isolate relative rounded-xl p-5 border-[1px] border-borderLight h-fulls">
            <div className="flex flex-col items-center">
              <span className="border border-borderLight rounded-full p-2 flex items-center justify-center mb-2 backdrop-blur bg-slate-600/10">
                <LanguagesIcon className="text-title" />
              </span>
              <h3 className="font-bold text-1xl text-center text-title">
                Miejsce dla fansubberów
              </h3>
              <p className="font-medium text-md text-center text-desc">
                Toriime ma być miejscem do dzielenia się swoimi fansubami,
                zarówno przez grupy tłumaczy, jak i pojedyńczych tłumaczy. Z tym
                związane są różnorakie funkcje, które będą dla nich dostępne.
              </p>
              {/* miejsce na zdjęcie */}
            </div>
          </div>
          <div className="w-full isolate relative rounded-xl p-5 border-[1px] border-borderLight h-fulls">
            <div className="flex flex-col items-center">
              <span className="border border-borderLight rounded-full p-2 flex items-center justify-center mb-2 backdrop-blur bg-slate-600/10">
                <HeartIcon className="text-title" />
              </span>
              <h3 className="font-bold text-1xl text-center text-title">
                Otwartość
              </h3>
              <p className="font-medium text-md text-center text-desc">
                Chcemy stworzyć miejsce, w którym każdy znajdzie swoje miejsce,
                nie ważne czy jesteś koneserem anime, weeb-psychopatą, grupa
                fansubberską, czy po prostu fanem anime. Chcemy, abyś znalazł tu
                coś dla siebie.
              </p>
              {/* miejsce na zdjęcie */}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
