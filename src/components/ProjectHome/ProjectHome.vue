<template>
  <div class="project-home">
    <div class="project-home__column">
      <router-link to="/catalog">
      <div class="project-home__item project-home__item--first">
        <div class="project-home__content">
          <div class="project-home__label">
            <p class="project-home__text">Объекты <br> промышленного <br>строительства:</p>
            <Link />
          </div>
          <div class="project-home__image">
            <img src="./images/object-1.png" width="100%">
          </div>
        </div>
      </div>
      </router-link>
    </div>
    <div class="project-home__column">
      <router-link to="/catalog">
      <div class="project-home__item project-home__item--first">
        <div class="project-home__content">
          <div class="project-home__label">
            <p class="project-home__text">Объекты <br> гражданского <br>строительства:</p>
            <Link />
          </div>
          <div class="project-home__image">
            <img src="./images/object-2.png" width="100%">
          </div>
        </div>
      </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import Link from '@/components/Link/Link.vue';

@Component({
  components: { Link },
})

export default class ProjectHome extends Vue {
}
</script>
<style lang="scss" scoped>
.project-home {
  display: flex;
  width: 100%;
  &__column {
    width: 50%;
  }
  &__item {
    width: 100%;
    padding-bottom: 108.33%;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
  }
  &__content {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
  }
  &__image {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  &__label {
    z-index: 2;
    top: 36%;
    left: 13%;
    right: 13%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--White);
    fill: var(--White);
  }
  &__text {
    text-align: center;
    font-size: 48px;
    line-height: 55px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 47px;
  }
}
</style>
