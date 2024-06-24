<script lang="ts" setup>
  defineProps<{
    items: any[];
  }>();
</script>

<template>
  <div v-for="item in items">品牌{{ item.brand }}</div>
</template>

<style lang="css" scoped></style>
