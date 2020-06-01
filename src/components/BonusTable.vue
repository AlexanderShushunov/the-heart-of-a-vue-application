<template>
  <table class="bonus-table">
    <tr>
      <th>Имя</th>
      <th>Бонусы</th>
    </tr>
    <tr
        v-for="{name, amount} in rows"
        :key="name"
    >
      <td>{{ name }}</td>
      <FlashCell :value="amount"/>
    </tr>
  </table>
</template>

<script>
import FlashCell from './FlashCell'

export default {
  name: 'BonusTable',
  computed: {
    rows: function () {
      const bonus = this.$store.state.bonus
      return Object.keys(bonus).map(name => ({
        name,
        amount: bonus[name]
      }))
    }
  },
  components: {
    FlashCell
  }
}
</script>

<style scoped>
  .bonus-table {
    font-size: 2rem;
  }
</style>
