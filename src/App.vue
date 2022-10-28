<template>
  <nav>
    <router-link to="/"><img src="./assets/logo.png" alt=""></router-link>
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Que cherchez-vous ?" v-model="search" />
      <input type="submit" value="Rechercher" />
    </form>
  </nav>
  <main>
    <ul>
      <li v-for="result in results" :key="result.id">
        <router-link :to="'/movie/' + result.id" class="movies">
          <img :src="`https://image.tmdb.org/t/p/w200${result.poster_path}`" alt="{{result.title}}">
          <span>{{ result.title }}</span>
          <span>{{ result.release_date }}</span>
          <span>{{ result.vote_average }}/10</span>
        </router-link>
      </li>
    </ul>
  </main>
  <router-view/>
  <footer>
    <p>© Benjamin LANGLOIS 2022</p>
  </footer>
</template>

<script>
import { ref } from 'vue';
import env from '@/env.js'
export default {
  setup() {
    const search = ref("");
    const results = ref([]);
    const SearchMovies = () => {
      if (search.value != "") {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&query=${search.value}`)
          .then(data => data.json())
          .then(data => {
            results.value = data.results;
            search.value = "";
            console.log('les films =', results.value)
          });
      }
    }
    return {
      search,
      results,
      SearchMovies,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

nav {
  padding: 30px;
  background-color: #1A1A1A;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

nav img{
  height: 50px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active{
  color: #42b983;
}

footer{
  background-color: #1A1A1A;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
}


body{
  margin: 0;
  padding: 0;
  background: linear-gradient(0deg, rgba(65, 184, 131, 1) 0%, rgba(51, 136, 98, 1) 100%);
}

.search-box :nth-child(1){
  padding: 10px;
  border-radius: 50px 0 0 50px;
  border: 0;
  color: #FFF;
  background: #41b883;
}

.search-box  :nth-child(2) {
  padding: 10px 10px 10px 5px;
  border-radius: 0 50px 50px 0;
  border: 0;
  cursor: pointer;
}

main > div{
  margin: 3%;
}

main  ul {
      display: grid;
        grid-template-columns: 1FR 1FR 1FR;
        list-style: none;
        padding: 0;
}

main ul li{
      margin: 5%;
}
.carousel .carousel__prev{
      background: #FFF;
      border-radius: 50%;
      opacity: 0.7;
}

.carousel .carousel__next{
      background: #FFF;
      border-radius: 50%;
      opacity: 0.7;
}
</style>
