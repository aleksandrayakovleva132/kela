<template>
  <div class="catalog">
    <div class="catalog__content">
      <Header light is-horizontal />
      <div class="catalog__box-list">
        <ul class="catalog__list">
          <li class="catalog__list-item"
              :class="{'catalog__list-item--long': item.long }"
              v-for="item in catalogList" :key="item.index">
             <div class="catalog__item-cover">
            <img :src="require(`./images/civil/mobile/${item.image}.jpg`)"
                 alt="item.image" height="100%"/>
               <p class="catalog__title" @click="showInfo(item.index)">
                 <span v-if="rus" class="catalog__label">{{ item.titleRu }}</span>
                 <span v-else class="catalog__label">{{ item.titleEn }}</span>
                 <button class="catalog__open-item">
                   <img class="catalog__open-arrow" src="./images/right.svg"/>
                 </button>
               </p>
             </div>
            <div v-if="activeIndex === item.index" class="catalog__item-content">
              <template v-if="rus">
                <div class="catalog__item-paragraph"
                     v-for="(description, index) in item.descriptionRu" :key="index">
                  {{ description }}
                </div>
              </template>
              <template v-else>
                <div class="catalog__item-paragraph"
                     v-for="(description, index) in item.descriptionEn" :key="index">
                  {{ description }}
                </div>
              </template>
               <div>
                 <div class="catalog__item-img" v-for="(img, index) in item.images" :key="index">
                   <img :src="require(`./images/civil/mobile/${img}.jpg`)" width="100%"/>
                 </div>
               </div>
              <button class="catalog__show-more" @click="activeIndex = 0"> Cвернуть </button>
            </div>
          </li>
        </ul>
<!--        <div class="catalog__bottom">-->
<!--          <span class="catalog__progress-label"> 9 из 25</span>-->
<!--          <div class="catalog__progress">-->
<!--          </div>-->
<!--          <button class="catalog__show-more">Показать еще  <Link /> </button>-->
<!--        </div>-->
      </div>
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import Header from '@/components/Header/Header.vue';
import { catalogTypes } from '@/components/Catalog/types';
import Link from '@/components/Link/Link.vue';
import Footer from '@/components/Footer/Footer.vue';
import Local from '@/store/enums/Local';

@Component({
  components: { Footer, Link, Header },
})

export default class Catalog extends Vue {
  catalogList: catalogTypes[] = [
    {
      index: 1,
      image: 'ferma',
      titleRu: 'Сельскохозяйственный рынок',
      titleEn: 'Greenmarket',
      descriptionRu: ['Сельскохозяйственный рынок. Разработка раздела КЖ. Санкт-Петербург, 2011.'],
      descriptionEn: ['Greenmarket. Saint Petersburg, 2011.'],
      date: '20.03.19',
      long: true,
      open: true,
      images: ['ferma-1', 'ferma-2', 'ferma-3', 'ferma-4'],
    },
    {
      index: 2,
      image: 'parking',
      titleRu: 'Многоэтажный паркинг',
      titleEn: 'Multi-storey car park',
      descriptionRu: ['Многоэтажный паркинг. Разработка раздела КЖ. Санкт-Петербург, 2011.'],
      descriptionEn: ['Multi-storey car park. Saint Petersburg, 2011.'],
      images: ['parking-1', 'parking-2', 'parking-3'],
      long: false,
      open: false,
    },
    {
      index: 3,
      image: 'lesnaya',
      titleRu: 'Жилой комплекс "Life Лесная"',
      titleEn: 'Residential complex “Life Lesnaya”',
      descriptionRu: ['Жилой комплекс "Life Лесная". Разработка раздела КЖ. Санкт-Петербург, 2017.'],
      descriptionEn: ['Residential complex “Life Lesnaya”. St. Petersburg, 2017.'],
      images: ['lesnaya-1'],
      long: false,
      open: false,
    },
  ];

  // @Prop({
  //   type: Boolean,
  // })
  // private isOpen?: boolean;

  isOpen = false;

  activeIndex = null;

  showInfo(index: null): any {
    this.activeIndex = index;
  }

  private $local: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.catalog {
  &__content {
    margin-left: 6%;
    margin-right: 6%;
    max-width: 88%;
  }

  &__title {
    margin: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 38px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 17px;
    display: flex;
    color: white;
    align-items: center;
    z-index: 3;
  }

  &__date {
    color: var(--Black);
    font-size: 12px;
  }

  &__list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  &__list-item {
    padding: 0;
    margin: 0 0 40px 0;
    color: var(--Black);
    position: relative;
    width: calc(30% - 40px);
    overflow: hidden;

    &--long {
      width: 40%;
    }

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 160px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    }
  }

  &__box-list {
    display: flex;
    flex-wrap: wrap;
  }

  &__arrow {
    fill: white;
  }
  &__show-more {
    width: 100%;
    height: 38px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-weight: 300;
    font-size: 15px;
    text-transform: uppercase;
    margin: 0 auto;
    border: 1px solid var(--Orange);
  }

  &__bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__progress {
    background-color: var(--Black);
    height: 1px;
    width: 174px;
    margin-bottom: 20px;
    position: relative;

    &::after {
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      left: 0;
      top: 0;
      width: 30%;
      background-color: var(--Orange);
    }
  }

  &__progress-label {
    text-align: center;
    display: block;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 7px;
  }

  &__open-item {
    display: none;
  }

  &__item-content {
    display: none;
  }

  @include for-phone-only {
    &__list {
      flex-wrap: wrap;
    }

    &__list-item {
      width: 100%;
      &:after {
        display: none;
      }
    }

    &__title {
      font-size: 18px;
      line-height: 24px;
    }
    &__open-item {
      display: block;
      position: absolute;
      border: 1px solid var(--White);
      background: transparent;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      bottom: 10px;
      right: 10px;
    }

    &__item-content {
      display: block;
      padding: 15px 0 30px 0;
    }

    &__item-cover {
      height: 240px;
      position: relative;
      box-shadow: 0px -1px 31px -23px rgba(0,0,0,0.66);
      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 160px;
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      }
    }

    &__label {
      width: 80%;
    }

    &__item-paragraph {
      line-height: 22px;
      margin-bottom: 24px;
    }

    &__item-img {
      margin-bottom: 20px;
      box-shadow: 0px -1px 31px -23px rgba(0,0,0,0.66);
    }
  }
}
</style>
