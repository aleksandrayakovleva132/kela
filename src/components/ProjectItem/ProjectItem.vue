<template>
  <div class="project-item">
    <div class="project-item__cover">
      <div class="project-item__image-container">
        <img src="./images/cover.png" height="100%">
      </div>
      <div class="project-item__content">
        <Header />
        <p class="project-item__title">
          Котедж на крутом склоне
        </p>
        <div class="project-item__bottom">
          <span>NAme second name</span>
          <span>20.03.19</span>
        </div>
      </div>
    </div>
    <div class="project-item__info">
      <p class="project-item__info-text">
        Мы разрабатываем проект индивидуального жилого дома согласно техническому заданию
        заказчика и на
        основании инженерных изысканий участка строительства.
        <br><br>
        Особое внимание мы уделяем проектированию фундамента.
        <br><br>
        Проект фундамента разрабатывается согласно инженерно-геологическим условиям
        участка строительства и действующим нагрузкам от здания.
        <br><br>
        Результатом проектирования является оптимальный фундамент, отвечающий
        требованиям несущей способности и экономической целесообразности.
        <br><br>
        В рамках проектирования индивидуального жилого дома мы предоставляем следующие услуги:
      </p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import {
  Component, Vue,
} from 'vue-property-decorator';

@Component({
  components: { Header },
})
export default class ProjectItem extends Vue {
}
</script>

<style scoped lang="scss">
.project-item {
  &__cover {
    width: 100%;
    padding-bottom: 31.25%;
    position: relative;
    display: flex;
  }
  &__image-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    &:after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: var(--Black);
      opacity: 0.3;
    }
  }
  &__content {
    margin-left: 6%;
    margin-right: 6%;
    z-index: 2;
    width: 100%;
  }
  &__title {
    position: absolute;
    bottom: 29.33%;
    margin: 0;
    color: var(--White);
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    width: 88%;
    left: 6%;
    right: 6%;
    text-align: center;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    position: absolute;
    color: var(--White);
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    width: 88%;
    bottom: 9%;
  }

  &__info {
    margin: 0 auto;
    padding-top: 64px;
    padding-bottom: 150px;
    width: 54%;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;

    &-text {
      margin: 0;
    }
  }
}
</style>
