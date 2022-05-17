<template>
  <div class="header">
    <router-link to="/">
    <div class="header__logo">
      <img v-if="light" src="./images/kela-2.svg" width="98" alt="kela">
      <img v-else src="./images/kela.svg" width="98" alt="kela">
    </div>
    </router-link>
    <div class="header__right-column" v-if="homeMenu">
      <ul class="header__menu">
        <li class="header__menu-item">EN | RUS</li>
        <li class="header__menu-item">Проекты</li>
        <li class="header__menu-item">BIM</li>
        <li class="header__menu-item header__menu-item--contact">Контакты</li>
      </ul>
    </div>
    <div class="header__menu" v-else>
      <img  v-if="light" src="./images/menu-2.svg" width="39" alt="menu"/>
      <img v-else src="./images/menu.svg" width="39"  alt="menu"/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {
  @Prop({
    type: Boolean,
  })
  readonly light!: boolean;

  @Prop({
    type: Boolean,
  })
  readonly homeMenu!: boolean;
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 42px 0;

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
}
</style>
