<template>
  <div>
    <div class="flex">
      <div><m-trend text="营业额" upTextColor="blue"></m-trend></div>
      <div>
        <m-trend text="销售额" type="down"></m-trend>
      </div>
    </div>
    <br />
    <div class="flex">
      <div>
        <m-trend text="营业额" reverseColor upIcon="CaretTop"></m-trend>
      </div>
      <div>
        <m-trend text="销售额" type="down" reverseColor></m-trend>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
