<template>
  <div class="team">
    <h2 class="team__title">Наша команда</h2>
    <ul class="team__list">
      <li class="team__item" v-for="item in teamArray" :key="item.index">
        <div class="team__image-box">
          <img class="team__image" width="100%" :src="require(`./images/${item.src}.png`)">
        </div>
        <p class="team__name">{{ item.name }}</p>
        <span class="team__position">{{ item.position }}</span>
        <br>
      </li>
    </ul>
  </div>
  </template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import { teamTypes } from '@/components/Team/types';

@Component({})
export default class Team extends Vue {
  teamArray: teamTypes[] = [
    {
      index: 1,
      src: 'team-1',
      name: 'Иван',
      position: 'Инженер',
    },
    {
      index: 2,
      src: 'team-2',
      name: 'Дарья',
      position: 'Инженер',
    },
    {
      index: 3,
      src: 'team-4',
      name: 'Иван',
      position: 'Инженер',
    },
    {
      index: 4,
      src: 'team-3',
      name: 'Дарья',
      position: 'Инженер',
    },
    {
      index: 5,
      src: 'team-2',
      name: 'Дарья',
      position: 'Инженер',
    },
    {
      index: 6,
      src: 'team-4',
      name: 'Иван',
      position: 'Инженер',
    },
    {
      index: 7,
      src: 'team-3',
      name: 'Дарья',
      position: 'Инженер',
    },
  ];
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.team {
  margin: 0 auto;
  width: 82%;
  padding-top: 120px;
  padding-bottom: 140px;
  &__title {
    margin: 0 0 50px 0;
    font-size: 48px;
    line-height: 55px;
    text-align: center;
    font-weight: 300;
  }
  &__list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 2%;
    row-gap: 80px;
  }

  &__name {
    margin: 0 0 5px 0;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }

  &__position {
    display: block;
    text-align: center;
  }

  &__title {
    font-size: 38px;
    line-height: 44px;
    margin-bottom: 50px;
  }

  &__item {
    width: 206px;
    margin: 0 auto 40px;
    background-image: none;
  }

  &__image {
    position: relative;
    bottom: -1px;
  }

  &__image-box {
    width: 206px;
    height: 220px;
    padding: 0;
    margin: 0 0 20px 0;
    background-image: url("./images/bg.svg");
    background-position: bottom;
    background-repeat: no-repeat;
  }

  @include for-phone-only {
    padding: 50px 29px 80px;
    margin: 0;
    width: 100%;

    &__list {
      display: flex;
      flex-direction: column;
      column-gap: 0;
      row-gap: 0;
    }
  }
}
</style>
