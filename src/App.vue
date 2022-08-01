<template>
  <div id="app" :class="{'app--open-menu': this.$menu.current === 'is-open' }">
    <div v-if="this.$menu.current === 'is-open'" class="app__mask"
         @click="closeMenu"></div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import MenuStatus from '@/store/enums/MenuStatus';

@Component({
  components: {},
})
export default class App extends Vue {
  closeMenu(): void {
    this.$menu.set(this.$menu.current === MenuStatus.IS_OPEN
      ? MenuStatus.IS_HIDDEN : MenuStatus.IS_OPEN);
  }
}
</script>

<style lang="scss">
@import "assets/style.scss";
@import "assets/logotypes/color";
@import "assets/mixins.scss";

.app {
  &--open-menu {
    position: relative;
    overflow: hidden;
    height: 100vh;
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 120px;
      height: 100vh;
    }
  }
  &__mask {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 10;
  }
}
</style>
