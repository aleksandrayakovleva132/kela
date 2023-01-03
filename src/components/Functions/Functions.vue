<template>
  <div class="project-home__row functions__row">
    <div class="functions">
      <template v-if="rus">
        <h3 class="functions__title"> Наш функционал:</h3>
        <ul class="functions__list">
          <li class="functions__item">
            <span class="functions__num">1</span>Проектирование
          </li>
          <li class="functions__item">
            <span class="functions__num">2</span>
            Экспертиза
          </li>
          <li class="functions__item">
            <span class="functions__num">3</span>
            Авторский надзор
          </li>
        </ul>
      </template>
      <template v-else>
        <h3 class="functions__title"> Our services</h3>
        <ul class="functions__list">
          <li class="functions__item">
            <span class="functions__num">1</span>
            Design
          </li>
          <li class="functions__item">
            <span class="functions__num">2</span>
            Expertise
          </li>
          <li class="functions__item">
            <span class="functions__num">3</span>
            Supervision of design <br> implementation
            <br> (Author’s supervision)
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import Local from '@/store/enums/Local';

@Component({
})
export default class Functions extends Vue {
  private $local: any;

  get rus(): boolean {
    return this.$local.current === Local.RU;
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
.functions {
  width: 82%;
  margin: 0  auto;
  height: 360px;

  &__row {
    background: rgba(235, 91, 53, 0.2);
    padding-top: 60px;
    padding-bottom: 7px;
  }

  &__title {
    margin: 0 auto 56px;
    font-size: 48px;
    line-height: 58px;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
  }

  &__list {
    padding: 0;
    margin: 0;
    list-style: none;
    height: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item {
    font-weight: 400;
    font-size: 32px;
    display: flex;
    align-items: center;
  }

  &__num {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    margin-right: 28px;
    color: var(--Orange);
  }

  @include for-phone-and-tablet {
    height: auto;

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
  }
}
</style>
