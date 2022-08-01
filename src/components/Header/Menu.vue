<template>
  <div class="menu" >
    <div v-if="isMobile" class="menu__close"  @click="closeMenu">
      <img src="../../assets/images/cross.svg" alt="" width="22">
    </div>
    <Language class="menu__lang" :is-mobile="isMobile" />
    <ul class="menu__list" :class="{'menu__list--mobile': isMobile}">
      <li class="menu__item" v-for="(item, index) in menuList" :key="index" @click="closeMenu">
        <router-link v-if="rus" :to="item.link">
          {{ item.rus }}
        </router-link>
        <router-link v-else :to="item.link">
          {{ item.eng }}
        </router-link>
      </li>
<!--      <li class="menu__item">-->
<!--        BIM-->
<!--      </li>-->
<!--      <li class="menu__item menu__item&#45;&#45;contact">-->
<!--        Контакты-->
<!--      </li>-->
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

  closeMenu(): void {
    this.$menu.set(this.$menu.current === MenuStatus.IS_OPEN
      ? MenuStatus.IS_HIDDEN : MenuStatus.IS_OPEN);
  }

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }

  menuList: menuTypes[] = [
    {
      eng: 'Industrial engineering',
      rus: 'Промышленное строительство',
      link: '/catalog',
    },
    {
      eng: 'Civil engineering',
      rus: 'Гражданское строительство',
      link: '/catalog',
    },
    {
      eng: 'BIM',
      rus: 'BIM',
      link: '/catalog',
    },
    {
      eng: 'Contacts',
      rus: 'Контакты',
      link: '/#contact',
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
}
</style>
