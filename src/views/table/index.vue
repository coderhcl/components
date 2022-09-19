<template>
  <div>
    <m-table
      :data="tableData"
      :options="options"
      pagination
      :total="total"
      paginationAlign="center"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    >
      <template #date="{ scope }">
        <timer />
        {{ scope.row.date }}
      </template>
      <template #name="{ scope }">
        <el-button type="primary">{{ scope.row.name }}</el-button>
      </template>
      <template #action="{ scope }">
        <el-button size="small" type="success" @click="edit(scope)">
          编辑
        </el-button>
        <el-button size="small" type="danger" @click="remove(scope)">
          删除
        </el-button>
      </template>
    </m-table>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { TableOptions } from '../../components/table/src/types'

interface TableData {
  data: string
  name: string
  address: string
}

const tableData = ref<TableData[]>([])
let options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date',
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    slot: 'name',
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center',
  },
  {
    label: '操作',
    align: 'center',
    action: true,
  },
]

let current = ref<number>(1)
let pageSize = ref<number>(10)
let total = ref<number>(0)

let getData = () => {
  axios
    .post('/api/list', {
      current: current.value,
      pageSize: pageSize.value,
    })
    .then((res) => {
      tableData.value = res.data.data.rows
      total.value = res.data.data.total
    })
}
onMounted(() => {
  getData()
})
let edit = (scope: any) => {
  console.log(scope)
}
let remove = (scope: any) => {
  console.log(scope)
}

let sizeChange = (val: number) => {
  pageSize.value = val
  getData()
}
let currentChange = (val: number) => {
  current.value = val
  getData()
}
</script>

<style lang="scss" scoped>
svg {
  width: 1.1em;
  height: 1.1em;
}
</style>
