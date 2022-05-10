<template>
  <div class="header">
    <router-link to="/">
    <div class="header__logo">
      <img v-if="light" src="./images/kela-2.svg" width="98" alt="kela">
      <img v-else src="./images/kela.svg" width="98" alt="kela">
    </div>
    </router-link>
    <div class="header__menu">
      <img  v-if="light" src="./images/menu-2.svg" width="39" alt="menu"/>
      <img v-else src="./images/menu.svg" width="39"  alt="menu"/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {
  @Prop({
    type: Boolean,
  })
  readonly light!: boolean;
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 0;
  //background-color: rebeccapurple;
}
</style>
