import { Span } from "next/dist/trace";
import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "Heavy rains damage Boro rice crop, raising food supply concerns",
  },
  {
    id: 2,
    title: "New maternal hospital opens in Cox's Bazar Rohingya refugee camp",
  },
  {
    id: 3,
    title:
      "Bangladesh women's cricket captain reprimanded by ICC after on-field incident",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center gap-4 bg-gray-200 p-4 container mx-auto">
      <button className="btn bg-red-400 text-white">Latest News</button>
      <Marquee pauseOnHover>
        {news.map((n) => (
          <span key={n.id}>{n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
