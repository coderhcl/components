<template>
  <div class="mdEditor">
    <md-editor
      v-bind="$attrs"
      v-model="content"
      @on-upload-img="onUploadImg"
      @onHtmlChanged="HtmlChange"
    />
  </div>
</template>

<script lang="ts" setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
// 文本
let content = ref('你好，md-editor')
// md文档上传图片
const onUploadImg = async (files: any, callback: any) => {
  const res = await Promise.all(
    files.map((file: any) => {
      return new Promise(async (rev, rej) => {
        const form = new FormData()
        form.append('file', file)
        // 通过 uploadFile接口上传
        // await uploadFile(form).then((res: any) => rev(res))
      })
    }),
  )
  callback(res.map((item) => item.url))
}
let HtmlChange = (html: string) => {
  console.log('html', html)
}
</script>

<style lang="scss" scoped>
.mdEditor {
  width: 100%;
  height: 100%;
}
#md-editor-v3 {
  height: 500px;
}
</style>
