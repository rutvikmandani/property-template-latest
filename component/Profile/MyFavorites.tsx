"use client";

import FavoriteProperty from "./FavoriteProperty";

export default function MyFavorites() {
  return (
    <div>
      <div className="flex flex-col text-primary mb-4">
        <h1 className="text-secondary-pinkLight font-bold text-[30px] md:text-[40px]">
          My Favorites
        </h1>
        <p className="text-[18px]"> We are glad to see you again!</p>
      </div>
      <FavoriteProperty />
    </div>
  );
}
