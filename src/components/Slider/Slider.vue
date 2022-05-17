<template>
  <div class="slider__wrapper">
    <div class="slider" :style="{'margin-left': '-' + (100 * currentSlideIndex) + 'vw'}">
      <SliderItem v-for="item in sliderItems"
                  :key="item.id"
                  :item-data="item"
      />
    </div>
    <div  class="slider__buttons">
      <button class="slider__button slider__button--left" @click="prevSlide">
        <img src="./images/left.svg"/>
      </button>
      <button class="slider__button slider__button--right" @click="nextSlide">
        <img src="./images/right.svg"/>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { sliderTypes } from '@/components/Slider/types';
import SliderItem from '@/components/Slider/SliderItem.vue';

@Component({
  components: { SliderItem },
})
export default class Slider extends Vue {
  sliderItems: sliderTypes[] = [
    { id: 1, name: 'img1', img: '1.jpg' },
    { id: 2, name: 'img2', img: '2.jpg' },
    { id: 3, name: 'img3', img: '3.jpg' },
    { id: 4, name: 'img4', img: '4.jpg' },
    { id: 5, name: 'img5', img: '5.jpg' },
    { id: 6, name: 'img6', img: '3.jpg' },
  ];

  currentSlideIndex = 0;

  @Prop({
    type: Number,
    default: 0,
  })
  readonly interval!: number;

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      // eslint-disable-next-line no-plusplus
      this.currentSlideIndex--;
    }
  }

  nextSlide() {
    if (this.currentSlideIndex >= this.sliderItems.length - 1) {
      this.currentSlideIndex = 0;
    }
    // eslint-disable-next-line no-plusplus
    this.currentSlideIndex++;
  }
  //
  // mounted() {
  //   if (this.interval > 0) {
  //     setInterval(() => {
  //       this.nextSlide();
  //     }, this.interval);
  //   }
  // }
}
</script>
<style lang="scss">
.slider {
  display: flex;
  transition: all ease 1.5s;

  &__buttons {
    position: absolute;
    z-index: 20;
    right: 100px;
    top: 80vh;
  }

  &__button {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid var(--White);

    &--left {
      margin-right: 30px;
      //background-image: url("./images/polygon.svg");
    }
  }
}
</style>
