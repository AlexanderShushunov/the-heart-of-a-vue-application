<template>
  <div class="super-service">
    <Alarm />
    <BonusTable />
    <Transitions />
  </div>
</template>

<script>
import Alarm from './Alarm'
import BonusTable from './BonusTable'
import Transitions from './Transitions'

export default {
  name: 'SuperService',
  components: {
    Alarm,
    BonusTable,
    Transitions
  }
}
</script>

<style scoped>
  .super-service {
    display: grid;
    grid-template-columns: 400px;
    row-gap: 20px;
    margin: 10px;
  }
</style>
