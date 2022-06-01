<template>
  <div class="banner">
<!--    <div class="banner__header">-->
<!--      <div class="banner__header-content">-->
<!--        <Header home-menu />-->
<!--      </div>-->
<!--    </div>-->
    <div>
      <SliderMobile v-if = "this.$layout.current === 'phone'" />
      <SliderDesktop v-else />
    </div>
<!--    <div class="banner__slider-container"-->
<!--         :style="{'margin-left': '-' + (100 * currentSlideIndex) + 'vw'}"-->
<!--    >-->
<!--      <div class="banner__slider banner__slider&#45;&#45;mobile"-->
<!--           v-for="item in sliderItems" :key="item.id">-->
<!--          <img  class="banner__slider-img"-->
<!--                :src="require('./images/' + item.img)" width="100%" />-->
<!--      </div>-->

<!--      <div class="banner__slider banner__slider&#45;&#45;desktop"-->
<!--           v-for="item in sliderItemsDesktop" :key="item.id">-->
<!--        <img  class="banner__slider-img"-->
<!--              :src="require('./images/desktop/' + item.img)" height="100%" />-->
<!--      </div>-->
<!--    </div>-->
<!--    <div  class="banner__buttons">-->
<!--      <button class="banner__button banner__button&#45;&#45;left" @click="prevSlide">-->
<!--        <img src="./images/left.svg"/>-->
<!--      </button>-->
<!--      <button class="banner__button banner__button&#45;&#45;right" @click="nextSlide">-->
<!--        <img src="./images/right.svg"/>-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="banner__image">-->
<!--      <Slider />-->
<!--    </div>-->
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import { sliderTypes } from '@/components/Slider/types';
import Slider from '@/components/Slider/Slider.vue';
import Header from '@/components/Header/Header.vue';
import SliderItem from '@/components/Slider/SliderItem.vue';
import SliderMobile from '@/components/Banner/SliderMobile.vue';
import SliderDesktop from '@/components/Banner/SliderDesktop.vue';

@Component({
  components: {
    SliderDesktop,
    SliderMobile,
    SliderItem,
    Header,
    Slider,
  },
})
export default class Banner extends Vue {
  sliderItems: sliderTypes[] = [
    { id: 0, name: 'img1', img: '1.jpg' },
    { id: 1, name: 'img2', img: '2.jpg' },
    { id: 2, name: 'img3', img: '3.jpg' },
    // { id: 3, name: 'img3', img: '3.jpg' },
  ];

  sliderItemsDesktop: sliderTypes[] = [
    { id: 0, name: 'img1', img: '4.jpg' },
    { id: 1, name: 'img2', img: '2.jpg' },
    { id: 2, name: 'img3', img: '3.jpg' },
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
      this.currentSlideIndex = 0;
    }
    // eslint-disable-next-line no-plusplus
    this.currentSlideIndex++;
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.banner {
  overflow: hidden;
  width: 100%;
  padding-bottom: 54.17%;
  position: relative;

  @include for-phone-only {
    padding-bottom: 208.33%;
  }
}
</style>
