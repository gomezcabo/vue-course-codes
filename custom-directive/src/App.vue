<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button class="btn btn-info" v-myon:click="sayHi">Click here</button>
                <hr>
                <div
                    style="width: 100px; height: 50px;"
                    :style="{ backgroundColor: divColor }"
                    v-myon:mouseenter="changeBackground"
                    v-myon:mouseleave="changeBackground"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                divColor: 'limegreen'
            }
        },
        methods: {
            sayHi() {
                alert('Hi there!');
            },
            changeBackground() {
                this.divColor = this.divColor == 'limegreen' ? 'tomato' : 'limegreen';
            }
        },
        directives: {
            'myon': {
                bind(el, binding, vnode) {
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        }
    }
</script>

<style>
</style>
