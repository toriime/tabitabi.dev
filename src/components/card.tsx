import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  disabled?: boolean;
  title: string;
  authors: {
    username: string;
    avatar: string;
  }[];
  image: string;
  link: string;
  date: Date;
  tags: string[];
}

interface AuthorsProps {
  authors: {
    username: string;
    avatar: string;
  }[];
}

const Card = ({ disabled, title, image, link, tags, date, authors }: CardProps) => {
  return (
    <Link href={link}>
      <div className="flex flex-col gap-3 items-start rounded-lg border-slate-600/80 hover:bg-slate-300/5 transition-colors duration-200 border shadow-sm w-full overflow-hidden">
        <div className="w-full">
          <button disabled={disabled}>
            <Image src={image} alt="post image" width={1920} height={1080} />
          </button>
        </div>
        <div className="flex flex-col p-3 gap-2 w-full">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-slate-300/60 text-sm rounded-full bg-slate-300/5 py-1 px-2 border-slate-600/80 border"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="w-full text-start mt-1">{title}</h1>
          <span className="flex justify-between mt-3">
            <CardAuthors authors={authors} />
            <span className="text-slate-300/60">
              {date.toLocaleDateString()}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

const CardAuthors = ({ authors }: AuthorsProps) => (
  <div className="w-28 h-7 flex items-center flex-shrink-0 relative">
    {authors.map((member, index) => (
      <Image
        key={member.username}
        src={member.avatar}
        className="rounded-full w-7 h-7 absolute"
        style={{ left: `${index * 1.1}rem`, zIndex: authors.length + index }}
        alt="author avatar"
        width={30}
        height={30}
      />
    ))}
  </div>
);

export default Card;
