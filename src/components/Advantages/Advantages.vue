<template>
  <div class="advantages">
    <div class="advantages__container">
      <h2 class="advantages__title" v-if="rus">Наши преимущества</h2>
      <h2 class="advantages__title" v-else>Our advantages</h2>
      <ul class="advantages__list">
        <li class="advantages__item" v-for="item in array" :key="item.index">
          <div class="advantages__item-inside">
            <div class="advantages__item-content">
              <div class="advantages__image">
                <img :src="require(`./images/${item.image}.svg`)" width="100%">
              </div>
              <div class="advantages__content">
                <h3 class="advantages__content-title" v-if="rus">{{ item.title }}</h3>
                <h3 class="advantages__content-title" v-else>{{ item.titleEng }}</h3>
                <p class="advantages__content-text">
                   <template v-if="rus">
                     {{ item.text }}
                   </template>
                  <template v-else>
                    {{ item.textEng }}
                  </template>
                </p>
              </div>
            </div>
            <span class="advantages__background-image">
                <img src="./images/rect.svg" width="100%">
            </span>
            <div class="advantages__decoration advantages__decoration--mobile">
              <svg width="67" height="74" viewBox="0 0 67 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00001 0V43.2701C1.00001 45.4222 2.15257 47.4094 4.02053
                48.4781L45.6519 72.2954C47.4979 73.3515 49.7649 73.3515 51.6109
                72.2954L66.1108 64" stroke="black"/>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { AdvantagesArray } from '@/components/Advantages/types';
import Decoration from '@/components/Decoration/Decoration.vue';
import Local from '@/store/enums/Local';

@Component({
  components: { Decoration },
})
export default class Advantages extends Vue {
  @Prop({
    type: Array,
  })
  readonly array!: AdvantagesArray[];

  private $local: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.advantages {
  padding: 120px 0;
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
    row-gap: 50px;
  }
  &__item {
    width: 48.5%;
    border: 1px solid var(--Black);
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

  &__decoration--mobile {
    display: none;
  }

  @include for-phone-and-tablet {
    width: 100%;
    padding: 50px 15px;

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
      row-gap: 20px;
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
      max-width: 420px;
      overflow: hidden;

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

    &__decoration {
      &--mobile {
        display: block;
      }
      position: absolute;
      top: 0;
      right: 0;
      width: 65.11px;
    }

    &__item:nth-child(odd) .advantages__decoration{
      left: 0;
      transform: scaleX(-1);
    }
  }
}
</style>
