<template>
  <div class="slider" >
    <!--    :style="{'margin-left': '-' + (100 * currentSlideIndex) + 'vw'}"-->
    <div>
      <div class="slider__container"
           :style="{'margin-left': '-' + (100 * currentSlideIndex) + 'vw'}">
        <div class="slider__slide" v-for="item in sliderItems"
             :key="item.id"
             :style="{'background-image': `url(${item.img})`}"
        >
          <img :src="require('./images/desktop/' + item.img)" width="100%" height="auto"/>
          <p v-if="item.id === currentSlideIndex + 1" class="slider__title"
             @click="openItem(item.id)">
            {{ item.name }}
            <Link class="slider__link"/>
          </p>
        </div>
        <div class="slider__slide-mask"></div>
        <SliderButtons class="slider__slide-buttons" @nextSlide="nextSlide" @prevSlide="prevSlide"/>
        <div  class="slider__counter">
          <div class="slider__counter-item"
               :class="{'slider__counter-item--active': slide.id === currentSlideIndex + 1 }"
               v-for="slide in sliderItems" :key="slide.id"></div>
        </div>
        <div class="slider__decoration">
          <Decoration size="418" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sliderTypes } from '@/components/Slider/types';
import SliderButtons from '@/components/Banner/SliderButtons.vue';
import Link from '@/components/Link/Link.vue';
import Header from '@/components/Header/Header.vue';
import Decoration from '@/components/Decoration/Decoration.vue';

@Component({
  components: {
    Decoration, Link, SliderButtons, Header,
  },
})
export default class BannerDesktop extends Vue {
  sliderItems: sliderTypes[] = [
    { id: 1, name: 'Котедж на крутом склоне', img: '7.jpg' },
    { id: 2, name: 'Метро', img: '7.jpg' },
    { id: 3, name: 'Жилой комплекс', img: '7.jpg' },
    // { id: 3, name: 'img3', img: '3.jpg' },
  ];

  currentSlideIndex = 0;

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      // eslint-disable-next-line no-plusplus
      this.currentSlideIndex--;
    }
  }

  nextSlide() {
    if (this.currentSlideIndex >= this.sliderItems.length - 1) {
      // eslint-disable-next-line no-plusplus,no-unused-expressions
      this.currentSlideIndex = this.sliderItems.length - 2;
    }
    // eslint-disable-next-line no-plusplus
    this.currentSlideIndex++;
  }

  openItem(id: string) {
    return this.$router.push({
      name: 'catalogItem',
      params: { itemId: id },
    });
  }
}
</script>
<style lang="scss" scoped>
.slider {
  &__header {
    position: absolute;
    z-index: 2;
    width: 88%;
    margin: 0 6%;
    border: 1px solid green;
  }

  &__slide {
    width: 100vw;
    background-color: lightgray;
    display: flex;
    &-img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  &__slide-buttons {
    z-index: 3;
    position: absolute;
    right: 6%;
    bottom: 104px;
    display: flex;
  }

  &__container {
    display: flex;
    transition: all ease 0.5s;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 56%;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      opacity: 0.6;
      z-index: 2;
    }
  }

  &__decoration {
    position: absolute;
    bottom: -270px;
    left: -215px;
    z-index: 4;
  }

  &__link {
    margin-top: 40px;
    fill: var(--White);
  }

  &__title {
    margin: 0;
    position: absolute;
    z-index: 5;
    bottom: 10vh;
    width: 50%;
    left: 6%;
    font-size: 64px;
    line-height: 78px;
    text-transform: uppercase;
    color: var(--White);
  }

  &__counter {
    display: flex;
    z-index: 5;
    position: absolute;
    right: 6%;
    bottom: 70px;
    width: 106px;

    &-item {
      width: 22px;
      height: 1px;
      color: black;
      background-color: var(--White);
      margin-right: 6px;

      &--active {
        background-color: var(--Orange);
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

</style>
