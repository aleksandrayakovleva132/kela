<template>
  <div class="decoration">
    <svg :width="size" height="auto" viewBox="0 0 413 362" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.13021 178.275L101.958 3.27551C102.936 1.55984 104.76 0.500728 106.735
      0.500728L306.265
      0.500719C308.24 0.500719 310.064 1.55983 311.042 3.2755L410.87 178.275C411.833 179.964
      411.833 182.036 410.87 183.725L311.042 358.725C310.064 360.44
      308.24 361.499 306.265 361.499L106.735 361.499C104.76
      361.499 102.936 360.44 101.958 358.725L2.13021 183.725C1.16669
      182.036 1.16669 179.964 2.13021 178.275Z" :stroke="color" :stroke-width="width"/>
    </svg>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Decoration extends Vue {
  @Prop({
    type: [Number, String],
    default: 230,
  })
  readonly size!: [number, string];

  @Prop({
    type: [Number, String],
    default: 2,
  })
  readonly width!: [number, string];

  @Prop({
    type: String,
    default: 'white',
  })
  readonly color!: string;
}
</script>
<style lang="scss" scoped>
.decoration {
  width: 230px;
}
</style>
