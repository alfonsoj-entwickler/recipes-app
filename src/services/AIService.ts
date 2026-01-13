import { streamText } from 'ai';
import { openrouter } from '../lib/ai';

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt: prompt,
            system: 'Nutrition expert in smoothie and overnight oats recipes',
            temperature: 1 // very creativ
        })
        return result.textStream;
    }
}