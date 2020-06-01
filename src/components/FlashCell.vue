<template>
  <td>{{ value }}</td>
</template>

<script>

function flush (el, color) {
  el.style.backgroundColor = color
  setTimeout(() => {
    el.style.backgroundColor = 'transparent'
  }, 500)

}

export default {
  name: 'FlashCell',
  props: {
    value: [String, Number]
  },
  updated() {
    flush(this.$el, 'green')
  },
}
</script>

<style scoped>

</style>

