<template>
  <div>
    <m-notification :value="50">
      <slot>
        <m-list
          @clickItem="clickItem"
          @clickAction="clickAction"
          :list="list"
          :actions="actions"
        ></m-list>
      </slot>
    </m-notification>
    <!-- <br />
    <br />
    <m-notification :value="50" :max="30"></m-notification>
    <br />
    <br />
    <m-notification :value="50" :max="30" isDot></m-notification>
    <br />
    <br />
    <m-notification :value="50" icon="ChatRound"></m-notification> -->
  </div>
</template>

<script lang="ts" setup>
import { list, actions } from './data'

let clickItem = (val: any) => {
  console.log('val', val)
}
let clickAction = (val: any) => {
  console.log('val', val)
}
</script>

<style lang="scss" scoped></style>
