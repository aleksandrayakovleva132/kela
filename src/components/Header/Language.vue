<template>
  <div class="switch language" :class="{
    'language--mobile': isMobile,
    'language--light': isLight,
  }">
    <label>
      <div class="language__box">
        <span class="language__label"
              :class="{'language__label--active': this.$local.current === 'ru'}">RU</span>
        <div class="language__divider">|</div>
        <input type="checkbox" v-model="isRuLocale"
               class="language__checkbox"
               @click="changeLang">
        <span class="lever"></span>
        <span class="language__label"
              :class="{'language__label--active':  this.$local.current === 'en'}">EN</span>
      </div>
    </label>
    <br>
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

  @Prop({
    type: Boolean,
  })
 readonly isMobile!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly isLight!: boolean;

  private $local: any;

  get localStatus(): boolean {
    return this.$local.current === Local.RU;
  }

  changeLang(): void {
    console.log(this.$local.current);
    this.$local.set(this.$local.current === Local.RU ? Local.ENG : Local.RU);
  }
}
</script>
<style lang="scss">
.language {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__label {
    font-size: 14px;
    color: var(--White);
    font-weight: 300;

    &--active {
      color: var(--Orange);
    }
  }

  &__divider {
    padding: 0 12px;
    color: var(--White);
  }

  &__checkbox {
   display: none;
  }

  &__box {
    display: flex;
  }

  &--mobile {
    text-align: center;
    font-size: 18px;
  }

  &--mobile {
    justify-content: center;
    & .language__label {
      color: var(--Black);
      font-size: 16px;

      &--active {
        color: var(--Orange);
      }
    }
    & .language__divider {
      color: var(--Black);
    }
  }
  &--light {
    & .language__label {
      color: var(--Black);

      &--active {
        color: var(--Orange);
      }
    }

    & .language__divider {
      color: var(--Black);
    }
  }
}
</style>
