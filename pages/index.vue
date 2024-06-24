<script lang="ts" setup>
  import { useRoute } from "vue-router";

  interface Post {
    [key: string]: any;
  }

  const route = useRoute();
  console.log(route.params);
  const page = ref(1);
  const { data: posts, refresh } = await useAsyncData("posts", () =>
    useClientRequest<Post>("/lastRelease", {
      server: false,
      query: {
        page: page.value,
        limit: 2,
      },
    })
  );
  console.log("data:post", posts.value?.data, posts.value?.total);
  //分页
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`);
    page.value = val;
    refresh();
  };
</script>

<template>
  <div>
    <div>首页</div>
    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
    <!-- 渲染post.data -->
    <Items :items="posts?.data"></Items>
    <el-pagination
      layout="pager, next"
      next-text="下一页"
      :total="posts?.total"
      :default-page-size="2"
      v-model:current-page="page"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="css" scoped></style>
