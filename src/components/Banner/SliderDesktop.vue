<template>
  <div class="slider__container">
    <div class="slider__slide"> Десктоп слайдер</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class BannerDesktop extends Vue {
  currentSlideIndex = 0;
}
</script>
<style lang="scss" scoped>
.slider {
  &__slide {
    width: 100%;
  }

  &__container {
    display: flex;
    transition: all ease 1.5s;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
}

</style>
