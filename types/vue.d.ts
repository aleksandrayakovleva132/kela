import type {
  VNode,
} from 'vue';

declare module 'vue/types/options' {
    interface VComponentNode<Component extends Vue, Element = HTMLElement> extends VNode {
        componentInstance?: Component;
        elm: Element;
        $style: Record<string, string>;
    }
}
