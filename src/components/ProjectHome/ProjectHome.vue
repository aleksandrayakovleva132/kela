<template>
  <div class="project-home">
    <div class="project-home__main">
      <div class="project-home__column">
        <router-link to="/catalog/industry" class="project-home__link">
          <div class="project-home__item project-home__item--first">
            <div class="project-home__decoration
                        project-home__decoration--desktop project-home__decoration-1">
              <svg width="147" height="131" viewBox="0 0 147 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-5.63877e-06 130L89.3929 130C91.5425 130 93.5279
                128.85 94.5975 126.985L145.288 38.6163C146.348 36.7673
                146.348 34.4944 145.288 32.6455L127.135 1.00001" stroke="white"/>
              </svg>
            </div>
            <div class="project-home__content">
              <div class="project-home__label">
                <p class="project-home__text" v-if="rus">Объекты
                  <br> промышленного<br>строительства</p>
                <p class="project-home__text" v-else>Industrial <br> construction<br>objects</p>
                <Link label="подробнее" v-if="rus"/>
                <Link label="more" v-else />
              </div>
              <div class="project-home__image">
                <img src="./images/object-1.png" width="100%">
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="project-home__column">
        <router-link to="/catalog/civil" class="project-home__link">
          <div class="project-home__item project-home__item--second">
            <div class="project-home__decoration project-home__decoration--desktop
            project-home__decoration-2">
              <svg width="147" height="131" viewBox="0 0 147 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M147 0.999997L57.6071 0.999993C55.4575 0.999993 53.4721
                2.14996 52.4025 4.01458L1.71249
                92.3837C0.651885 94.2327 0.651885 96.5056 1.71249
                98.3545L19.8649 130" stroke="white"/>
              </svg>

            </div>
            <div class="project-home__content">
              <div class="project-home__label">
                <p class="project-home__text" v-if="rus">Объекты <br>
                  гражданского <br>строительства:</p>
                <p class="project-home__text" v-else>Сivil<br>engineering<br>facilities</p>
                <Link label="подробнее" v-if="rus"/>
                <Link label="more" v-else/>
              </div>
              <div class="project-home__image">
                <img src="./images/object-2.png" width="100%">
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import Link from '@/components/Link/Link.vue';
import Decoration from '@/components/Decoration/Decoration.vue';
import Local from '@/store/enums/Local';

@Component({
  components: { Decoration, Link },
})

export default class ProjectHome extends Vue {
  private $local: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }
}
</script>
<style lang="scss" scoped>
@import "./projects.scss";
</style>
