<template>
  <div class="project-home__row functions__row">
    <div class="functions">
      <h3  v-if="rus" class="functions__title"> Наш функционал:</h3>
      <h3  v-else class="functions__title"> Our services:</h3>
        <div  class="functions__list">
          <div class="functions__item" v-for="item in list" :key="item.id">
            <div class="functions__item-border functions__item-border--active"
                 ref="function">
              <VAnimationStarter
                :root-margin="rootMargin(item.id)">
                <svg width="100%" height="112px" viewBox="0 0 414 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M413.5 54C413.5 61.1803 407.913 68.1532 397.47 74.5937C387.056 81.017
                     371.952 86.8197 353.245 91.7C315.837 101.458 264.132 107.5 207 107.5C149.868
                     107.5 98.1628 101.458 60.7551 91.7C42.0475 86.8197
                     26.9441 81.017 16.5296 74.5937C6.08724 68.1532
                     0.5 61.1803 0.5 54C0.5 46.8197 6.08724 39.8468 16.5296
                     33.4063C26.9441 26.983 42.0475 21.1803
                     60.7551 16.3C98.1628 6.54151 149.868 0.5 207 0.5C264.132 0.5
                     315.837 6.54151 353.245 16.3C371.952
                     21.1803 387.056 26.983 397.47 33.4063C407.913 39.8468 413.5
                     46.8197 413.5 54Z" />
                </svg>
              </VAnimationStarter>
            </div>
            <span class="functions__num">{{item.id}}</span>
            <span  v-if="rus">{{ item.text }}</span>
            <span v-else> {{ item.textEng }}</span>
          </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import Local from '@/store/enums/Local';
import VAnimationStarter from '@/components/AnimationStarter/AnimationStarter.vue';

@Component({
  components: { VAnimationStarter },
})
export default class Functions extends Vue {
  list: Array<{id: number, text: string, textEng: string}> = [
    {
      id: 1,
      text: 'Проектирование',
      textEng: 'Design',
    },
    {
      id: 2,
      text: 'Экспертиза',
      textEng: 'Expertise',
    },
    {
      id: 3,
      text: 'Авторский надзор',
      textEng: 'Author’s supervision',
    },
  ];

  activeId = 1;

  private $local: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }

  topMargin = 150;

  rootMargin(id: number): string | undefined {
    if (id === 1) {
      return `0px  0px -${this.topMargin}px 0px`;
    }
    if (id === 2) {
      return `0px  0px -${this.topMargin * 2}px 0px`;
    }
    if (id === 3) {
      return `0px  0px -${this.topMargin * 2.5}px 0px`;
    }
    return '';
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.functions {
  margin: 0 auto;

  &__row {
    background: rgba(235, 91, 53, 0.2);
    padding: 42px 0;
    overflow: hidden;
  }

  &__title {
    margin: 0 auto 36px;
    font-size: 40px;
    line-height: 50px;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
  }

  &__list {
    padding: 0 30px;
    margin: 0;
    list-style: none;
    height: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
  }
  &__item {
    font-weight: 400;
    font-size: 26px;
    display: flex;
    align-items: center;
    position: relative;
    //border: 0.3px dashed darkolivegreen;
    width: 414px;
    height: 108px;
    justify-content: center;
  }

  &__item-border {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease-in-out;

    &--active {
      opacity: 1;
      transition: 0.3s ease-in-out;
    }
  }

  &__num {
    font-weight: 700;
    font-size: 36px;
    line-height: 58px;
    margin-right: 28px;
    color: var(--Orange);
  }

  @include for-phone-and-tablet {
    height: auto;
    width: 100%;
    margin: 0;

    &__row {
      padding: 46px 20px;
    }

    &__title {
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 42px;
    }
    &__list {
      flex-direction: column;
      height: auto;
      align-items: baseline;
      padding: 0 20px;
      width: 100%;
      max-width: 430px;
    }

    &__item {
      font-size: 24px;
      margin-bottom: 30px;
      text-align: left;
      justify-content: flex-start;
    }

    &__num {
      font-size: 32px;
      line-height: 24px;
      margin-right: 24px;
    }

    &__item-border {
      display: none;
    }
  }

  @media (min-width: 1720px) {
    width: 60%;
  }

  .anim-starter svg  path {
    stroke: transparent;
    transition: 0.3s ease-in-out;
    opacity: 0;
  }

  .anim-starter--animated svg path {
     stroke: black;
     stroke-dasharray: 1000;
     stroke-dashoffset: 1000;
     animation: draw 1.2s  linear backwards;
  }

  .functions__item:nth-child(1) .anim-starter--animated svg path {
    animation-delay: 0s;
    opacity: 0;
  }

  .functions__item:nth-child(2) .anim-starter--animated svg path {
    animation-delay: 0.8s;
    opacity: 0;
  }

  .functions__item:nth-child(3) .anim-starter--animated svg path {
    animation-delay: 1.6s;
    opacity: 0;
  }

  @keyframes draw {
    100% {
      opacity: 1;
      stroke-dashoffset: 0;
    }
  }
}
</style>
