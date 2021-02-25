<template>
  <div class="questions">
    <show showComponent = "questions"></show>
  </div>
</template>

<script>
import show from '../components/show'
export default {
  name: 'questions',
  components: {
    show
  }
}
</script>
