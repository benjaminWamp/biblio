import env from "@/env.js";
import { ref } from "vue";

export default {
  setup() {
    const actors = ref([]);

    fetch(
      `https://api.themoviedb.org/3/movie/550/credits?api_key=${env.apikey}`
    )
      .then((response) => response.json())
      .then((data) => {
        actors.value = data.cast;
        console.log(actors.value);
        console.log(actors.value.name);
      });
      
    return {
      actors,
    };
  },
};
