<template>
  <div class="menu-container">
    <m-menu :data="data2" defaultActive="2"></m-menu>
    <!-- <m-infinite-menu :data="data2"></m-infinite-menu> -->
  </div>
</template>

<script lang="ts" setup>
let data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document',
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document',
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document',
      },
    ],
  },
]
let data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document',
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document',
    children: [
      {
        name: '导航2-1',
        index: '2-1',
        icon: 'document',
      },
    ],
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'document',
              },
            ],
          },
        ],
      },
    ],
  },
]
</script>

<style lang="scss" scope>
.menu-container {
  width: 200px;
  height: 100%;
}
</style>
