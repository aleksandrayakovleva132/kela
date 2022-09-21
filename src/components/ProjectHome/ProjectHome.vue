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
    <div class="project-home__row">
      <router-link to="/catalog/bim">
        <Link big label="bim"/>
        <div class="project-home__decoration project-home__decoration--mobile">
          <Decoration size="180" :width="3"/>
        </div>
        <div class="project-home__decoration project-home__decoration--desktop
                  project-home__decoration-3">
          <Decoration size="190" :width="3"/>
        </div>
        <div class="project-home__decoration project-home__decoration--desktop
                  project-home__decoration-4">
          <Decoration size="190" :width="3"/>
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
@import "../../assets/mixins.scss";
.project-home {
  display: flex;
  width: 100%;
  flex-direction: column;

  &__main {
    display: flex;
  }
  &__column {
    width: 50%;
  }
  &__row {
    width: 100%;
    height: 158px;
    background-color: var(--Orange);
    fill: var(--White);
    color: var(--White);
    font-size: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  &__item {
    width: 100%;
    padding-bottom: 108.33%;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    overflow: hidden;
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

  &__decoration--mobile {
    display: none;
  }

  &__decoration {
    position: absolute;
    z-index: 3;

    &-1 {
      top: -1px;
      left: 0;
    }
    &-2 {
      bottom: -6px;
      right: 0;
    }
    &-3 {
      bottom: -66px;
      left: -94px;
    }
    &-4 {
      bottom: -134px;
      right: 20%;
    }
  }

  @include for-phone-only {
    &__main {
      flex-direction: column;
    }
    &__link,
    &__column {
      width: 100%;
      height: 376px;
      overflow: hidden;
      display: flex;
    }
    &__text {
      font-size: 38px;
      line-height: 43px;
    }

    &__item {
      padding-bottom: 0;
    }

    &__label {
      position: relative;
      padding-top: 88px;
      top: 0;
      left: 0;
      right: 0;
    }

    &__content {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__decoration {
      &--mobile {
        display: block;
      }
      position: absolute;
      left: -80px;
      bottom: -80px;
    }
    &__decoration--desktop {
      display: none;
    }
  }
  @include for-phone-and-tablet {
    &__text {
      font-size: 38px;
      line-height: 43px;
    }
  }
}
</style>
