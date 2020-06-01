<template>
  <div class="transitions">
    <button
        class="transitions__to-sasha"
        @click="addToSasha"
    >
      Саше 30
    </button>
    <button
        class="transitions__to-petya"
        @click="addToPetya"
    >
      Пете 40
    </button>
    <button
        class="transitions__to-petya"
        @click="addToPetya200"
    >
      Пете 200
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
      this.processBonus({ name: 'Sasha', value: 30 })
    },
    addToPetya () {
      this.processBonus({ name: 'Petya', value: 40 })
    },
    addToPetya200 () {
      this.processBonus({ name: 'Petya', value: 200 })
    }

  }
}
</script>

<style scoped>
  .transitions {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 50px);
    row-gap: 5px;
  }
</style>
