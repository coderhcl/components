<template>
  <el-popover
    trigger="click"
    placement="bottom-start"
    :width="480"
    v-model:visible="visible"
  >
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <el-icon v-if="visible"><ArrowDown /></el-icon>
        <el-icon v-else><ArrowUp /></el-icon>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :offset="2" :span="14">
          <el-select v-model="selectValue" filterable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
      <div class="city">
        <div v-for="(val, key) in cities" class="city-item">
          {{ key }}
        </div>
      </div>
      <el-scrollbar max-height="300px">
        <template v-for="(val, key) in cities" :key="key">
          <el-row style="margin-bottom: 10px">
            <el-col :span="2">{{ key + ':' }}</el-col>
            <el-col :span="22" class="city-name">
              <div
                class="city-name-item"
                v-for="(item, index) in val"
                :key="item.id"
              >
                {{ item.name }}
              </div>
            </el-col>
          </el-row>
        </template>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import city from '../lib/city'

let result = ref<string>('请选择')
let visible = ref<boolean>(false)
let radioValue = ref<string>('按城市')
let selectValue = ref<string>('')
let cities = ref(city.cities)
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 1px;
  margin-left: 4px;
  transition: all 0.25s linear;
}
.container {
  padding: 6px;
}
.city {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    border: 1px solid #eee;
    margin-bottom: 8px;
    cursor: pointer;
  }
}
.city-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>
