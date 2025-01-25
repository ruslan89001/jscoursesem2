<template>
  <div>
    <h1>Менеджер рецептов</h1>
    <input
        type="text"
        placeholder="Поиск рецептов..."
        v-model="searchQuery"
        @input="filterRecipes"
    />
    <router-link to="/add-recipe" class="add-button">Добавить рецепт</router-link>
    <ul>
      <li v-for="recipe in filteredRecipes" :key="recipe.id">
        <router-link :to="{ name: 'recipe-detail', params: { id: recipe.id } }">
          {{ recipe.name }}
        </router-link>
        <div>
          <router-link :to="{ name: 'edit-recipe', params: { id: recipe.id } }">
            <button class="edit-button">Редактировать</button>
          </router-link>
          <button @click="deleteRecipe(recipe.id)" class="delete-button">Удалить</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: JSON.parse(localStorage.getItem('recipes')) || [],
      searchQuery: '',
      filteredRecipes: [],
    };
  },
  created() {
    this.filteredRecipes = this.recipes;
  },
  methods: {
    deleteRecipe(id) {
      this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
      this.updateLocalStorage();
      this.filterRecipes();
    },
    filterRecipes() {
      const query = this.searchQuery.toLowerCase();
      this.filteredRecipes = this.recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(query)
      );
    },
    updateLocalStorage() {
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
    },
  },
  watch: {
    searchQuery: 'filterRecipes',
  },
};
</script>
