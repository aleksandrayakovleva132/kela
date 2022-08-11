<template>
  <div class="catalog">
    <div class="catalog__content">
      <Header light is-horizontal />
      <div style="background-color: orange;">
        номер стр: {{ $route.params.itemId }}<br>
        name стр: {{ $route.name }}
      </div>
      <div class="catalog__box-list">
        <ul class="catalog__list">
          <li class="catalog__list-item"
              :class="{
            'catalog__list-item--long': item.long,
            'catalog__list-item--open': item.index === activeIndex,
          }"
              v-for="item in catalogList" :key="item.index"
          >
             <div class="catalog__item-cover">
               <template v-if="mobile" >
                 <img :src="require(`./images/civil/mobile/${item.image}.jpg`)"
                      alt="item.image" height="100%"
                 />
               </template>
               <template v-else>
                 <img :src="require(`./images/civil/desktop/${item.image}.jpg`)"
                      alt="item.image" width="100%"/>
               </template>
               <p class="catalog__title" @click="showInfo(item.index)">
                 <span v-if="rus" class="catalog__label">{{ item.titleRu }}</span>
                 <span v-else class="catalog__label">
                   {{ item.titleEn }}
                 </span>
                 <button v-if="!mobile" class="catalog__open-item">
                   <img src="./images/arrow.svg"/>
                 </button>
                 <button v-else class="catalog__open-item">
                   <img class="catalog__open-arrow" src="./images/right.svg"/>
                 </button>
               </p>
             </div>
            <div v-if="activeIndex === item.index && mobile" class="catalog__item-content">
              <div>
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
            </div>
          </li>
        </ul>
        <div class="catalog__item-modal" style="border: 3px solid purple;"
             v-if="activeIndex !== null && !mobile
              && $route.name !== 'catalog'"
        >
          <button class="catalog__modal-close" @click="activeIndex = null "></button>
          <span v-for="item in catalogList" :key="item.index">
            <template v-if="activeIndex === item.index ||
                            item.index === Number($route.params.itemId)">
            <img :src="require(`./images/civil/desktop/${item.bigImage}.jpg`)"
                        width="100%"/>
             <template v-if="rus">
                <div class="catalog__modal-title"> {{ item.titleRu }} </div>
                  <div class="catalog__item-paragraph"
                       v-for="(description, index) in item.descriptionRu" :key="index">
                    {{ description }}
                  </div>
                </template>
                <template v-else>
                  <div class="catalog__modal-title"> {{ item.titleEn }} </div>
                  <div class="catalog__item-paragraph"
                       v-for="(description, index) in item.descriptionEn" :key="index">
                    {{ description }}
                  </div>
                </template>
            </template>
          </span>
        </div>
        <div class="catalog__item-mask"
             v-if="activeIndex !== null &&  !mobile && $route.name !== 'catalog'"
             @click="activeIndex = null "></div>
      </div>
    </div>
    <Footer class="catalog__footer" />
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
import DeviceLayout from '@/utils/DeviceLayout';

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
      bigImage: 'ferma-1',
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
      bigImage: 'ferma-1',
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
      bigImage: 'ferma-1',
    },
  ];

  isOpen = false;

  activeIndex = 0;

  activeIdString = 0;

  getPageId(id: string): object {
    return this.$router.push({
      name: 'catalogItem',
      params: { itemId: id },
    });
  }

  // showPageId() {
  //   return this.getPageId === this.activeIndex;
  // }

  showInfo(index: number): any {
    this.activeIndex = index;
    this.getPageId(index.toString());
  }

  private $local: any;

  private $layout: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }

  get mobile(): boolean {
    return this.$layout.current === DeviceLayout.PHONE;
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.catalog {
  padding-bottom: 120px;
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
    display: block;
    border: none;
    padding-left: 10px;
    background: transparent;
  }

  &__item-modal {
    width: 1000px;
    min-height: 668px;
    background-color: var(--White);
    box-shadow: 0px -1px 31px -23px rgba(0,0,0,0.66);
    position: absolute;
    top: 100px;
    left: calc(50% - 500px);
    z-index: 5;
    padding: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__modal-close {
    position: absolute;
    width: 40px;
    height: 40px;
    top: -8px;
    right: -46px;
    background-image: url("../../assets/images/cross.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 24px;
    border: none;
    background-color: transparent;
  }

  &__modal-title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin: 12px 0;
  }

  &__item-mask {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    position: absolute;
    z-index: 3;
  }

  &__footer {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
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
      &--open {
        box-shadow: 0px -1px 31px -23px rgba(0,0,0,0.66);
        z-index: 3;

        & .catalog__item-content {
          padding: 10px;
        }
      }
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

    display: block;
    //position: absolute;
    border: 1px solid var(--White);
    background-color: var(--LightGray);
    //width: 30px;
    //height: 30px;
    border-radius: 5px;
    bottom: 10px;
    right: 10px;

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
        background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 60%);
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
    }

    &__item-content {
      background-color: var(--White);
    }
  }

    &__title {
      font-size: 18px;
      line-height: 24px;
    }
    &__item-content {
      display: block;
      padding: 15px 0 30px 0;
    }
}
</style>
