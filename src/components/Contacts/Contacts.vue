<template>
  <div class="contacts">
    <h2 class="contacts__title" v-if="rus">Связаться с&nbsp;нами</h2>
    <h2 class="contacts__title" v-else>
      Connect with us</h2>
    <div class="contacts__block">
<!--      <div class="contacts__column contacts__column-left">-->
<!--        <form class="contacts__form">-->
<!--          <input class="contacts__input" type="text" placeholder="Имя*">-->
<!--          <input class="contacts__input" type="text" placeholder="Email*">-->
<!--          <input class="contacts__input" type="text" placeholder="Тема*">-->
<!--          <input class="contacts__input" type="text" placeholder="Отправьте сообщение">-->
<!--          <button class="contacts__button" type="submit">-->
<!--            <Link label="отправить"/>-->
<!--          </button>-->
<!--        </form>-->
<!--      </div>-->
      <div class="contacts__column contacts__column-right">
        <ul class="contacts__list">
          <li class="contacts__item">
            <div class="contacts__icon">
              <img src="./images/location.svg">
            </div>
              <span v-if="rus">
              Санкт-Петербург, ул. Сестрорецкая,
              дом 5, литер А, помещение 11-Н, офис 5
              </span>
            <span v-else>
              St. Petersburg, st. Sestroretskaya,
              building 5, letter A, room 11-N, office 5</span>
          </li>
          <li class="contacts__item">
            <div class="contacts__icon">
              <img src="./images/send.svg">
            </div>
            <span>team@kela.pro</span>
          </li>
          <li class="contacts__item">
            <div class="contacts__icon">
              <img src="./images/mobile.svg">
            </div>
            <div>
              <a href="tel:+79516611609">+7 9516611609</a><br>
              <a href="tel:+79516611679">+7 9516611679</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import Link from '@/components/Link/Link.vue';
import Local from '@/store/enums/Local';

@Component({
  components: { Link },
})
export default class Contacts extends Vue {
  private $local: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.contacts {
  width: 100%;
  background-image: url("./images/polygon.svg");
  background-repeat: no-repeat;
  background-position: left 120%;
  &__container {
    margin: 0 auto;
    width: 82%;
  }
  &__title {
    margin: 50px 0 50px 150px;
    font-size: 48px;
    line-height: 55px;
    text-align: center;
    font-weight: 300;
  }

  &__list {
    font-size: 18px;
    line-height: 30px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__icon {
    margin-right: 20px;
  }

  &__item {
    margin-bottom: 40px;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__block {
    display: flex;
    padding-bottom: 140px;
    justify-content: center;
  }

  &__column {
    width: 50%;

    &-left {
      padding: 0 5% 0 10%;
    }

    &-right {
      padding: 0 10% 0 5%;
    }
  }

  &__form {
    width: 100%;
  }

  &__input {
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid var(--Black);
    margin-bottom: 40px;
    outline: none;

    &:last-child {
      margin-bottom: 0;
    }

    &::placeholder {
      color: var(--Black);
      opacity: 0.5;
      font-size: 14px;
      line-height: 16px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
    }

    &:focus {
      border-color: var(--Orange);

      &::placeholder {
        color: var(--Orange);
        opacity: 1;
      }
    }
  }
  &__button {
    border: none;
    background: transparent;
    margin-top: 30px;
    color: var(--Black);
    fill: var(--Black);
    font-weight: 300;
  }

  @include for-phone-only {
    background-image: none;
    &__title {
      margin: 80px 20px 30px;
      font-size: 38px;
      line-height: 44px;
    }
    &__block {
      flex-direction: column;
    }
    &__column {
      width: 100%;
      padding: 0 15px;
      margin: 0;

      &-left {
        margin-bottom: 60px;
      }
    }
  }
}
</style>
