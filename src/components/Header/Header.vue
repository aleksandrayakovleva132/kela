<template>
  <div class="header">
    <router-link to="/">
    <div class="header__logo">
      <img v-if="light" src="./images/kela-2.svg" width="98" alt="kela">
      <img v-else src="./images/kela.svg" width="98" alt="kela">
    </div>
    </router-link>
    <div class="header__right-column" v-if="homeMenu && this.$layout.current === 'desktop'">
      <span style="padding: 20px;
      background-color: blue;
      color: white;
      position: absolute;
      top: 100px; right: 300px;">
        {{ isRus }}
      </span>
      <button @click="toggleLang">
        {{ isRus }}
      </button>
      <ul class="header__menu">
        <li class="header__menu-item">
          <label for="eng"
                 :class="{'header__menu-lang--active' : this.$language.current === 'eng' }">
            EN
            <input type="radio" id="eng" name="lang" :checked="isRus">
          </label>
          |
          <label for="rus"
                 :class="{'header__menu-lang--active' : this.$language.current === 'rus' }"
          >
            RU
            <input type="radio" id="rus" name="lang"
                   @click="this.$language.set(LanguageStatus.RUS)">
          </label>
        </li>
        <li class="header__menu-item">Проекты</li>
        <li class="header__menu-item">BIM</li>
        <li class="header__menu-item header__menu-item--contact">Контакты</li>
      </ul>
    </div>
    <div class="header__menu" v-if="!homeMenu && this.$layout.current === 'desktop'">
      <img  v-if="light" src="./images/menu-2.svg" width="39" alt="menu"/>
      <img v-else src="./images/menu.svg" width="39"  alt="menu"/>
    </div>
    <div class="header__menu-mobile" v-if="homeMenu && this.$layout.current === 'phone'">
      <div><img src="./images/menu-mobile.svg" width="30"  alt="menu"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
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

  @Prop({
    type: Boolean,
  })
  readonly isRus!: boolean;

  toggleLang() {
    return this.isRus === !this.isRus;
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
    padding: 40px 15px;
    &__logo {
      width: 98px;
    }
  }
}
</style>
