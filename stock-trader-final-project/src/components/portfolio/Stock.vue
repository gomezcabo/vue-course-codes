<template>
    <div class="col-sm-5 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                        type="number"
                        class="form-control"
                        :class="{ danger: insufficentQuantity }"
                        placeholder="Quantity"
                        min="0"
                        v-model.number="quantity"
                        >
                </div>
                <div class="pull-right">
                    <button
                        class="btn btn-info"
                        @click="sellStock"
                        :disabled="insufficentQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                        >Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficentQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scopped>
    .danger {
        border: 1px solid red !important;
    }
</style>