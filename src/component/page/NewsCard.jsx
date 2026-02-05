import React from "react";

const NewsCard = ({ news }) => {
  const {title,details,thumbnail_url,total_view,author,rating,} = news;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden m-6">
      
      {/* Image */}
      <div className="relative">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />

        {/* Badges */}
        {/* <div className="absolute top-3 left-3 flex gap-2">
          {others?.is_today_pick && (
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              🔥 Today’s Pick
            </span>
          )}
          {others?.is_trending && (
            <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
              ⭐ Trending
            </span>
          )}
        </div> */}
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold leading-snug hover:text-secondary cursor-pointer">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mt-3">
          {details.slice(0, 180)}...
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-5">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="text-sm font-semibold">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-5 text-sm">
          <span className="flex items-center gap-1">
            👁 {total_view}
          </span>

                  <span className="flex items-center gap-1">
                      {[...Array(rating?.number || 0)].map((_, index) => (
                          <span key={index}>⭐</span>
                      ))}
                  </span>

        </div>
      </div>
    </div>
  );
};

export default NewsCard;
