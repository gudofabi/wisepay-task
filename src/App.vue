<template>
  <div id="app" class="d-flex">
    <AppNavigation />
    <router-view class="w-full"/>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
export default {
  name: "App",
  components: {
    AppNavigation,
  }
}
</script>

<style lang="scss">
.w-full {
  width: 100%;
  padding: 50px 60px;
}
</style>
