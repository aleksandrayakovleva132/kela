<template>
  <div id="app" :class="{
    'app--open-menu': this.$menu.current === 'is-open',
  }">
    <div v-if="this.$menu.current === 'is-open' && this.$layout.current === 'phone'"
         class="app__mask"
         @click="closeMenu"></div>
    <div class="app__mask-open-item"></div>
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
  private $menu: any;

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
    //overflow: hidden;
    //height: 100vh;
  }

  &--open-item {
    overflow: hidden;
    height: 100vh;
  }

  //&__mask-open-item  {
  //  position: absolute;
  //  top: 0;
  //  bottom: 0;
  //  left: 0;
  //  right: 0;
  //  overflow: hidden;
  //  background-color: rgba(0, 0, 0, 0.4);
  //  z-index: 5;
  //  max-height: 100vh;
  //  display: none;
  //}
  //&--open-item .app__mask-open-item {
  //  display: block;
  //}
  &__mask {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
  }
}
</style>
