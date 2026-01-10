import type { StateCreator } from 'zustand';
import AIService from '../services/AIService';
 

export type AISliceType = {
    recipe: string
    isGenerating: boolean
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice: StateCreator<AISliceType> = (set) => ({
    recipe: '',
    isGenerating: false,
    generateRecipe: async (prompt) => {
        // clear recipe
        set({
            recipe: '',
            isGenerating: true
        })
        // call ai 
        const data = await AIService.generateRecipe(prompt);
        for await (const textPart of data) {
            set((state) =>
                ({
                recipe: state.recipe + textPart
            }))
        }

        set({
            isGenerating: false
        })
    }
})