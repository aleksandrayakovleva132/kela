<template>
  <div class="home" >
    <Banner />
    <About />
    <Advantages class="home__advantages"
      :array="advantages"/>
<!--    <Team />-->
    <Functions />
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
import Functions from '@/components/Functions/Functions.vue';

@Component({
  components: {
    Functions,
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
      text: 'Проектирование ведется в зависимости от конкретных условий, в рамках  индивидуального технического задания. Каждый проект прорабатывается детально с целью оптимизации проектных решений и дальнейшей экономией капиталовложений, ресурсов, трудозатрат.',
      titleEng: 'Individual approach to each design project',
      textEng: 'The design project is informed by specific conditions and individual technical assignment. The projects are developed with the aim to optimize design solutions capital investment and other resources.',
      image: '1',
    },
    {
      index: 2,
      title: 'Ценообразование',
      text: 'Мы не крупный проектный институт со штатом более 100 человек, наш коллектив четко структурирован, что позволяет формировать предложения о стоимости проектирования ниже рыночных.',
      titleEng: 'Pricing',
      textEng: 'KELA is a medium-sized company with a team of a little over 100 people, which allows us to provide solutions for prices below the market level.',
      image: '2',
    },
    {
      index: 3,
      title: 'Соблюдение сроков',
      text: 'Командное управление и отработанный регламент планирования и управления проектом, позволяет нам оперативно принимать решения и строго соблюдать установленные сроки проектирования.',
      titleEng: 'Serious about deadlines',
      textEng: 'Efficient team management and well-established project-planning allows rigorous but swift decision making and strict compliance with the deadlines for project delivery.',
      image: '3',
    },
    {
      index: 4,
      title: 'География',
      text: 'Мы работаем над объектами, расположенными в разных точках России. Наши специалисты имеют богатый опыт проектирования в районах вечной мерзлоты, зонах повышенной сейсмической активности.',
      titleEng: 'Geography',
      textEng: 'We run design projects across Russia. Our team members have an extensive experience of designing buildings and constructions located in permafrost zones and areas of increased seismic activity.',
      image: '4',
    },
    {
      index: 5,
      title: 'Работаем в BIM',
      text: 'Разрабатываем проектную и рабочую документацию в BIM (Autodesk Revit, Tekla Structures).',
      titleEng: 'Working in BIM',
      textEng: 'We provide project documentation in BIM (Autodesk Revit, Tekla Structures).',
      image: '5',
    },
    {
      index: 6,
      title: 'Консультирование',
      text: 'Мы всегда на связи и БЕСПЛАТНО даем консультации на всех этапах сотрудничества. Для нас важно, чтобы у заказчика не оставалось никаких вопросов.',
      titleEng: 'Get a consultation',
      textEng: 'We always stay in touch and provide FREE consultation at all stages of project development and delivery, ensuring that our clients questions are addressed in a comprehensive and timely fashion.',
      image: '6',
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
