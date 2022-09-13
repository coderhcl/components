<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <nav-side :collapse="collapse"></nav-side>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header v-model:collapse="collapse"></nav-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
let collapse = ref(false)
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
