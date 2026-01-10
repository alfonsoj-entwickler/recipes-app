import type { StateCreator } from "zustand";
import { getCategories, getRecipe, getRecipes } from "../services/RecipeService";
import type { Categories, Drinks, SearchFilter, Drink, Recipe } from "../types";

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
    openModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories();
        //console.log(categories)
        set({
            categories: categories
        })
    },
    searchRecipes: async (searchFilter) => {
        const drinks = await getRecipes(searchFilter);
        set({
            drinks: drinks
        })
    },
    selectRecipe: async (id) => {
        const details = await getRecipe(id)
        set({
            selectedRecipe: details,
            modal: true
        })
    },
    closeModal: () => {
        set(
            {
                selectedRecipe: {} as Recipe,
                modal: false
            }
        )
    },
    openModal: () => {
        set(
            {
                modal: true
            }
        )
    }

})