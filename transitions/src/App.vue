<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Toggle Alert</button>
                <br><br>
                <transition name="slide" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition name="slide">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition
                        enter-active-class="animated bounce"
                        leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li
                            class="list-group-item"
                            v-for="(number, index) in numbers" :key="number"
                            @click="removeItem(index)"
                            >
                            {{ number }}
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                numbers: [1,2,3,4,5,6]
            }
        },
        methods: {
            addItem() {
                const index = Math.floor(Math.random() * this.numbers.length);
                const value = this.numbers.length + 1;
                this.numbers.splice(index, 0, value);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 0.5s;
    }

    .fade-leave {
        /* nothing here */
    }

    .fade-leave-active {
        transition: opacity 1.5s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        transition: opacity 1s;
        animation: slide-in 1s ease-out forwards;
    }

    .slide-leave-active {
        opacity: 0;
        transition: opacity 1s;
        animation: slide-out 1s ease-out forwards;
        position: absolute;
        width: 100%;
    }

    .slide-leave {

    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateX(20px);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(20px);
        }
    }
</style>
