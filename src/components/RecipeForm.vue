<template>
  <div>
    <h2>{{ isEditMode ? 'Редактировать рецепт' : 'Добавить рецепт' }}</h2>
    <form @submit.prevent="submitForm">
      <input
          type="text"
          v-model="form.name"
          placeholder="Название рецепта"
          required
      />
      <textarea
          v-model="form.description"
          placeholder="Описание рецепта"
          required
      ></textarea>
      <textarea
          v-model="form.instructions"
          placeholder="Инструкция по приготовлению"
          required
      ></textarea>
      <textarea
          v-model="form.ingredients"
          placeholder="Ингредиенты (через запятую)"
          required
      ></textarea>
      <button type="submit" class="save-button">
        {{ isEditMode ? 'Сохранить изменения' : 'Добавить рецепт' }}
      </button>
      <button type="button" class="cancel-button" @click="goBack">Отмена</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        ingredients: '',
        instructions: '',
      },
      isEditMode: false,
    };
  },
  created() {
    if (this.id) {
      this.isEditMode = true;
      const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      const recipe = recipes.find((r) => r.id === this.id);

      if (recipe) {
        this.form.name = recipe.name;
        this.form.description = recipe.description;
        this.form.ingredients = recipe.ingredients.join(', ');
        this.form.instructions = recipe.instructions;
      }
    }
  },
  methods: {
    submitForm() {
      const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      if (this.isEditMode) {
        const index = recipes.findIndex((r) => r.id === this.id);
        if (index !== -1) {
          recipes[index] = {
            ...recipes[index],
            name: this.form.name,
            description: this.form.description,
            ingredients: this.form.ingredients.split(',').map((i) => i.trim()),
            instructions: this.form.instructions,
          };
        }
      } else {
        recipes.push({
          id: Date.now().toString(),
          name: this.form.name,
          description: this.form.description,
          ingredients: this.form.ingredients.split(',').map((i) => i.trim()),
          instructions: this.form.instructions,
        });
      }
      localStorage.setItem('recipes', JSON.stringify(recipes));
      this.$router.push('/');
    },
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>
