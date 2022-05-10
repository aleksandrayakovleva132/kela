<template>
  <div class="team">
    <h2 class="team__title">Наша команда</h2>
    <ul class="team__list">
      <li class="team__item" v-for="item in 8" :key="item">
        <div class="team__image-box">
          <img class="team__image" width="100%" src="./images/team-1.png">
        </div>
      </li>
    </ul>
  </div>
  </template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';

@Component({})
export default class Team extends Vue {}
</script>
<style lang="scss" scoped>
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
    column-gap: 10%;
    row-gap: 80px;
  }

  &__item {
    width: 100%;
    background-image: url("./images/bg.svg");
    background-position: bottom;
    background-repeat: no-repeat;
    position: relative;
  }

  &__image-box {
    width: 100%;
    padding-bottom: 120%;
  }

  &__image {
    position: absolute;
    bottom: -1px;
  }
}
</style>
