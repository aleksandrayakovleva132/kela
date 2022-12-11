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
          <h2 class="about__title">
            <template v-if="rus">
              {{ data.title.ru }}
            </template>
            <template v-else>{{ data.title.eng }}</template>
          </h2>
           <template v-if="rus">
             <p class="about__text">{{ data.paragraph1.ru }}</p>
             <p class="about__text">{{ data.paragraph2.ru }}</p>
             <p class="about__text">{{ data.paragraph3.ru }}</p>
             <p class="about__text">{{ data.paragraph4.ru}}</p>
             <p class="about__text">{{ data.paragraph5.ru}}</p>
           </template>
            <template v-else>
              <p class="about__text">{{ data.paragraph1.eng }}</p>
              <p class="about__text">{{ data.paragraph2.eng }}</p>
              <p class="about__text">{{ data.paragraph3.eng }}</p>
              <p class="about__text">{{ data.paragraph4.eng}}</p>
              <p class="about__text">{{ data.paragraph5.eng}}</p>
            </template>
          </div>
          <div class="about__slider-container">
            <AboutSlider />
          </div>
          <template v-if="rus">
            <p class="about__text">{{ data.paragraph6.ru}}</p>
          </template>
          <template v-else><p class="about__text">{{ data.paragraph6.eng }}</p></template>
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
import Local from '@/store/enums/Local';

@Component({
  components: { Decoration, AboutSlider, Slider },
})
export default class About extends Vue {
  get rus(): boolean {
    return this.$local.current === Local.RU;
  }

  private $local: any;

  data = {
    title: {
      ru: 'Про нас',
      eng: 'About',
    },
    paragraph1: {
      ru: 'Конструкторской бюро KELA - команда инженеров-проектировщиков в области промышленного и гражданского строительства.',
      eng: 'Design Bureau KELA is a team of design engineers in the field of industrial and civil construction.\n',
    },
    paragraph2: {
      ru: 'Основное направление нашей деятельности - разработка разделов конструкций зданий и сооружений (КР, КЖ, КМ, КД).',
      eng: 'Our main focus is structural engineering of building sections (construction solutions, concrete structures, metal structures, wooden structures).\n',
    },
    paragraph3: {
      ru: 'Состав нашей команды включает в себя не только конструкторов, но и архитекторов, инженеров для разработки оптимальных решений при соблюдении всех действующих стандартов нормативной документации в строительстве.',
      eng: 'Our team comprises designers, architects and engineers providing optimal solutions in compliance with all the building and construction regulations.',
    },
    paragraph4: {
      ru: 'Опыт и квалификация сотрудников команды KELA позволяет проектировать конструкции зданий и сооружений различной степени сложности, в том числе объекты в районах вечной мерзлоты, зонах повышенной сейсмической активности.\n',
      eng: 'The experience and qualification of the KELA’s team allows designing buildings and structures of various degrees of complexity, including those located in permafrost zones and areas of increased seismic activity.\n',
    },
    paragraph5: {
      ru: 'Мы работаем в программных комплексах: Autodesk AutoCAD, Autodesk Revit, Tekla Structures , SCAD, ЛИРА.\n',
      eng: '',
    },
    paragraph6: {
      ru: 'Наша основная цель - разрабатывать конструктивные решения, отвечающие современным требованиям технологичности, энергоэффективности, экономичности.',
      eng: 'We use various software (Autodesk AutoCAD, Autodesk Revit, Tekla Structures, SCAD, LIRA) to attain our main goal – to provide design solutions that meet modern requirements for manufacturability, energy efficiency and cost-effectiveness.',
    },
  };
}
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
    background-image: url('@/assets/images/about.jpg');
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

  @include for-phone-and-tablet {
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
      max-width: 480px;
    }

    &__text {
      font-size: 14px;
      line-height: 20px;
      max-width: 480px;
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
