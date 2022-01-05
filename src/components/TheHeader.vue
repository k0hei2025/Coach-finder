<template>
  <header class="buttonList">
    <nav>
      <h1>Find a Coach</h1>
      <ul>
        <router-link style="textDecoration:none"  to="/coaches"><li>All Coaches</li></router-link>
        <router-link style="textDecoration:none" to="/requests"><li>Requests</li></router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.buttonList h1 {
  color: #ffff;
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
  padding: 12px 18px;
  background-color: transparent;
  border-radius: 0.2rem;
  border-color: #ffc900;
  border-width: 2px;
  cursor: pointer;
  color: #ffc900;
  font-family: Roboto, Arial, sans-serif;
}
.buttonList li:hover {
  background-color: #ffc900;
  color: #000957;

}
.buttonList {
  background-color: #000957;
}
.buttonList nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
}
</style>
