"use client";
import { cn } from "@/lib/utils/aceternity";
import Link from "next/link";

const BlogCard = ({
  title,
  image,
  estimationTime,
  preview,
  id,
}: {
  title: string;
  image: string;
  estimationTime: string;
  preview: string;
  id: number;
}) => {
  return (
    <Link href={"/blogs/1"}>
      <div className="md:max-w-xs w-full group/card">
        <div
          className={cn(
            " cursor-pointer overflow-hidden relative card h-60 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between "
          )}
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover"} }
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10 p-4">
            <img
              height="100"
              width="100"
              alt="Avatar"
              src="/images/profil.jpg"
              className="h-10 w-10 rounded-full border-2 object-cover"
            />

            <div className="flex flex-col">
              <p className="font-normal text-md text-gray-50 relative z-10">
                Kemal Crisannaufal
              </p>
              <p className="text-sm text-white">{estimationTime} read</p>
            </div>
          </div>

          <div className="text preview py-2 text-white font-medium inline-block backdrop-blur-[3px] rounded-b-md p-4">

            <h1 className="font-bold text-lg md:text-xl text-gray-50 relative z-10">
              {title}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4 line-clamp-2">
              {preview}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
