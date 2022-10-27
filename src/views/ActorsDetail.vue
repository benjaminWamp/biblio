<template>
    <ul>
        <li v-for="actor in actors" :key="actor.id">
            <span>{{actor.name}}</span>
        </li>
    </ul>
</template>

<script>

</script>

<style>
ul{
    display: flex;
    overflow: auto;
    margin: 5%50px;
    gap: 50px;
}
</style>
