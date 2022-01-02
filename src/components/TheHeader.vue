<template>
  <header class="buttonList">
    <nav>
      <h1>Find a Coach</h1>
      <ul>
        <li>All Coaches</li>
        <li>Requests</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.buttonList h1 {
  color: #ffc900;
  margin: 0;
  margin: 15px 0px 0px 60px;
  font-size: 32px;
}
.buttonList ul {
  list-style: none;
  display: flex;
}
.buttonList li {
  margin: 0rem 1rem;
  border-style: solid;
  border-width: 1px;
  padding: 8px 16px;
  background-color: #ffd700;
  border-radius: 0.2rem;
  border-color: #ffc900;
  cursor: pointer;
  color: #000957;
  font-family: Roboto, Arial, sans-serif;
}
.buttonList li:hover {
  background-color: #ffc900;
}
.buttonList {
  background-color: #000957;
}
.buttonList nav {
  display: flex;
  justify-content: space-between;
}
</style>
