<template>
  <div class="banner">
    <div class="banner__image">
      <Slider />
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import { sliderTypes } from '@/components/Slider/types';
import Slider from '@/components/Slider/Slider.vue';

@Component({
  components: { Slider },
})
export default class Banner extends Vue {
  sliderItems: sliderTypes[] = [
    { id: 1, name: 'img1', img: '1.jpg' },
    { id: 2, name: 'img2', img: '2.jpg' },
    { id: 3, name: 'img3', img: '3.jpg' },
    { id: 4, name: 'img4', img: '1.jpg' },
    { id: 5, name: 'img5', img: '2.jpg' },
    { id: 6, name: 'img6', img: '3.jpg' },
  ];
}
</script>
<style lang="scss" scoped>
.banner {
  overflow: hidden;
  width: 100%;
  padding-bottom: 54.17%;

  &__image {
    display: flex;
    overflow: hidden;
    position: absolute;
    width: 100%;

    &:after {
      content: '';
      display: block;
      position: absolute;
      opacity: 0.6;
      background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
}
</style>
