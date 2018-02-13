<template>
    <el-menu
      router
      :default-active="$route.path"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="item in menu" :key="item.id">
        <el-menu-item v-if="!item.sub" :index="item.path">
            <i v-bind:class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu v-else-if="item.sub" :index="item.id">
            <template slot="title">
                <i v-bind:class="item.icon"></i>
                <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="subitem in item.sub" :index="subitem.path" :key="subitem.id">
                <span slot="title">{{subitem.name}}</span>
            </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
</template>

<script>
import menu from "@/config/menu"
export default {
  data () {
      return { menu: menu }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
