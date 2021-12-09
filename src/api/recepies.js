import * as api from './api.js';
import { addOwner } from './data.js';

const endpoints = {
    recipes: '/classes/Recipe',
    recipeDetails: (id) => `/classes/Recipe/${id}?include=owner`,
    recipeById: '/classes/Recipe/',
};

export async function getRecipes() {
    return api.get(endpoints.recipes);
}

export async function getRecipeById(id) {
    return api.get(endpoints.recipeDetails(id));
}

export async function cretaeRecipe(recipe) {
    addOwner(recipe);
    return api.post(endpoints.recipes, recipe);
}

export async function updateRecipe(id, recipe) {
    return api.put(endpoints.recipeById + id, recipe);
}

export async function deleteRecipe(id) {
    return api.del(endpoints.recipeById + id);
}