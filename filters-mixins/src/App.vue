<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <input v-model="text">

                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>Reversed:<br>{{ text | reverse }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>With counter:<br>{{ text | count-chars }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>Reversed (computed):<br>{{ reversedText }}</p>
                <p>Reversed (computed):<br>{{ withCounterText }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { computedMixins } from './computed-mixins';

    export default {
        data() {
            return {
                text: 'Hello Mixins'
            }
        },
        mixins: [computedMixins],
        filters: {
            reverse(value) {
                return value.split('').reverse().join('');
            }
        }
    }
</script>

<style>
</style>
