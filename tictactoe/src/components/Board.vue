<template>
    <div class="grid">
        <Tile selected-char="" v-on:tileclick="tileClicked" />
        <Tile selected-char=""  v-on:tileclick="tileClicked" />
        <Tile selected-char=""  v-on:tileclick="tileClicked" />
        <Tile selected-char=""  v-on:tileclick="tileClicked" />
        <Tile selected-char=""  v-on:tileclick="tileClicked" />
        <Tile selected-char=""  v-on:tileclick="tileClicked" />
        <Tile selected-char=""  v-on:tileclick="tileClicked" />
        <Tile selected-char=""  v-on:tileclick="tileClicked" />
        <Tile selected-char=""  v-on:tileclick="tileClicked" />
    </div>
</template>

<script>
import Tile from './Tile.vue';

export default {
    components: {
        Tile
    },
    data() {
        return {
            character: 'X'
        };
    },
    methods: {
        tileClicked() {
            event.currentTarget.innerHTML = this.character;
            this.character = this.character === 'X' ? 'O' : 'X';
        }
    }
}
</script>

<style>
    .grid {
        display: grid;
        grid-gap: 5px 5px;
        grid-template-columns: auto auto auto;
        justify-content: center;
        margin-top: 20px;
    }
</style>