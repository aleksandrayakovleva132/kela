<template>
  <div class="catalog">
    <div class="catalog__content">
      <Header light-menu horizontal-menu inside-menu />
      <div class="catalog__box-list">
        <ul class="catalog__list">
          <li class="catalog__list-item"
              :class="{
              'catalog__list-item--long': longItems.find((number) => number === listIndex + 1),
          }"
              v-for="(item, listIndex) in list" :key="item.index"
              :id=" listIndex + 1"
              ref="itemActive"
              @click="showInfo(item.index)"
          >
             <div class="catalog__item-cover" >
               <template v-if="mobile" >
                 <img :src="require(`./images/projects/${item.keyWorld}-m-cover.jpg`)"
                      :alt="item.keyWorld"
                 />
               </template>
               <template v-else>
                 <div class="catalog__item-d-image">
                   <img :src="require(`./images/projects/${item.keyWorld}-d-cover.jpg`)"
                        :alt="item.keyWorld" width="100%"/>
                 </div>
               </template>
               <p class="catalog__title">
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
            <div v-if="activeIndex === item.index && mobile ||
                        item.index === Number($route.params.itemId)
                        && mobile && activeIndex !== null"
                 class="catalog__item-content">
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
                    <img :src="require(`./images/projects/${img}.jpg`)" height="100%"/>
                  </div>
                </div>
<!--                <button class="catalog__show-more"-->
<!--                        @click="hiddenInfo(item.index)"> Cвернуть </button>-->
              </div>
            </div>
          </li>
        </ul>
<!--        Desktop version-->
        <div class="catalog__item-modal"
             v-if="activeIndex !== null && !mobile
              && $route.name !== pageName"
             :style="{top: itemPosition}"
        >
          <button class="catalog__modal-close"
                  @click="modalClose"></button>
          <span v-for="item in  list" :key="item.index">
            <template v-if="activeIndex === item.index ||
                            item.index === Number($route.params.itemId)">
            <img
              :src="require(`./images/projects/${item.keyWorld}-d-01.jpg`)"
                        width="100%" :alt="item.keyWorld"/>
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
             v-if="activeIndex !== null &&  !mobile && $route.name !== pageName"
             @click="modalClose"></div>
      </div>
    </div>
    <Footer class="catalog__footer" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/Header.vue';
import { catalogTypes } from '@/components/Catalog/types';
import Link from '@/components/Link/Link.vue';
import Footer from '@/components/Footer/Footer.vue';
import Local from '@/store/enums/Local';
import DeviceLayout from '@/utils/DeviceLayout';
import ItemOpen from '@/store/enums/ItemOpen';

@Component({
  components: { Footer, Link, Header },
})

export default class Catalog extends Vue {
  @Prop({
    type: Array,
  })
  readonly list: catalogTypes[] | undefined;

  @Prop({
    type: String,
  })
  readonly pageName!: string;

  isOpen = false;

  activeIndex: number | null = 0;

  activeIdString = 0;

  pathName = `${this.pageName}Item`;

  getPageId(id: string): object {
    return this.$router.push({
      name: this.pathName,
      params: { itemId: id },
      hash: `#${id}`,
    });
  }

  private $openItem: any;

  // get openStatus(): boolean {
  //   return this.$openItem.current === ItemOpen.IS_OPEN;
  // }

  showInfo(index: number): void {
    this.activeIndex = index;
    this.getPageId(index.toString());
    if (!this.mobile) {
      this.$openItem.set(this.$openItem.current === ItemOpen.IS_HIDDEN
        ? ItemOpen.IS_OPEN : ItemOpen.IS_HIDDEN);
    }
  }

  scrollPosition = document.documentElement.scrollTop;

  hiddenInfo(index: number | string): void {
    this.activeIndex = null;
    this.getPageId(index.toString());
    this.$router.push({
      params: { itemId: index.toString() },
    });
  }

  private $local: any;

  private $layout: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }

  get mobile(): boolean {
    return this.$layout.current === DeviceLayout.PHONE;
  }

  windowTop = 0;

  modalClose(): void {
    this.activeIndex = null;
    this.$openItem.set(this.$openItem.current === ItemOpen.IS_OPEN
      ? ItemOpen.IS_HIDDEN : ItemOpen.IS_OPEN);
  }

  onScroll(e: any) {
    if (!this.mobile) {
      this.windowTop = e.target.documentElement.scrollTop + 50;
    }
  }

  mounted() {
    window.addEventListener('scroll', this.onScroll);
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }

  get shortList() {
    return this.list ? (this.list?.length < 4) : 0;
  }

  get itemPosition(): string {
    if (!this.mobile && this.shortList) {
      return '50px';
    }
    if (!this.mobile) {
      return `${this.windowTop}px`;
    }
    return '';
  }

  // eslint-disable-next-line max-len
  longItems = [1, 6, 7, 12, 13, 18, 19, 24, 25, 30, 31, 36, 37, 42, 43, 48, 49, 54, 55, 60, 61, 66, 67, 72, 73, 78, 79, 84, 85, 90, 91, 96, 101, 102, 107, 108, 113, 114, 119, 120, 125, 126, 131, 132, 137, 138, 143, 144];
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.catalog {
  padding-bottom: 140px;
  min-height: 100vh;
  &__content {
    width: calc(100% - 32px);
    margin: 0 16px;

    @include for-desktop-up {
      margin-left: 6%;
      margin-right: 6%;
      max-width: 88%;
    }
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

    @include for-tablet-desktop {
      font-size: 14px;
      line-height: 18px;
    }
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
    width: 100%;
    gap: 20px;
  }

  &__list-item {
    padding: 0;
    margin: 0;
    color: var(--Black);
    position: relative;
    width: calc(30% - 15px);
    overflow: hidden;
    cursor: pointer;

    &--long {
      width: calc(40% - 15px);
    }

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 160px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 100%);
    }
  }

  &__item-cover {
    padding-bottom: 80%;
  }

  &__item-d-image {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
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
    width: calc(100% - 32px);
    min-height: 668px;
    background-color: var(--White);
    box-shadow: 0px -1px 31px -23px rgba(0,0,0,0.66);
    position: absolute;
    left: 16px;
    z-index: 5;
    padding: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include for-desktop-up {
      left: calc(50% - 500px);
      width: 1000px;
    }
  }

  &__modal-close {
    position: absolute;
    width: 40px;
    height: 40px;
    top: -40px;
    right: 0;
    background-image: url("../../assets/images/cross.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 24px;
    border: none;
    background-color: transparent;

    @include for-desktop-up {
      top: -8px;
      right: -46px;
    }
  }

  &__modal-title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin: 12px 0;
  }

  &__item-mask {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    padding-bottom: 150px;
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
      overflow: hidden;

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
    }
  }

    &__title {
      font-size: 18px;
      line-height: 24px;
    }
    &__item-content {
      display: block;
      padding: 15px 10px 10px 10px;
      background-color: var(--White);
    }

  &__test-image {
    filter: invert(82%) sepia(34%) saturate(6722%) hue-rotate(69deg) brightness(97%) contrast(110%);
  }
}
</style>
