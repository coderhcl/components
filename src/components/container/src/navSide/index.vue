<template>
  <div class="sideContainer" id="sideContainer">
    <div class="title">
      <img src="../../../../assets/vue.svg" alt="" />
      <span v-if="!collapse">自定义组件封装</span>
    </div>
    <m-menu
      :data="data"
      :defaultActive="$route.path"
      router
      :collapse="collapse"
      background-color="#f9f9f9"
    />
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()

let data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/',
  },
  {
    icon: 'Eleme',
    name: 'element二次封装',
    index: '/element',
    children: [
      {
        icon: 'Check',
        name: '图标选择器',
        index: '/element/chooseIcon',
      },
      {
        icon: 'Location',
        name: '省市区选择',
        index: '/element/chooseArea',
      },
      {
        icon: 'Sort',
        name: '趋势标记',
        index: '/element/trend',
      },
      {
        icon: 'Timer',
        name: '时间选择',
        index: '/element/chooseTime',
      },
      {
        icon: 'Bell',
        name: '通知菜单',
        index: '/element/notification',
      },
      {
        icon: 'Menu',
        name: '导航菜单',
        index: '/element/menu',
      },
      {
        icon: 'TurnOff',
        name: '城市选择',
        index: '/element/chooseCity',
      },
      {
        icon: 'DArrowRight',
        name: '进度条',
        index: '/element/progress',
      },
      {
        icon: 'ScaleToOriginal',
        name: '日历',
        index: '/element/calendar',
      },
      {
        icon: 'ShoppingBag',
        name: '表格',
        index: '/element/table',
      },
    ],
  },
  {
    icon: 'Key',
    name: '登录',
    index: '/login',
  },
  {
    icon: 'CircleCheck',
    name: '字符串验证',
    index: '/validCode',
  },
  {
    icon: 'fullScreen',
    name: '网页全屏',
    index: '/fullScreen',
  },
  {
    icon: 'Guide',
    name: '首次加载导航提示',
    index: '/guide',
  },
  {
    icon: 'moon',
    name: '暗黑模式',
    index: '/dark',
  },
  {
    icon: 'edit',
    name: '富文本编辑器',
    index: '/editor',
  },
]
</script>

<style lang="scss" scoped>
.sideContainer {
  height: 100vh;
  background-color: #f9f9f9;
  border-right: 1px solid #eee;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    font-size: 14px;
    span {
      margin-left: 10px;
    }
  }
}
</style>
