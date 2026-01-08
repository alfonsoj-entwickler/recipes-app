import { create } from "zustand";
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice";
import { type FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice";
import { type NotificationSliceType, createNotificationSlice } from "./notificationSlice";
import { type AISliceType, createAISlice } from './aiSlice';


export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
}))