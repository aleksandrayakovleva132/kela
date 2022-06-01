<template>
  <div class="slider">
    <Header class="slider__header" home-menu />
    <div class="slider__container" :style="{'margin-left': '-' + (100 * currentSlideIndex) + 'vw'}">
      <div class="slider__slide" v-for="item in sliderItems"
           :key="item.id" :style="{backgroundColor: item.img}">
          {{ item.name }}
<!--        <div class="slider__slide-img" :style="{backgroundColor: item.img}"></div>-->
      </div>
      <div class="slider__slide-mask"></div>
      <SliderButtons class="slider__slide-buttons" @nextSlide="clickNext" @prevSlide="beforeSlide"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/Header.vue';
import SliderButtons from '@/components/Banner/SliderButtons.vue';
import { sliderTypes } from '@/components/Slider/types';

@Component({
  components: { SliderButtons, Header },
})
export default class BannerMobile extends Vue {
  sliderItems: sliderTypes[] = [
    { id: 0, name: 'img1', img: 'red' },
    { id: 1, name: 'img2', img: 'orange' },
    { id: 2, name: 'img3', img: 'purple' },
    // { id: 3, name: 'img3', img: '3.jpg' },
  ];

  currentSlideIndex = 1;

  beforeSlide() {
    if (this.currentSlideIndex > 0) {
      // eslint-disable-next-line no-plusplus
      this.currentSlideIndex--;
    }
  }

  clickNext() {
    if (this.currentSlideIndex >= this.sliderItems.length - 1) {
      this.currentSlideIndex = 0;
    }
    // eslint-disable-next-line no-plusplus
    this.currentSlideIndex++;
  }
}
</script>
<style lang="scss" scoped>
.slider {
  &__header {
    position: absolute;
    z-index: 2;
    width: 100%;
  }

  &__slide {
    display: flex;
    transition: all ease 1.5s;
    width: 100%;
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
    right: 20px;
    bottom: 50px;
    display: flex;
  }

  &__container {
     display: flex;
     transition: all ease 1.5s;
     //overflow: hidden;
     position: absolute;
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;
     background-color: green;

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
}

</style>

<!--@include for-phone-only {-->
<!--padding-bottom: 208.33%;-->
<!--&__header-content {-->
<!--width: 100%;-->
<!--padding: 0 15px;-->
<!--}-->

<!--//&__slider {-->
<!--//  border: 2px solid purple;-->
<!--//  position: absolute;-->
<!--//  top: 0;-->
<!--//  bottom: 0;-->
<!--//  right: 0;-->
<!--//  left: 0;-->
<!--//}-->

<!--&__slider {-->
<!--width: 100%;-->
<!--&&#45;&#45;mobile {-->
<!--display: block;-->
<!--}-->
<!--&&#45;&#45;desktop {-->
<!--display: none;-->
<!--}-->
<!--}-->
<!--}-->
