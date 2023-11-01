import Authors from "@/authors.json";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";

export default function BlogFrontPage() {
  return (
    <MaxWidthWrapper>
      <div className="max-w-[1300px] flex flex-col gap-2 items-center mb-10 p-8">
        <h1 className="mb-4 text-3xl font-bold">O nas</h1>
        TabiTabi Development to grupa developerów, którzy tworzą projekty
        związane z anime. <br /> Poniżej znajdziesz developerów, którzy pracują
        nad projektem.
        <div
          className={"mt-3 flex flex-wrap items-center justify-center gap-6"}
        >
          {Authors.map((user, i) => (
            <div
              key={i}
              className={"flex flex-col items-center justify-center relative"}
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
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
