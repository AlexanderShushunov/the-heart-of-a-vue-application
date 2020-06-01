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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    pointer-events: none;
  }

  .alarm--on {
    animation: blink 1s step-start 0s infinite;
  }

  @keyframes blink {
    50% {
      background-color: rgba(255, 0, 0, .5);
    }
  }
</style>
