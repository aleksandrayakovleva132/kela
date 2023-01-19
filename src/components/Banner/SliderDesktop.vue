<template>
  <div class="slider" >
    <!--    :style="{'margin-left': '-' + (100 * currentSlideIndex) + 'vw'}"-->
    <div>
      <div class="slider__container"
           :style="{'margin-left': '-' + (100 * currentSlideIndex) + 'vw'}">
        <div class="slider__slide" v-for="item in sliderItems"
             :key="item.id"
             :style="{'background-image': `url(${item.img})`}"
             @click="sliderClick()"
        >
<!--          <span-->
<!--            style="-->
<!--            background-color: olive;-->
<!--            padding: 50px 100px;-->
<!--            color: white;-->
<!--            position:absolute; top: 200px;-->
<!--            left: 400px; z-index: 300;">-->
<!--            {{ item.id }}-->
<!--          </span>-->
          <img :src="require('./images/desktop/' + item.img)"/>
          <router-link to="catalog/civil/1#1">
            <p v-if="item.id === currentSlideIndex + 1" class="slider__title">
<!--               @click="openItem(item.id)">-->
              <template v-if="rus">{{ item.name }}</template>
              <template v-else>{{ item.enName }}</template>
<!--              <Link class="slider__link"/>-->
            </p>
          </router-link>
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
import Local from '@/store/enums/Local';
import ColorLogo from '@/store/enums/ColorLogo';

@Component({
  components: {
    Decoration, Link, SliderButtons, Header,
  },
})
export default class BannerDesktop extends Vue {
  sliderItems: sliderTypes[] = [
    {
      id: 1,
      img: '01.jpg',
    },
    {
      id: 2,
      img: '02.jpg',
      light: true,
    },
    {
      id: 3,
      img: '03.jpg',
    },
    {
      id: 4,
      img: '04.jpg',
    },
  ];

  currentSlideIndex = 0;

  currentColorLogo = ColorLogo.DARK;

  private $local: any;

  private $colorLogo: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }

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
      name: 'catalog',
      params: { itemId: id },
      hash: `/catalog/civil/${id}#${id}`,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  sliderClick(): any {
    // eslint-disable-next-line no-console
    console.log('clickk');
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.slider {
  min-height: 400px;
  &__header {
    position: absolute;
    z-index: 2;
    width: 88%;
    margin: 0 6%;
  }

  &__slide {
    width: 100vw;
    height: 60vh;
    background-color: lightgray;
    display: flex;
    position: relative;

    & img {
      width: 100%;
      position: absolute;

      @include for-phone-and-tablet {
        height: 100%;
        width: auto;
      }
    }
    &-img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  &__slide-buttons {
    z-index: 20;
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
    font-size: 52px;
    line-height: 60px;
    text-transform: uppercase;
    color: var(--White);

    @include for-big-desktop-up {
      font-size: 64px;
      line-height: 78px;
    }
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
