<template>
    <div class="tile" v-on:click="tileClicked">{{ selectedChar }}</div>
</template>

<script>
    export default {
        methods: {
            tileClicked (event) {
                if (event.currentTarget.innerHTML === '') {
                    this.$emit('tileclick', event);
                }
            }
        },
        props: ['selectedChar']
    }
</script>

<style>
    div.tile {
    background: lightblue;
    font-size: 110px;
    height: 120px;
    line-height: 110px;
    width: 120px;
}
</style>