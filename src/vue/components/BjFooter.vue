<template>
  <footer class="bj-footer" v-bind="$attrs">
    <div v-if="$slots.top" class="bj-footer__top">
      <div class="bj-container">
        <slot name="top" />
      </div>
    </div>
    <div class="bj-footer__bottom">
      <div class="bj-container">
        <slot name="bottom" />
        <slot />
      </div>
    </div>
  </footer>
</template>
