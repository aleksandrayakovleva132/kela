<template>
  <div class="menu" :class="{
    'menu--horizontal': isHorizontal,
    'menu--mobile': isMobile
  }" >
    <div v-if="isMobile" class="menu__close"  @click="closeMenu">
      <img src="../../assets/images/cross.svg" alt="" width="22">
    </div>
    <Language class="menu__lang" :is-mobile="isMobile" :is-light="isLight"/>
    <ul class="menu__list" :class="{'menu__list--mobile': isMobile}">
      <li class="menu__item" v-for="(item, index) in list"
          :key="index" @click="closeMenu">
        <router-link :to="item.link">
          <span  v-if="rus">{{ item.rus }}</span>
          <span v-else>{{ item.eng }}</span>
        </router-link>
      </li>
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
import { menuTypes } from '@/components/Header/types';
import Local from '@/store/enums/Local';

// eslint-disable-next-line import/extensions
import menu from '@/data/menu.ts';

@Component({
  components: { Language },
})
export default class Menu extends Vue {
  @Prop({
    type: Boolean,
  })
  readonly isMobile!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly isHorizontal!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly isLight!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly isInside!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly isActive!: boolean;

  private $menu: any;

  private $local: any;

  closeMenu(): void {
    this.$menu.set(this.$menu.current === MenuStatus.IS_OPEN
      ? MenuStatus.IS_HIDDEN : MenuStatus.IS_OPEN);
  }

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }

  mainMenu: menuTypes[] = menu.main;

  insideMenu: menuTypes[] = menu.inside;

  get list(): menuTypes[] {
    if (this.isInside) {
      return this.insideMenu;
    }
    return this.mainMenu;
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
    color: var(--White);
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
    margin-bottom: 36px;
    line-height: 24px;

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

    &--active {
      color: var(--Orange);
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

  &--mobile {
    & .menu__list {
      text-align: center;
      font-size: 16px;
      color: var(--Black);
    }
  }

  &--horizontal {
    display: flex;
    align-items: center;

    & .menu__list {
      display: flex;
      color: var(--Black);
    }
    & .menu__item {
      margin-bottom: 0;
      margin-left: 30px;
      line-height: 20px;
    }

    & .menu__lang {
      margin-bottom: 0;
    }
  }
}
</style>
