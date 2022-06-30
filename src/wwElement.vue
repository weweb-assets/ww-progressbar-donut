<template>
  <div class="ww-progressbar-donut">
    <ve-progress
      :key="componentKey"
      :size="size"
      :progress="content.value"
      :color="content.fillColor"
      colorFill="white"
      :emptyColor="content.emptyColor"
      :thickness="thickness"
      :emptyThickness="emptyThickness"
      :lineMode="`${content.style} ${offset}`"
      line-position="out 50"
      empty-line-position="out 50"
      :animation="`default ${animation.duration} ${animation.delay}`"
    >
      <wwLayout class="ww-progressbar-donut__content" path="container" />
    </ve-progress>
  </div>
</template>

<script>
import { VeProgress } from "vue-ellipse-progress";

export default {
  components: { VeProgress },
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      elementHeight: 250,
      componentKey: 0,
      resizeObserver: null,
    };
  },
  computed: {
    size() {
      return this.elementHeight >= 0 ? this.elementHeight : 50;
    },
    thickness() {
      return this.getUnitValue(this.content.thickness);
    },
    emptyThickness() {
      return this.getUnitValue(this.content.emptyThickness);
    },
    offset() {
      const offset = this.getUnitValue(this.content.offset);
      return offset >= 0 ? offset : 100;
    },
    animation() {
      return {
        delay: this.getUnitValue(this.content.animationDelay),
        duration: this.getUnitValue(this.content.animationDuration),
      };
    },
  },
  methods: {
    updateSize(el) {
      this.elementHeight = el.getBoundingClientRect().height;
      this.componentKey += 1;
    },
    getUnitValue(unit) {
      return wwLib.wwUtils.getLengthUnit(unit)[0];
    },
  },
  beforeUnmount() {
    this.resizeObserver.disconnect();
  },
  mounted() {
    const el = this.$el;
    this.updateSize(el);
    this.resizeObserver = new ResizeObserver(() => {
      this.updateSize(el);
    });
    this.resizeObserver.observe(el);
  },
};
</script>

<style lang="scss" scoped>
.ww-progressbar-donut {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
