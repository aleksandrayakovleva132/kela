<template>
  <div class="menu" >
    <div v-if="isMobile" class="menu__close"  @click="closeMenu">
      <img src="../../assets/images/cross.svg" alt="" width="30">
    </div>
    <Language class="menu__lang" :is-mobile="isMobile" />
    <ul class="menu__list" :class="{'menu__list--mobile': isMobile}">
      <li class="menu__item">Проекты</li>
      <li class="menu__item">BIM</li>
      <li class="menu__item menu__item--contact">Контакты</li>
    </ul>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import Language from '@/components/Header/Language.vue';
import MenuStatus from '@/store/enums/MenuStatus';

@Component({
  components: { Language },
})
export default class Menu extends Vue {
  @Prop({
    type: Boolean,
  })
  readonly isMobile!: boolean;

  closeMenu(): void {
    this.$menu.set(this.$menu.current === MenuStatus.IS_OPEN
      ? MenuStatus.IS_HIDDEN : MenuStatus.IS_OPEN);
  }
}
</script>
<style lang="scss" scoped>
.menu {
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    text-align: right;
    color: var(--Black);
    position: relative;
  }

  &__close {
    position: absolute;
    width: 45px;
    height: 45px;
    //background-color: #ffdc6e;
    top: 0;
    left: -45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    margin-bottom: 42px;

    &--contact  {
      color: var(--Orange);
      padding-right: 32px;
      position: relative;

      &::before {
        content: '';
        display: block;
        width: 22px;
        height: 1px;
        position: absolute;
        right: 0;
        top: 8px;
        background-color: var(--Orange);
      }
    }
  }
  &__lang {
    padding: 0;
    margin-bottom: 40px;
  }

  &__list--mobile {
    text-align: center;
    font-size: 16px;

    & .menu__item--contact {
      color: var(--Black);
      padding-right: 0;
      &::before {
        display: none;
      }
    }
  }
}
</style>
