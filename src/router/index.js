import { createRouter, createWebHistory } from 'vue-router';
import RecipeList from '../components/RecipeList.vue';
import RecipeDetail from '../components/RecipeDetail.vue';
import RecipeForm from '../components/RecipeForm.vue';

const routes = [
    { path: '/', name: 'recipe-list', component: RecipeList },
    { path: '/add-recipe', name: 'add-recipe', component: RecipeForm },
    { path: '/edit-recipe/:id', name: 'edit-recipe', component: RecipeForm, props: true },
    { path: '/recipe/:id', name: 'recipe-detail', component: RecipeDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
