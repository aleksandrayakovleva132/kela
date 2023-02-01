<template>
  <div ref="animationContainer" class="anim-starter"
       :class="{'anim-starter--animated': isAnimated && !clearAnimate}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

@Component({
  name: 'VAnimationStarter',
})
export default class VAnimationStarter extends Vue {
  $refs!: { animationContainer: HTMLElement};

  @Prop({
    type: Number,
    default: 100,
  })
  readonly threshold!: number;

  @Prop({
    type: String,
    default: '',
  })
  readonly rootMargin!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  readonly clearAnimate!: boolean;

  intersectionObserver!: IntersectionObserver;

  isAnimated = false;

  previousY = 0;

  previousRatio = 0;

  mounted() {
    this.observe();
  }

  handleIntersect(entries: IntersectionObserverEntry[]): void {
    const target = entries[0];

    if (!target) return;

    const { isIntersecting } = target;
    const topBound = target.boundingClientRect.top;
    const currentY = target.boundingClientRect.y;
    const currentRatio = target.intersectionRatio;

    this.isAnimated = topBound > 0 ? isIntersecting : true;

    if (currentY > this.previousY && currentRatio < this.previousRatio && !isIntersecting) {
      this.isAnimated = true;
    }
    if (this.clearAnimate && currentY > 0) {
      setTimeout(() => !this.isAnimated, 10000);
    }

    this.previousY = currentY;
    this.previousRatio = currentRatio;
  }

  observe(): void {
    const { animationContainer } = this.$refs;
    if (!animationContainer) return;
    try {
      const options = {
        rootMargin: this.rootMargin,
        threshold: this.rootMargin === '' ? this.threshold : 0,
      };

      this.intersectionObserver = new IntersectionObserver(this.handleIntersect, options);
      this.intersectionObserver.observe(animationContainer);
    } catch (rawError) {
      const error = rawError;

      console.error(error);
    }
  }
}
</script>
