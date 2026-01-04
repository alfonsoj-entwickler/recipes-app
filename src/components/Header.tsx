import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import type { SearchFilter } from "../types";

const initialState: SearchFilter = {
  ingredient: "",
  category: "",
};

export default function Header() {
  const { pathname } = useLocation();

  const [searchFilters, setSearchFilters] =
    useState<SearchFilter>(initialState);

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: validate form
    if (Object.values(searchFilters).includes("")) {
      showNotification({
        text: "All fields are mandatory",
        error: true,
      });
      return;
    }
    searchRecipes(searchFilters);
    setSearchFilters(initialState);
  };

  return (
    <header
      className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/images/logo.svg" alt="logo" className="w-32" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favorites
            </NavLink>
            <NavLink
              to={"/generate"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Recipe AI
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            onSubmit={handleSubmit}
            className="my-32 p-10 md:w-1/2 2xl:w-1/3 space-y-6 shadow bg-orange-400 rounded-lg"
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Name or ingredient
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredient"
                value={searchFilters.ingredient}
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Name or Ingredient, Exmaple: Vodka, Coffee"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                value={searchFilters.category}
                onChange={handleChange}
              >
                <option value="">--- Select option ---</option>
                {categories.drinks.map((drink) => (
                  <option
                    key={`select-drink-${drink.strCategory}`}
                    value={drink.strCategory}
                  >
                    {drink.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Search recipes"
              className="w-full p-2 cursor-pointer bg-orange-800 transition-colors text-white font-extrabold rounded-lg uppercase hover:bg-orange-900"
            />
          </form>
        )}
      </div>
    </header>
  );
}
