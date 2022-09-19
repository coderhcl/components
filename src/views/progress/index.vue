<template>
  <div>
    <m-progress :percentage="60" isAnimation></m-progress>
    <m-progress
      isAnimation
      :percentage="60"
      :text-inside="true"
      :stroke-width="20"
      status="exception"
    ></m-progress>
    <m-progress isAnimation type="circle" :percentage="70" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
