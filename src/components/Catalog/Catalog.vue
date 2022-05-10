<template>
  <div class="catalog">
    <div class="catalog__content">
      <Header light />
      <div class="catalog__box-list">
        <ul class="catalog__list">
          <li class="catalog__list-item"
              :class="{'catalog__list-item--long': item.long }"
              v-for="item in catalogList" :key="item.index">
            <router-link to="/project-item">
             <div>
               <img :src="require(`./images/${item.image}.png`)" width="100%" alt="item.image"/>
             </div>
            <p class="catalog__title">Котедж на крутом склоне</p>
            <span class="catalog__date">20.03.19</span>
          </router-link>
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
import Header from '@/components/Header/Header.vue';
import { catalogTypes } from '@/components/Catalog/types';

@Component({
  components: { Header },
})

export default class Catalog extends Vue {
  catalogList: catalogTypes[] = [
    {
      index: 1,
      image: 'pic-1',
      title: 'Котедж на крутом склоне',
      date: '20.03.19',
      long: true,
    },
    {
      index: 2,
      image: 'pic-2',
      title: 'Котедж на крутом склоне',
      date: '20.03.19',
      long: false,
    },
    {
      index: 3,
      image: 'pic-2',
      title: 'Котедж на крутом склоне',
      date: '20.03.19',
      long: false,
    },
    {
      index: 4,
      image: 'pic-1',
      title: 'Котедж на крутом склоне',
      date: '20.03.19',
      long: true,
    },
    {
      index: 5,
      image: 'pic-2',
      title: 'Котедж на крутом склоне',
      date: '20.03.19',
      long: false,
    },
    {
      index: 6,
      image: 'pic-2',
      title: 'Котедж на крутом склоне',
      date: '20.03.19',
      long: false,
    },
  ];
}
</script>
<style lang="scss" scoped>
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
    margin-bottom: 20px;
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
  }

  &__list-item {
    padding: 0;
    margin: 0 0 50px 0;
    color: var(--Black);
    border-bottom: 1px solid var(--Black);
    padding-bottom: 12px;
    width: 25%;

    &--long {
      width: 40%;
    }
  }

  &__box-list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
