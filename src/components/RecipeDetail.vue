<template>
  <div>
    <h2>{{ recipe.name }}</h2>
    <p><strong>Описание:</strong> {{ recipe.description }}</p>
    <p><strong>Ингредиенты:</strong></p>
    <ul>
      <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
    </ul>
    <p><strong>Как приготовить:</strong></p>
    <p>{{ recipe.instructions }}</p>
    <button @click="goBack">Назад</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    this.recipe = recipes.find((r) => r.id === id);
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>
