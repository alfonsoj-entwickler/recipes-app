import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import Drinkcard from "../components/Drinkcard";
export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);
  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Home</h1>
      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 ">
          {drinks.drinks.map((drink) => (
            <Drinkcard key={`drinl-item-${drink.idDrink}`} drink={drink} />
          ))}
        </div>
      ) : (
        <>
          <p className="py-10 text-center text-2xl">There arent drinks</p>
        </>
      )}
    </>
  );
}
