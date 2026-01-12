import { useMemo } from "react";
import Drinkcard from "../components/Drinkcard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  const isFavorites = useMemo(() => favorites.length > 0, [favorites]);
  return (
    <>
      <h1 className="text-6xl font-extrabold">Favorites</h1>
      {isFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 ">
          {favorites.map((recipe) => (
            <Drinkcard key={`favorite-item-${recipe.idDrink}`} drink={recipe} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-lg font-normal">Empty</p>
      )}
    </>
  );
}
