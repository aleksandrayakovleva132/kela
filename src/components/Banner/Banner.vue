<template>
  <div class="banner">
      <Header class="banner__header"/>
      <SliderMobile v-if = "this.$layout.current === 'phone'" />
      <SliderDesktop v-else />
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
  position: relative;

  &__header {
    position: absolute;
    width: 88%;
    left: 6%;
  }

  @include for-phone-only {
    padding-bottom: 0;
    height: 100vh
  }
}
</style>
