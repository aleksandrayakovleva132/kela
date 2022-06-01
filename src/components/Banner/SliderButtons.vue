<template>
  <div class="slider-buttons">
    <div  class="banner__buttons">
      <button class="banner__button banner__button--left" @click="prevSlide">
        <img src="./images/left.svg"/>
      </button>
      <button class="banner__button banner__button--right" @click="nextSlide">
        <img src="./images/right.svg"/>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue, Emit,
} from 'vue-property-decorator';

@Component({})
export default class SliderButtons extends Vue {
  // eslint-disable-next-line class-methods-use-this
  @Emit('prevSlide')
  prevSlide(item: string | undefined) {
    return item;
  }

  // eslint-disable-next-line class-methods-use-this
  @Emit('nextSlide')
  nextSlide(item: string | undefined) {
    return item;
  }
}
</script>
<style lang="scss" scoped>
.banner {
  &__buttons {
    display: flex;
  }

  &__button {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid var(--White);

    &--left {
      margin-right: 30px;
    }
  }
}
</style>
