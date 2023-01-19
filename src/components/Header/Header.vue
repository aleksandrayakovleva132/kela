<template>
  <div class="header">
    <router-link to="/">
    <div class="header__logo">
      <img src="./images/kela.svg" width="98" alt="kela"> </div>
    </router-link>
<!--    v-if="homeMenu && this.$layout.current === 'desktop'-->
    <div class="header__right-column" v-if="this.$layout.current === 'desktop'">
<!--      <Menu :is-horizontal="isHorizontal" :is-light="light" />-->
      <Menu :is-horizontal="horizontalMenu"
            :is-inside="insideMenu"
            :is-light="lightMenu"
      />
    </div>
    <div v-else class="header__menu" @click="openMenu">
      <img  v-if="lightMenu" src="./images/menu-2.svg" width="39" alt="menu"/>
      <img v-else src="./images/menu.svg" width="39"  alt="menu"/>
    </div>
      <div  v-if="this.$menu.current === 'is-open' && this.$layout.current === 'phone'"
            class="header__mobile-menu">
        <Menu is-mobile :is-inside="insideMenu"/>
      </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Menu from '@/components/Header/Menu.vue';
import Language from '@/components/Header/Language.vue';
import MenuStatus from '@/store/enums/MenuStatus';

@Component({
  components: { Language, Menu },
})
export default class Header extends Vue {
  @Prop({
    type: Boolean,
  })
  readonly lightMenu!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly lightLogo!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly insideMenu!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly isRus!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly horizontalMenu!: boolean;

  toggleLang() {
    return this.isRus === !this.isRus;
  }

  private $menu: any;

  private $layout: any;

  private $colorLogo: any;

  openMenu(): void {
    this.$menu.set(this.$menu.current === MenuStatus.IS_HIDDEN
      ? MenuStatus.IS_OPEN : MenuStatus.IS_HIDDEN);
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/mixins.scss";
.header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 40px 0;

  &__right-column {
    position: relative;
  }

  &__menu {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    text-align: right;
    color: var(--White);

    &-lang--active {
      color: var(--Orange);
    }

    &-item {
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
  }

  @include for-phone-only {
    align-items: center;
    padding: 40px 0;
    &__logo {
      width: 98px;
    }

    &__mobile-menu {
      width: 80%;
      height: 100vh;
      background-color: var(--LightGray);
      position: absolute;
      top: 0;
      right: -25px;
      z-index: 100;
      box-shadow: -5px 6px 17px 0px rgba(34, 60, 80, 0.1);
      padding: 30px;
    }
  }
}
</style>
