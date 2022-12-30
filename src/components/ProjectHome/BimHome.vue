<template>
  <div class="project-home__row">
    <router-link to="/catalog/bim">
      <div class="project-home__bim-content">
        <div class="project-home__first-row">
          <div class="project-home__bim-title">bim</div>
          <div class="project-home__bim-label">
            Building <br>
            information <br> modeling
          </div>
        </div>
        <Link label="Подробнее"/>
      </div>
      <div class="project-home__bg"></div>
<!--      <div class="project-home__decoration project-home__decoration&#45;&#45;mobile">-->
<!--        <Decoration size="180" :width="3"/>-->
<!--      </div>-->
<!--      <div class="project-home__decoration project-home__decoration&#45;&#45;desktop-->
<!--                  project-home__decoration-3">-->
<!--        <Decoration size="190" :width="3"/>-->
<!--      </div>-->
<!--      <div class="project-home__decoration project-home__decoration&#45;&#45;desktop-->
<!--                  project-home__decoration-4">-->
<!--        <Decoration size="190" :width="3"/>-->
<!--      </div>-->
    </router-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Local from '@/store/enums/Local';
import Link from '@/components/Link/Link.vue';

@Component({
  name: 'BimHome',
  components: { Link },
})
export default class BimHome extends Vue {
  private $local: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }
}
</script>

<style scoped lang="scss">
@import "./projects.scss";
</style>
