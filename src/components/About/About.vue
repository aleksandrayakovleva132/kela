<template>
  <div class="about">
    <div class="about__column">
      <div class="about__photo">
        <div class="about__decoration about__decoration--top">
          <Decoration :size="this.$layout.current === 'phone' ? 120 : 232" width="3"/>
        </div>
        <div class="about__decoration about__decoration--bottom">
          <Decoration :size="this.$layout.current === 'phone' ? 232 : 418"
                      :width="this.$layout.current === 'phone' ? 3 : 2"/>
        </div>
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
import Decoration from '@/components/Decoration/Decoration.vue';

@Component({
  components: { Decoration, AboutSlider, Slider },
})
export default class About extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";

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
    position: relative;
    overflow: hidden;
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

  &__decoration {
    position: absolute;
    z-index: 3;
    &--top {
      width: 232px;
      height: 202px;
      top: -82px;
      right: -75px;
    }
    &--bottom {
      width: 247px;
      height: 216px;
      bottom: 60px;
      left: -193px;
    }
  }

  @include for-phone-only {
    flex-direction: column;

    &__column {
      width: 100%;
    }

    &__content {
      padding: 30px 15px 32px 15px;
    }

    &__title {
      font-size: 38px;
      margin-bottom: 10px;
    }

    &__text {
      font-size: 14px;
      line-height: 20px;
    }

    &__content-container {
      position: relative;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
    &__slider-container {
      display: flex;
      flex-direction: column;
    }

    &__text-block {
      margin-bottom: 30px;
    }

    &__decoration {
      position: absolute;
      z-index: 3;
      &--top {
        width: 120px;
        height: 106px;
        top: -40px;
        right: -47px;
      }
      &--bottom {
        width: 247px;
        height: 216px;
        bottom: -80px;
        left: -127px;
      }
    }
  }
}
</style>
