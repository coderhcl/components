<template>
  <div><m-form :options="options"></m-form></div>
</template>

<script lang="ts" setup>
import { FormOptions } from '../../components/form/src/types/types'

let options: FormOptions[] = [
  {
    type: 'el-input',
    value: '',
    label: '用户名',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位',
        trigger: 'blur',
      },
    ],
  },
  {
    type: 'el-input',
    value: '',
    label: '密码',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
      },
      {
        min: 2,
        max: 20,
        message: '用户名在2-20位',
        trigger: 'blur',
      },
    ],
    attrs: {
      showPassword: true,
    },
  },
]
</script>

<style lang="scss" scoped></style>
