<template>
  <div
      class="alarm"
      :class="{'alarm--on': alarm}"
  />
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SuperService',
  computed: {
    ...mapState('fraud', [
      'alarm'
    ])
  }
}
</script>

<style scoped>
  .alarm {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: green;
  }

  .alarm--on {
    background-color: red;
  }
</style>
