<template>
  <div class="menu" :class="{
    'menu--horizontal': isHorizontal,
    'menu--mobile': isMobile
  }" >
    <div v-if="isMobile" class="menu__close"  @click="closeMenu">
      <img src="../../assets/images/cross.svg" alt="" width="22">
    </div>
    <Language class="menu__lang" :is-mobile="isMobile" :is-light="isLight"/>
    <ul v-if="this.$layout.current === 'mobile'"
        class="menu__list" :class="{'menu__list--mobile': isMobile}">
      <li class="menu__item" v-for="(item, index) in menuListMobile"
          :key="index" @click="closeMenu">
        <router-link v-if="rus" :to="item.link">
          {{ item.rus }}
        </router-link>
        <router-link v-else :to="item.link">
          {{ item.eng }}
        </router-link>
      </li>
    </ul>
    <ul v-else
        class="menu__list">
      <li class="menu__item" v-for="(item, index) in menuListDesktop"
          :key="index" @click="closeMenu">
        <router-link v-if="rus" :to="item.link">
          {{ item.rus }}
        </router-link>
        <router-link v-else :to="item.link">
          {{ item.eng }}
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

  private $menu: any;

  private $local: any;

  closeMenu(): void {
    this.$menu.set(this.$menu.current === MenuStatus.IS_OPEN
      ? MenuStatus.IS_HIDDEN : MenuStatus.IS_OPEN);
  }

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }

  menuListMobile: menuTypes[] = [
    {
      eng: 'Industrial engineering',
      rus: 'Промышленное строительство',
      link: { path: '/catalog' },
    },
    {
      eng: 'Civil engineering',
      rus: 'Гражданское строительство',
      link: { path: '/catalog' },
    },
    {
      eng: 'BIM',
      rus: 'BIM',
      link: { path: '/catalog' },
    },
    {
      eng: 'Contacts',
      rus: 'Контакты',
      link: { path: '/', hash: '#contact' },
    },
  ];

  menuListDesktop: menuTypes[] = [
    {
      eng: 'Projects',
      rus: 'Проекты',
      link: { path: '/', hash: '#projects' },
    },
    {
      eng: 'BIM',
      rus: 'BIM',
      link: { path: '/', hash: '#bim' },
    },
    {
      eng: 'Contacts',
      rus: 'Контакты',
      link: { path: '/', hash: '#contactы' },
    },
  ];
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
    }
  }

  &--horizontal {
    display: flex;
    align-items: center;

    & .menu__list {
      display: flex;
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
