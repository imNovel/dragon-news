import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories,activeId}) => {
    return (
        <div>
            <div className="font-semibold text-2xl">All Categories</div>
        <ul className="flex flex-col gap-3 mt-5">
          {categories.news_category.map((category) => (
            <li key={category.category_id} className={`${activeId === category.category_id && "bg-slate-100"} rounded-md font-bold text-center text-md`}>
                <Link href={`/category/${category.category_id}`} className='p-2 block'>{category.category_name}</Link>
            </li>
          ))}
        </ul>
        </div>
    );
};

export default LeftSideBar;