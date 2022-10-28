<template>
    <H2>Top 10 des films les plus populaires</H2>
    <carousel :items-to-show="5">
        <slide v-for="movie in populary" :key="movie.id">
            <router-link :to="'/movie/' + movie.id" class="movies">
                <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt="{{movie.tilte}}">
                <span>{{ movie.title }}</span>
                <span>{{ movie.release_date }}</span>
                <span>{{ movie.vote_average }}/10</span>
            </router-link>
        </slide>
    
        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
    <H2>Top 10 des meilleures films de 2020</H2>
    <carousel :items-to-show="5">
        <slide v-for="movie in best" :key="movie.id">
            <router-link :to="'/movie/' + movie.id" class="movies">
                <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt="{{movie.tilte}}">
                <span>{{movie.title}}</span>
                <span>{{movie.release_date}}</span>
                <span>{{movie.vote_average}}/10</span>
            </router-link>
        </slide>
    
        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
    <H2>Top 10 des meilleures dramas</H2>
    <carousel :items-to-show="5">
        <slide v-for="movie in drama" :key="movie.id">
            <router-link :to="'/movie/' + movie.id" class="movies">
                <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt="{{movie.tilte}}">
                <span>{{movie.title}}</span>
                <span>{{movie.release_date}}</span>
                <span>{{movie.vote_average}}/10</span>
            </router-link>
        </slide>
    
        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import env from '@/env.js'
import { ref } from 'vue'

export default {
    name: 'App',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    setup() {
        const populary = ref([])
        const best =ref([])
        const drama = ref([])

        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${env.apikey}`)
            .then(response => response.json())
            .then(data => {
                populary.value = data.results.slice(0, 10);
            })

        fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&api_key=${env.apikey}`)
        .then(response => response.json())
        .then( data => {
            best.value = data.results.slice(0,10);
        })

        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${env.apikey}`)
            .then(response => response.json())
            .then(data => {
                drama.value = data.results.slice(0, 10);
            })

        return {
            populary,
            best,    
            drama
        }
    }
}
</script>

<style>
H2{
    margin: 4% ;
}
.movies{
    position: relative;
    overflow: hidden;
    border-radius: 15px;
}

.movies :nth-child(2){
    position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 5px 0;
        text-align: center;
        text-shadow: 1px 1px 2px #000000;
        background-color: #0003;
        color: #FFF;
}
.movies :nth-child(3) {
    position: absolute;
    color: #FFF;
    left: 5px;
    bottom: 5px;
    font-size: .8em;
}

.movies :nth-child(4) {
    position: absolute;
    color: #FFF;
    right: 5px;
    bottom: 5px;
    font-size: .8em;
}

/* .movie:hover{
    transform: scale(10px, 10px);
    border: 3px solid #000;
} */
.slide {
    box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
    padding: 25px;
    border-radius: 5px;
}

/* .carousel__track li a:hover{
    transform: scale(10px);
    border: #000 solid 3px;
} */

/* li a img:hover{
    border: #42B883 2px solid;
} */
</style>