<template>
  <div class="link">
    <span class="link__label">{{ label }}</span>
    <span class="link__arrow">
      <svg width="31" height="8" viewBox="0 0 31 8" fill="inherit" xmlns="http://www.w3.org/2000/svg">
       <path d="M30.3536 4.35355C30.5488 4.15829
       30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202
       26.6597 0.269202 26.4645 0.464464C26.2692
       0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645
       6.82842C26.2692 7.02369 26.2692 7.34027
       26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716
       7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30
       4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
       fill="inherit"/>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Link extends Vue {
  @Prop({
    type: String,
    default: 'Подробнее',
  })
  readonly label!: string;
}
</script>
<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  color: inherit;

  &__label {
    display: block;
    color: inherit;
    line-height: 18px;
    font-size: 15px;
    margin-right: 16px;
    text-transform: uppercase;
  }
  &__arrow {
    display: flex;
    width: 30px;
    height: 18px;
    fill: inherit;
    align-items: center;
  }
}
</style>
