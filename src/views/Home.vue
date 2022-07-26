<template>
  <div class="home">
    <Banner />
    <About />
    <Advantages class="home__advantages"
      :array="advantages"/>
    <Team />
    <ProjectHome />
    <Contacts />
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

@Component({
  components: {
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
      text: 'Проектирование ведется в зависимости от конкретных условий, в рамках  индивидуального технического задания. Каждый проект прорабатывается детально с целью оптимизации проектных решений и дальнейшей экономией капиталовложений, ресурсов, трудозатрат.',
      image: 'img-1',
    },
    {
      index: 2,
      title: 'Ценообразование',
      text: 'Наши цены ниже рыночных, поскольку в нашей организации расходы на штат административного персонала сведены к минимуму. По сути, Вы платите исполнителям напрямую.',
      image: 'img-2',
    },
    {
      index: 3,
      title: 'Соблюдение сроков',
      text: 'В нашей компании реализована функциональная схема работы над проектом, что позволяет оперативно принимать решения и строго соблюдать установленные сроки проектирования.',
      image: 'img-3',
    },
    {
      index: 4,
      title: 'География',
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
