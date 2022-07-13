import Local from '../src/store/enums/Local';

declare module 'vue/types/vue' {
  interface Vue {
    $local: {
      current: Local,
      set: (local: Local) => void,
    };
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<
    V extends Vue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Data=DefaultData<V>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Methods=DefaultMethods<V>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Computed=DefaultComputed,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    PropsDef=PropsDefinition<DefaultProps>,
    Props=DefaultProps> {
    metaInfo?: MetaInfo | MetaInfoComputed;
  }
}
