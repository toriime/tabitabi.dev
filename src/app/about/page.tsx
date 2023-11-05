import Authors from "@/authors.json";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import Link from "next/link";

export default function BlogFrontPage() {
  return (
    <MaxWidthWrapper>
      <div className="max-w-[1300px] flex flex-col gap-2 items-center mb-10 p-8">
        <h1 className="mb-4 text-3xl font-bold">O nas</h1>
        <p>
          TabiTabi Development to grupa hobbistycznych developerów, którzy
          tworzą projekty związane z anime.
        </p>
        <p>
          Obecnie naszym flagowym projektem jest{" "}
          <Link
            className="text-slate-300/80 underline hover:text-slate-300 transition-colors"
            href="https://toriime.pl"
          >
            Toriime
          </Link>
          , o którym możecie dowiedzieć się więcej na{" "}
          <Link
            className="text-slate-300/80 underline hover:text-slate-300 transition-colors"
            href="/#toriime"
          >
            stronie głównej
          </Link>
          .
        </p>
        <br /> Poniżej znajdziesz developerów, którzy pracują nad projektem.
        <div
          className={"mt-3 flex flex-wrap items-center justify-center gap-6"}
        >
          {Authors.map((user, i) => (
            <div
              key={i}
              className={
                "flex flex-col items-center justify-center relative p-4 border-[1px] border-borderLight rounded-lg"
              }
            >
              <Image
                src={user.avatar}
                alt={"user avatar"}
                className={"avatar-border h-20 w-20 rounded-full"}
                width={200}
                height={200}
              />
              {user.username === "sivy" && (
                <Image
                  src="/sivy.jpg"
                  alt={"sivy toys"}
                  className={
                    "avatar-border h-20 w-20 rounded-full absolute top-3 left-10"
                  }
                  width={200}
                  height={200}
                />
              )}
              <h3 className={"mt-1 text-center text-lg font-bold"}>
                {user.username}
              </h3>
              <p className="text-desc text-sm">{user.role}</p>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
