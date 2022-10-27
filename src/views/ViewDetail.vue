<template>
  <div class="home">
   <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt=""/>
    <div class="info">
      <h1>{{movie.title}}</h1>
      <p>date de sortie: {{movie.release_date}}</p>
      <p>note: {{movie.vote_average}}/10</p>
      <p>{{movie.overview}}</p>
    </div>
  </div>
      <actors/>
</template>

<script>
import env from '@/env.js'
import { ref } from 'vue'
import { useRoute } from 'vue-router';



export default {
  setup(){
    const movie = ref ([])
    const route = useRoute();
    const  = getPopularActors();

      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}&language=en-FR`)
        .then(response => response.json())
        .then(data => {
          movie.value = data;
          console.log(movie.value)
        })
        return{
          movie
        }
  }
}
</script>

<style>
.home{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5% 15%;
  gap: 5%;
}

.info{
  border: 2px #000 solid;
  border-radius: 30px;
  padding: 5px;
}
</style>
