<template>
  <div>
     <Catalog :list="projects" page-name="civil"/>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import Catalog from '@/components/Catalog/Catalog.vue';
// eslint-disable-next-line import/extensions
import data from '@/data/data.ts';
import { catalogTypes } from '@/components/Catalog/types';

@Component({
  components: { Catalog },
})
export default class Civil extends Vue {
  projects: catalogTypes[] = data.civil;
}
</script>
<style lang="scss" scoped>
</style>
