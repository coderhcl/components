<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province" clearable>
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      >
      </el-option>
    </el-select>
    <el-select
      :disabled="!province"
      style="margin: 0 10px"
      placeholder="请选择城市"
      v-model="city"
      clearable
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      :disabled="!province || !city"
      placeholder="请选择区域"
      v-model="area"
      clearable
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import allAreas from '../lib/pca-code.json'
export interface AreaItem {
  name: string
  code: string
  children?: AreaItem[]
}

export interface Data {
  name: string
  code: string
}

let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')

let areas = ref(allAreas)
let selectCity = ref<AreaItem[]>([])
let selectArea = ref<AreaItem[]>([])

watch(
  () => province.value,
  (val) => {
    if (val) {
      let cities = areas.value.find(
        (item) => item.code === province.value,
      )!.children
      selectCity.value = cities
    }
    city.value = ''
    area.value = ''
  },
)

watch(
  () => city.value,
  (val) => {
    if (val) {
      let area = selectCity.value.find((item) => item.code === city.value)!
        .children!
      selectArea.value = area
    }
    area.value = ''
  },
)

watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: Data = {
        name:
          province.value &&
          allAreas.find((item) => item.code === province.value)!.name,
        code: province.value,
      }
      let cityData: Data = {
        name:
          city.value &&
          selectCity.value.find((item) => item.code === city.value)!.name,
        code: city.value,
      }
      let areaData: Data = {
        name: val && selectArea.value.find((item) => item.code === val)!.name,
        code: val,
      }
      emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData,
      })
    }
  },
)

// 分发事件给父组件
let emits = defineEmits(['change'])
</script>

<style lang="scss" scoped></style>
