<template>
  <div>
    <SliderItem v-for="item in sliderData"
                :key="item.id"
                :item-data="item"
    />
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
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly sliderData!: sliderTypes;
}
</script>
<style lang="scss"></style>
