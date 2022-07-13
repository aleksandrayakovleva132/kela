<template>
  <div class="switch language">
    <label>
      <span class="language__label" :class="{'language__label--active': !isRuLocale}">English</span>
      <input type="checkbox" v-model="isRuLocale"
             @click="changeLang">
      <span class="lever"></span>
      <span class="language__label" :class="{'language__label--active': isRuLocale}">Русский</span>
    </label>
    <br>
    <div>{{ this.$local.current}}</div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Local from '@/store/enums/Local';

@Component({})
export default class Language extends Vue {
 @Prop({
   type: Boolean,
   default: true,
 })
  readonly isRuLocale!: boolean;

 private $local: any;

 get localStatus(): boolean {
   return this.$local.current === Local.RU;
 }

 changeLang(): void {
   console.log(this.$local);
   this.$local.set(this.$local.current === Local.RU ? Local.ENG : Local.RU);
 }
}
</script>
<style lang="scss">
.language {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 100%;
  background-color: gray;

  &__label {
    font-size: 16px;
    color: var(--White);
    font-weight: 500;

    &--active {
      color: var(--Orange);
    }
  }
}
</style>
