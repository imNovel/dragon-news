import LeftSideBar from '@/components/homepage/LeftSideBar';
import NewsCard from '@/components/homepage/NewsCard';
import RightSideBar from '@/components/homepage/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    console.log("param", id)
     const categories = await getCategories();
  console.log(categories.news_category);

  const news = await getNewsByCategoryId(id);
  console.log("news", news);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className="col-span-6">
        <h2 className='font-semibold text-2xl'>Dragon News Home</h2>
        <div className="space-y-2">
        {
          news.length >0 ? news.map(n => ( <NewsCard key={n._id} news={n}></NewsCard>)) : <h2 className='font-bold text-2xl text-center'>No News Found</h2>
        }
        </div>
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;