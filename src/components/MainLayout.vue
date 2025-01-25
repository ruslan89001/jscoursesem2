<template>
  <div>
    <header>
      <h1>Менеджер рецептов</h1>
      <nav>
        <router-link to="/">Список рецептов</router-link>
        <router-link to="/add-recipe">Добавить рецепт</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2025 Менеджер рецептов</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
main {
  padding: 1rem;
}
</style>
