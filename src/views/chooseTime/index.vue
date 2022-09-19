<template>
  <div>
    <!-- :startOptions="startOptions" -->
    <m-choose-time @startChange="startChange" @endChange="endChange" />
    <br />
    <m-choose-date @startChange="dateStartChange" @endChange="dateEndChange" />
  </div>
</template>

<script lang="ts" setup>
interface endValueType {
  startTime: string
  endTime: string
}
interface dataEndValueType {
  startDate: Date
  endDate: Date
}
let startChange = (val: string) => {
  console.log('startChange', val)
}
let endChange = (val: endValueType) => {
  console.log('endChange', val)
}
let dateStartChange = (val: Date) => {
  console.log('dateStartChange', val)
}
let dateEndChange = (val: dataEndValueType) => {
  console.log('dateEndChange', val)
}

// let startOptions = {
//   size: 'small',
//   clearable: false,
// }
</script>

<style lang="scss" scoped></style>
