<template>
  <table>
    <tr>
      <th>Имя</th>
      <th>Бонусы</th>
    </tr>
    <tr
        v-for="{name, amount} in rows"
        :key="name"
    >
      <td>{{ name }}</td>
      <td>{{ amount }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'BonusTable',
  computed: {
    rows: function () {
      console.log(this)
      const bonus = this.$store.state.bonus
      return Object.keys(bonus).map(name => ({
        name,
        amount: bonus[name]
      }))
    }
  }
}
</script>
