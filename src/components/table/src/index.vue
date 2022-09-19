<template>
  <el-table
    v-bind="$attrs"
    :data="data"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
  >
    <template v-for="(item, index) in tableOption" :key="index">
      <el-table-column
        v-if="!item.slot"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
      </el-table-column>
      <el-table-column
        v-else
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOption!.label"
      :align="actionOption!.align"
      :width="actionOption!.width"
    >
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <div
    class="pagination"
    v-if="pagination"
    :style="{ justifyContent: paginationAlignJustify }"
  >
    <el-pagination
      v-model:currentPage="currentPage"
      :page-sizes="pageSizes as Array<any> "
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { TableOptions } from './types'

let props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 加载图标名
  elementLoadingSpinner: {
    type: String,
  },
  // 加载背景颜色
  elementLoadingBackground: {
    type: String,
  },
  // 加载图标是svg
  elementLoadingSvg: {
    type: String,
  },
  // 加载团是svg的配置
  elementLoadingSvgViewBox: {
    type: String,
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false,
  },
  // 显示分页的对齐方式
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
  // 当前是第几页
  currentPage: {
    type: Number,
    default: 1,
  },
  // 当前一页多少条数据
  pageSize: {
    type: Number,
    default: 10,
  },
  // 显示分页数据多少条的选项
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40],
  },
  // 数据总条数
  total: {
    type: Number,
    default: 0,
  },
})
// 过滤操作项之后的配置
let tableOption = computed(() => props.options.filter((item) => !item.action))
// 操作项
let actionOption = computed(() => props.options.find((item) => item.action))
// 是否在加载中
let isLoading = computed(() => !props.data || !props.data.length)

const emits = defineEmits(['sizeChange', 'currentChange'])

let handleSizeChange = (val: number) => {
  emits('sizeChange', val)
}
let handleCurrentChange = (val: number) => {
  emits('currentChange', val)
}

// 和flex结合的排列方式
let paginationAlignJustify = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start'
  else if (props.paginationAlign === 'center') return 'center'
  else return 'flex-end'
})
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>
