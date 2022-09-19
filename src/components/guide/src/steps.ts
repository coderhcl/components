export const steps = () => {
  return [
    {
      // 显示在那个元素上
      element: '#guide-start',
      popover: {
        // 标题
        title: '是否开启引导',
        // 描述
        description: '这将大致介绍本系统的功能',
        // 位置
        position: 'left',
      },
    },
    {
      // 显示在那个元素上
      element: '#full-screen',
      popover: {
        // 标题
        title: '全屏按钮',
        // 描述
        description: '点击可开启全屏',
        // 位置
        position: 'left',
      },
    },
    {
      // 显示在那个元素上
      element: '#dark',
      popover: {
        // 标题
        title: '暗黑模式',
        // 描述
        description: '点击可开启暗黑模式',
        // 位置
        position: 'left',
      },
    },
    {
      // 显示在那个元素上
      element: '#collape',
      popover: {
        // 标题
        title: '折叠菜单栏',
        // 描述
        description: '',
        // 位置
        position: 'botto-left',
      },
    },
    {
      // 显示在那个元素上
      element: '#sideContainer',
      popover: {
        // 标题
        title: '菜单栏',
        // 描述
        description: '这里可以查看各种封装的组件',
        // 位置
        position: 'right',
      },
    },
  ]
}
