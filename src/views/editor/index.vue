<template>
  <div class="container">
    <h1>wangeditor</h1>
    <br />
    <m-editor
      ref="contentRef"
      @getWangEditorValue="getWangEditorValue"
      :title="contentLabel"
    />
    <br />
    <h1>mdditor</h1>
    <br />
    <m-md-editor />
  </div>
</template>

<script lang="ts" setup>
const contentRef = ref()
const contentLabel = ref('文本')
const getWangEditorValue = (val: any) => {
  console.log('editor', val)
}

let content = ref('你好，md-editorm')
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  z-index: 9999;
}
</style>
