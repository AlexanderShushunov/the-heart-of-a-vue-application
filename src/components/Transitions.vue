<template>
  <div class="transitions">
    <label class="transitions__amount">
      Amount: <input type="number" v-model="amount">
    </label>
    <button
        class="transitions__to-sasha"
        @click="addToSasha"
    >
      Add To Sasha
    </button>
    <button
        class="transitions__to-petya"
        @click="addToPetya"
    >
      Add To Petya
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Transitions',
  data () {
    return {
      amount: 10
    }
  },
  methods: {
    ...mapActions('bonus', [
      'processBonus'
    ]),
    addToSasha () {
      this.processBonus({ name: 'Sasha', value: Number(this.amount) })
    },
    addToPetya () {
      this.processBonus({ name: 'Petya', value: Number(this.amount) })
    }

  }
}
</script>

<style scoped>
  .transitions {
    display: grid;
    grid-template-areas: 'amount amount' 'toSasha toPetya';
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
  }

  .transitions__amount {
    grid-area: amount;
  }

  .transitions__to-sasha {
    grid-area: toSasha;
  }

  .transitions__to-petya {
    grid-area: toPetya;
  }
</style>
