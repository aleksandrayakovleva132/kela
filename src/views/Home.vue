<template>
  <div class="home" >
    <Banner />
    <About />
    <Advantages class="home__advantages"
      :array="advantages"/>
<!--    <Team />-->
    <ProjectHome id="projects" />
    <BimHome id="bim" />
    <Contacts  id="contact"/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import About from '@/components/About/About.vue';
import Footer from '@/components/Footer/Footer.vue';
import Advantages from '@/components/Advantages/Advantages.vue';
import { AdvantagesArray } from '@/components/Advantages/types';
import Team from '@/components/Team/Team.vue';
import ProjectHome from '@/components/ProjectHome/ProjectHome.vue';
import Contacts from '@/components/Contacts/Contacts.vue';
import Banner from '@/components/Banner/Banner.vue';
import Decoration from '@/components/Decoration/Decoration.vue';
import Language from '@/components/Header/Language.vue';
import BimHome from '@/components/ProjectHome/BimHome.vue';

@Component({
  components: {
    BimHome,
    Language,
    Decoration,
    Banner,
    Contacts,
    ProjectHome,
    Team,
    Advantages,
    Footer,
    About,
  },
})
export default class Home extends Vue {
  advantages: AdvantagesArray[] = [
    {
      index: 1,
      title: 'Индивидуальный подход к каждому проектируемому объекту',
      titleEng: 'Individual approach to each design project',
      textEng: 'The design project is informed by specific conditions and individual technical assignment. The projects are developed with the aim to optimize design solutions, capital investment and other resources.',
      text: 'Проектирование ведется в зависимости от конкретных условий, в рамках  индивидуального технического задания. Каждый проект прорабатывается детально с целью оптимизации проектных решений и дальнейшей экономией капиталовложений, ресурсов, трудозатрат.',
      image: 'img-1',
    },
    {
      index: 2,
      title: 'Ценообразование',
      titleEng: 'Pricing',
      textEng: 'KELA is a medium-sized company with a team of a little over 100 people, which allows us to provide solutions for prices below the market level.',
      text: 'Наши цены ниже рыночных, поскольку в нашей организации расходы на штат административного персонала сведены к минимуму. По сути, Вы платите исполнителям напрямую.',
      image: 'img-2',
    },
    {
      index: 3,
      title: 'Соблюдение сроков',
      titleEng: 'Serious about deadlines',
      textEng: 'Efficient team management and well-established project-planning allows rigorous but swift decision making and strict compliance with the deadlines for project delivery.',
      text: 'В нашей компании реализована функциональная схема работы над проектом, что позволяет оперативно принимать решения и строго соблюдать установленные сроки проектирования.',
      image: 'img-3',
    },
    {
      index: 4,
      title: 'География',
      titleEng: 'Geography',
      textEng: 'We run design projects across Russia. Our team members have an extensive experience of designing buildings and constructions located in permafrost zones and areas of increased seismic activity',
      text: 'Мы работаем над объектами, расположенными в разных точках России. Наши специалисты имеют опыт проектирования в районах вечной мерзлоты, зонах повышенной сейсмической активности.',
      image: 'img-4',
    },
  ];
}
</script>
<style lang="scss" scoped>
.home {
  &__advantages {
    z-index: 40;
  }
}
</style>
