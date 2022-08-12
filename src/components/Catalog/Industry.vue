<template>
  <div>
    <Catalog :list="projects" page-name="industry"/>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';
import Catalog from '@/components/Catalog/Catalog.vue';

import data from '@/data/data';
import { catalogTypes } from '@/components/Catalog/types';

@Component({
  components: { Catalog },
})
export default class Industry extends Vue {
  projects: catalogTypes[] = data.industry;
}
</script>
