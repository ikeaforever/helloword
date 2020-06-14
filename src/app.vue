<template>
    <div id="app">{{ text }}</div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'abc'
            }
        }
    }
</script>

<style scoped>
    div {
        color: red;
    }
</style>