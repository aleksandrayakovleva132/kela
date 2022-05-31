<template>
  <div class="link">
    <span class="link__label" :class="{'link__label--big': big}">{{ label }}</span>
    <span v-if="big" class="link__arrow"><svg width="31" height="16" viewBox="0 0 31 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.7071 8.7071C31.0976 8.31658 31.0976
        7.68341 30.7071 7.29289L24.3431
        0.92893C23.9526 0.538406 23.3195 0.538406
        22.9289 0.92893C22.5384 1.31945 22.5384 1.95262
        22.9289 2.34314L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805
        22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431
        15.0711L30.7071 8.7071ZM8.74228e-08 9L30 9L30 7L-8.74228e-08 7L8.74228e-08 9Z"
              fill="inherit"/>
    </svg>
    </span>
    <span v-else class="link__arrow">
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

  @Prop({
    type: Boolean,
  })
  readonly big!: boolean;
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.link {
  display: flex;
  align-items: center;
  color: inherit;

  &__label {
    display: block;
    color: inherit;
    line-height: 18px;
    font-size: 15px;
    margin-right: 8px;
    text-transform: uppercase;

    @include for-phone-only {
      font-size: 15px;
      line-height: 18px;
    }

    &--big {
      font-size: 58px;
      margin-right: 16px;

      @include for-phone-only {
        font-size: 38px;
        margin-right: 54px;
      }
    }
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
