<template>
  <div class="example">
    <v-contextmenu ref="contextmenu" :theme="theme">
      <v-contextmenu-item @click="handleClick">菜单1</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单2</v-contextmenu-item>

      <v-contextmenu-item divider></v-contextmenu-item>

      <v-contextmenu-submenu ref="submenu" @submenu-show="handleSubmenuShow" title="子菜单">
        <v-contextmenu-item @click="handleClick">菜单3</v-contextmenu-item>

        <v-contextmenu-item divider></v-contextmenu-item>

        <v-contextmenu-submenu title="子菜单">
          <v-contextmenu-item @click="handleClick">菜单5</v-contextmenu-item>
        </v-contextmenu-submenu>

        <v-contextmenu-item @click="handleClick">菜单4</v-contextmenu-item>

        <v-contextmenu-item :auto-hide="false">不自动关闭</v-contextmenu-item>
        <v-contextmenu-item :is-active="false" :auto-hide="false">
          <el-button @click="getPosition">获取位置</el-button>
          <el-form
            :model="dynamicValidateForm"
            ref="dynamicValidateForm"
            label-width="100px"
            style="width:400px"
          >
            <el-form-item
              prop="email"
              label="邮箱"
              :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
            >
              <el-input v-model="dynamicValidateForm.email" style="width:100px"></el-input>
            </el-form-item>
            <el-form-item
              v-for="(domain, index) in dynamicValidateForm.domains"
              :label="'域名' + index"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
              :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
            >
              <el-input v-model="domain.value" style="width:100px"></el-input>
              <el-button @click="removeDomain(domain)" class="no-hidden">
                <span class="no-hidden">删除</span>
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button @click="addDomain">新增域名</el-button>
            </el-form-item>
          </el-form>
        </v-contextmenu-item>
      </v-contextmenu-submenu>
    </v-contextmenu>

    <v-contextmenu ref="contextmenuss">
      <v-contextmenu-item>菜单1</v-contextmenu-item>
      <v-contextmenu-item divider></v-contextmenu-item>
      <v-contextmenu-item>菜单2</v-contextmenu-item>
      <v-contextmenu-item>菜单3</v-contextmenu-item>
    </v-contextmenu>

    <div :class="['box', theme]" v-contextmenu:contextmenu>右键点击此区域</div>
  </div>
</template>

<script>
export default {
  name: 'Submenu',
  data() {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      }
    }
  },

  props: {
    theme: String,
  },

  methods: {
    handleClick(vm, event) {
      // console.log(vm, event)
    },
    handleSubmenuShow(vm, placement) {
      // console.log(vm, placement)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    },
    getPosition() {
      const targetDimensions = this.$refs.submenu.$refs.submenu.getBoundingClientRect()
      const postition = {
        top: Math.random() * targetDimensions.height + targetDimensions.top,
        left: Math.random() * targetDimensions.width + targetDimensions.left,
      }
      this.$refs.contextmenuss.show(postition)
      // console.log(this.$refs.submenu.$refs.submenu.getBoundingClientRect())
    }
  },
}
</script>

<style scoped>
.box {
  width: 100%;
}
</style>
