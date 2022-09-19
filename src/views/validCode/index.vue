<template>
  <div>
    <m-valid-code @input="createValidCode"></m-valid-code>
  </div>
  <br />
  <h1>{{ code }}</h1>
</template>

<script lang="ts" setup>
let code = ref('')
const createValidCode = (data: any) => {
  code.value = data
  console.log(data)
}
</script>

<style lang="scss" scoped></style>
