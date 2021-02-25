<template>
  <div class="score">
    <show showComponent = "score"></show>
  </div>
</template>

<script>
import show from '../components/show'
export default {
  name: 'score',
  components: {
    show
  }
}
</script>
