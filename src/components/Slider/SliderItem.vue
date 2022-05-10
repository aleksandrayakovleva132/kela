<template>
  <div class="slider-item">
    <img :src="require('./images/' + itemData.img)" width="100%">
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { sliderItemType } from '@/components/Slider/types';

@Component({})
export default class SliderItem extends Vue {
  @Prop({
    type: Object,
  })
  readonly itemData!: sliderItemType;
}
</script>
<style lang="scss">
.slider-item {
  width: 100vw;
}
</style>
