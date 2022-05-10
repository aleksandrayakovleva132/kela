<template>
  <div class="about-slider">
    <p class="about-slider__label">Мы работаем в программных комплексах:</p>
    <div class="about-slider__container">
      <div class="about-slider__frame">
        <ul class="about-slider__list" :style="{ left: listPosition }">
          <li class="about-slider__item"
              :style="{ width: sliderWidthCss }"
              v-for="item in softArray"
              :key="item.index">
            <img class="about-slider__image"
                 :src="require(`../../assets/logotypes/${item.image}.png`)" height="20"/>
<!--            <img class="about-slider__image"-->
<!--                 :src="item.image"-->
<!--                 height="20"/>-->
          </li>
        </ul>
      </div>
      <div class="about-slider__buttons">
        <button class="about-slider__button"
                :class="{'about-slider__button--lock': scrollPosition === 0}"
                @click="right()">
          <img src="src/assets/icons/left.svg"/>
        </button>
        <button
          class="about-slider__button"
          :class="{'about-slider__button--lock': maximumLeftPosition === false}"
          @click="left()">
          <img src="../../assets/icons/right.svg"/>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import { sliderTypes } from '@/components/About/types';

@Component({
})
export default class AboutSlider extends Vue {
  softArray: sliderTypes[] = [
    {
      index: 1,
      src: 'link',
      image: 'logo-1',
    },
    {
      index: 2,
      src: 'link',
      image: 'logo-2',
    },
    {
      index: 3,
      src: 'link',
      image: 'logo-3',
    },
    {
      index: 4,
      src: 'link',
      image: 'logo-1',
    },
    {
      index: 5,
      src: 'link',
      image: 'logo-2',
    },
    {
      index: 6,
      src: 'link',
      image: 'logo-3',
    },
    {
      index: 7,
      src: 'link',
      image: 'logo-1',
    },
  ];

  @Prop({
    type: Number,
    default: 0,
  })
    scrollPosition!: number;

  @Prop({
    type: Number,
    default: 210,
  })
    position!: number;

  sliderWidth = 120;

  scrollingLength = this.sliderWidth * 3;

  listWidth = (this.sliderWidth * this.softArray.length) * -1;

  get maximumLeftPosition() {
    return this.scrollPosition >= (this.listWidth + this.scrollingLength);
  }

  left(): number {
    if (this.maximumLeftPosition) {
      this.scrollPosition -= this.scrollingLength;
      return this.scrollPosition;
    }
    return this.scrollPosition;
  }

  right(): number {
    if (this.scrollPosition !== 0) {
      this.scrollPosition += this.scrollingLength;
      return this.scrollPosition;
    }
    return this.scrollPosition;
  }

  get listPosition(): string {
    return `${this.scrollPosition}px`;
  }

  get sliderWidthCss(): string {
    return `${this.sliderWidth}px`;
  }
}
</script>
<style lang="scss" scoped>
.about-slider {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
  &__frame {
    width: 360px;
    height: 20px;
    position: relative;
    overflow-x: hidden;
  }
  &__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    color: white;
    transition: 0.2s;
  }
  &__item {
    height: 20px;
    width: 120px;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__buttons {
    display: flex;
  }
  &__button {
      height: 24px;
      width: 40px;
      padding: 0;
      display: flex;
      background: transparent;
      border: none;
      &:first-child {
        justify-content: flex-start;
      }
      &:last-child {
        justify-content: flex-end;
      }

     &--lock {
       opacity: 20%;
     }
  }
  &__label {
    margin: 0 0 30px 0;
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;
  }
  &__image {
    opacity: 20%;
  }
}
</style>
