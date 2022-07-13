<template>
  <div class="switch language">
    <label>
      <span class="language__label">English</span>
      <input type="checkbox" v-model="isRuLocale">
      <span class="lever"></span>
      <span class="language__label">Русский</span>
    </label>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

@Component({})
export default class Language extends Vue {
 @Prop({
   type: Boolean,
   default: true,
 })
  readonly isRuLocale!: boolean;
}
</script>
<style lang="scss">
.language {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 100%;
  background-color: gray;

  &__label {
    font-size: 16px;
    color: var(--White);
    font-weight: 500;
  }
}
</style>
