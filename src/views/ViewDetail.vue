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
      <ul>
        <li v-for="actor in actors" :key="actor.id">
          <img :src="`https://image.tmdb.org/t/p/w200${actor.profile_path}`" alt="">
          <span>{{actor.name}}</span>
          <div>({{actor.character}})</div>
        </li>
      </ul>
</template>

<script>
import env from '@/env.js'
import { ref } from 'vue'
import { useRoute } from 'vue-router';
 


export default {
  setup(){
    const movie = ref ([])
    const route = useRoute();
    const actors = ref({});

      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apikey}&language=en-FR`)
        .then(response => response.json())
        .then(data => {
          movie.value = data;
          console.log(movie.value)
        })

    fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=${env.apikey}`)
      .then(response => response.json())
      .then((data) => {
        actors.value = data.cast;
        console.log(actors.value);
      });

        return{
          movie,
          actors,
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

ul {
  display: flex;
  overflow: auto;
  margin: 5% 15%;
  gap: 50px;
  padding: 0;
  list-style: none;
}

ul li img{
  max-width: 85px;
}
</style>
