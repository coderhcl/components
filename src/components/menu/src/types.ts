export interface MenuItemType {
  // 导航的图标
  icon?: string
  // 导航的名字
  name: string
  // 导航的标识
  index: string
  // 导航的子菜单
  children?: MenuItemType[]
}
