<template>
  <div class="ww-progressbar-donut" ref="wwProgressDonut"></div>
</template>

<script>
import { VeProgress } from "vue-ellipse-progress";

export default {
  components: { VeProgress },
  props: {
    content: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
.ww-progressbar-donut {
}
</style>
