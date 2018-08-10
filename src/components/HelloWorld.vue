<template>
    <div class="hello">

        <h1>{{msg}}</h1>

        <div>
            <button class="btn btn-success" @click="dec">-</button>
            <h2>{{ count }}</h2>
            <button class="btn btn-success" @click="inc">+</button>
        </div>

    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace,
    } from 'vuex-class';

    @Component
    export default class HelloWorld extends Vue {
        @Getter('count') private count!: number; // Doesn't work with strict type like number
        @Action('inc') private inc: any;
        @Action('dec') private dec: any;

        @Prop() private msg!: string;
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    h3
        margin 40px 0 0
    ul
        list-style-type none
        padding 0
    li
        display inline-block
        margin 0 10px
    a
        color #42b983
</style>