<template>
  <div class="header">
    <div id="collape">
      <span @click="toggle">
        <Expand v-if="collapse"></Expand>
        <Fold v-else />
      </span>
    </div>
    <div class="header-right">
      <div id="dark">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="暗黑模式"
          placement="bottom"
        >
          <m-dark></m-dark>
        </el-tooltip>
      </div>
      <div id="guide-start">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="是否开启导航"
          placement="bottom"
        >
          <m-guide></m-guide>
        </el-tooltip>
      </div>
      <div class="full-screen" id="full-screen">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="是否全屏"
          placement="bottom"
        >
          <m-full-screen></m-full-screen>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  collapse: Boolean
}>()

let emit = defineEmits(['update:collapse'])
let toggle = () => {
  // 需要修改父组件的值
  emit('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-right {
  display: flex;
  align-items: center;
  justify-content: center;
}
#guide-start,
#full-screen,
#dark {
  margin-left: 10px;
}
svg {
  height: 1.2rem;
  width: 1.2rem;
}
</style>
