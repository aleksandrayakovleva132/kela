<template>
  <div class="footer">
    <span>© ООО «Кela» {{ currentYear }}</span>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {
  // eslint-disable-next-line class-methods-use-this
  get currentYear() {
    return new Date().getFullYear();
  }
}

</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 90px;
  background: var(--LightGray);
  color: var(--Black);
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
}
</style>
