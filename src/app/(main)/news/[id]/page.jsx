import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export const generateMetadata = async({params}) =>{
    const {id} = await params;

    const news = await getNewsDetailsById(id);
    return{
        title: news.title,
        description: news.details
    }
}


const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log("news params", id);
  const news = await getNewsDetailsById(id);
  console.log("neewssbyID", news);
  return (
    <div className="max-w-5xl mx-auto">
      <div className="card shadow-sm">
        <div className="card-body">
          {/* Author Info */}
          <div className="flex justify-between items-center bg-slate-200 p-4">
            <div className="flex gap-1 items-center">
              <Image
                src={news.author?.img}
                alt={news.author?.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs">{news.author?.published_date}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <CiBookmark />
              <CiShare2 />
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>

          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={300}
              className="w-full"
            />
          </figure>
          <p className="">{news.details}</p>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h2 className="flex items-center gap-2">
                <IoIosStar className="text-lg text-yellow-500" />
                {news.rating.number}
              </h2>
              <h2 className="flex items-center gap-2">
                <FaEye className="text-lg" />
                {news.total_view}
              </h2>
            </div>
            <Link href={`/category/${news.category_id}`}>
              <button className="btn bg-red-400">All news in this category <BsArrowRight/></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
