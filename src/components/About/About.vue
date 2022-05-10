<template>
  <div class="about">
    <div class="about__column">
      <div class="about__photo">
      </div>
    </div>
    <div class="about__column">
      <div class="about__content">
        <div class="about__content-container">
          <div class="about__text-block">
          <h2 class="about__title">Про нас</h2>
          <p class="about__text">KELA - команда инженеров-проектировщиков в области
            промышленного и гражданского строительства.</p>
          <p class="about__text"> Основное направление нашей деятельности - разработка разделов
            конструкций зданий и сооружений (КР, КЖ, КМ, КД).</p>
          <p class="about__text">Состав нашей команды включает в себя не только конструкторов,
            но и архитекторов, инженеров
            для разработки оптимальных решений при соблюдении всех действующих
            стандартов нормативной документации в строительстве.</p>
          <p class="about__text">Опыт и квалификация сотрудников команды позволяет
            проектировать здания и сооружения различной
          степени сложности, в том числе объекты в районах вечной
            мерзлоты, зонах повышенной сейсмической активности.</p>
          </div>
          <div class="about__slider-container">
            <AboutSlider />
          </div>
          <p class="about__text">Наша основная цель - разрабатывать конструктивные
            решения, отвечающие современным требованиям технологичности,
            энергоэффективности, экономичности.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import Slider from '@/components/Swiper.vue';
import AboutSlider from '@/components/About/AboutSlider.vue';

@Component({
  components: { AboutSlider, Slider },
})
export default class About extends Vue {}
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  &__column {
    width: 50%;
  }
  &__photo {
    width: 100%;
    padding-bottom: 108.33%; // 12 : 13
    background-image: url('@/assets/images/about.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  &__content {
    width: 100%;
    padding-bottom: 108.33%;
    background: rgba(235, 91, 53, 0.2);
    position: relative;
  }

  &__title {
    font-size: 48px;
    line-height: 52.2px;
    margin: 0 0 40px 0;
    font-weight: 300;
  }
  &__content-container {
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 7%;
    right: 16%;
  }

  &__text {
    font-size: 14px;
    line-height: 20px;
  }

  &__text-block {
    margin-bottom: 40px;
  }

  &__slider {
    padding: 30px 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  &__slider-container {
    margin-bottom: 40px;
  }
}
</style>
