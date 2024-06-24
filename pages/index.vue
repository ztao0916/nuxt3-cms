<script lang="ts" setup></script>

<template>
  <div>
    <div>首页</div>
    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>

<style lang="css" scoped></style>
