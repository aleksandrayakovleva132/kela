<template>
  <div class="advantages">
    <div class="advantages__container">
      <h2 class="advantages__title">Наши преимущества</h2>
      <ul class="advantages__list">
        <li class="advantages__item" v-for="item in array" :key="item.index">
          <div class="advantages__item-inside">
            <div class="advantages__item-content">
              <div class="advantages__image">
                <img :src="require(`./images/${item.image}.svg`)" width="100%">
              </div>
              <div class="advantages__content">
                <h3 class="advantages__content-title">{{ item.title }}</h3>
                <p class="advantages__content-text">
                  {{ item.text }}
                </p>
              </div>
            </div>
            <span class="advantages__background-image">
                <img src="./images/rect.svg" width="100%">
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { AdvantagesArray } from '@/components/Advantages/types';

@Component({})
export default class Advantages extends Vue {
  @Prop({
    type: Array,
  })
  readonly array!: AdvantagesArray[];
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.advantages {
  padding: 120px 0 0 0;
  margin: 0 auto;
  width: 82%;
  &__title {
    margin: 0 0 50px 0;
    font-size: 48px;
    line-height: 55px;
    text-align: center;
    font-weight: 300;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  &__item {
    width: 48.5%;
    border: 1px solid var(--Black);

    &:nth-child(1),
    &:nth-child(2){
      margin-bottom: 50px;
    }
  }
  &__item-inside {
    width: 100%;
    padding-bottom: 48%;
    position: relative;
    background-repeat: no-repeat;
    background-position: bottom left;
  }
   &__item-content {
     position: absolute;
     top: 14%;
     left: 7%;
     bottom: 10%;
     right: 7%;
     display: flex;
   }
   &__background-image {
     display: flex;
     position: absolute;
     bottom: 0;
     left: 0;
     width: 65px;
   }
   &__content-title {
     font-size: 16px;
     line-height: 20px;
     margin: 0 0 20px 0;
   }
   &__content-text {
     font-size: 14px;
     line-height: 20px;
     font-weight: 300;
   }
   &__image {
     width: 25%;
     margin-right: 8%;
   }
   &__content {
     width: 67%;
   }

  @include for-phone-only {
    width: 100%;
    padding: 50px 15px 0 15px;

    &__background-image {
      display: none;
    }

    &__title {
      font-size: 38px;
      line-height: 44px;
      margin-bottom: 30px;
    }

    &__list {
      flex-direction: column;
    }

    &__item:nth-child(1) {
      margin-bottom: 20px;
    }

    &__content {
      width: 100%;
      padding: 0 15px 15px 20px;

      &-text {
        margin: 0;
      }
    }

    &__item {
      width: 100%;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      &-content {
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        flex-direction: column;
      }

      &-inside {
        padding: 40px 15px 20px 15px;
      }
    }

    &__image {
      width: 128px;
      margin: 0 auto 40px;
    }
  }
}
</style>

1440 / 1200
