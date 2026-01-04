import { useAppStore } from "../stores/useAppStore";
import type { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export default function Drinkcard({ drink }: DrinkCardProps) {
  const { idDrink, strDrink, strDrinkThumb } = drink;
  const selectRecipe = useAppStore((state) => state.selectRecipe);

  return (
    <div className="border shadow-lg ">
      <div className="overflow-hidden">
        <img
          src={strDrinkThumb}
          alt={`Image of drink: ${strDrink}`}
          className="transition-transform hover:scale-125 hover:rotate-2"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{strDrink}</h2>
        <button
          type="button"
          className="p-3 mt-5 w-full font-bold text-lg text-white bg-orange-600 transition-colors hover:bg-orange-600"
          onClick={() => selectRecipe(idDrink)}
        >
          Show recipe
        </button>
      </div>
    </div>
  );
}
