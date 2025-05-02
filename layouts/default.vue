<template>
  <div class="bg-[#06121E]">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import { useInitData } from '~/composables/useInitData'
useInitData()
</script>
