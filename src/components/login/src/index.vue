<template>
  <div class="container" :class="{ rightPanelActive: isShowRightPanel }">
    <div class="form-container sign-up-container">
      <!-- 注册表单 -->
      <el-form :model="registerFormData" :rules="registerRules">
        <h1 class="title">注册</h1>
        <el-form-item class="form-item" prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="registerFormData.username"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="form-item" prop="email">
          <el-input placeholder="请输入邮箱" v-model="registerFormData.email">
            <template #prefix>
              <el-icon class="el-input__icon"><Message /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="form-item" prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            show-password
            v-model="registerFormData.password"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="form-item" prop="confirm_password">
          <el-input
            placeholder="请确认密码"
            type="password"
            show-password
            v-model="registerFormData.comfirm_password"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><DocumentChecked /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <button class="register-btn">注册</button>
      </el-form>
    </div>
    <div class="form-container sign-in-container">
      <!-- 登录表单 -->
      <el-form :model="loginFormDate" :rules="loginRules">
        <h1 class="title">登录</h1>
        <el-form-item class="form-item" prop="username">
          <el-input placeholder="请输入用户名" v-model="loginFormDate.username">
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="form-item" prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            show-password
            v-model="loginFormDate.password"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="valid">
          <el-input
            v-model="loginFormDate.validCode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><key /></el-icon>
            </template>
          </el-input>
          <m-valid-code @input="createValidCode" />
        </el-form-item>
        <span class="forgetPwd">忘记密码？</span>
        <button class="login-btn">登录</button>
      </el-form>
    </div>

    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>已有账号？</h1>
          <p>请使用您的账号进行登录</p>
          <button class="ghost" @click="isShowRightPanel = false">登录</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>没有账号?</h1>
          <p>立即注册加入我们，和我们一起开始旅程吧</p>
          <button class="ghost" @click="isShowRightPanel = true">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { loginRules } from './rules/login.rule'
import { registerRules } from './rules/register.rule'
let isShowRightPanel = ref(false)
let loginFormDate = ref({
  username: '',
  password: '',
})
let registerFormData = ref({
  username: '',
  password: '',
  email: '',
  confirm_password: '',
})
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(120deg, #3498db, #8e44ad);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}
p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}
span {
  font-size: 12px;
}

.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}
.el-form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.el-form-item {
  width: 250px;
}
.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.social-container a:hover {
  background-color: #eee;
}

.form-item {
  position: relative;
  margin: 10px 0;
}

.form-item input {
  font-size: 15px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 3px;
  height: 35px;
}

.form-item span::before {
  content: attr(data-placeholder);
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  transition: 0.5s;
}
.form-item span::after {
  content: '';
  position: absolute;
  left: 0%;
  top: 100%;
  width: 0%;
  height: 2px;
  background-image: linear-gradient(120deg, #3498db, #8e44ad);
  transition: 0.5s;
}

.focus + span::before {
  top: -5px;
}

.focus + span::after {
  width: 100%;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background: #ff4b2b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.form-container button {
  background: linear-gradient(120deg, #3498db, #8e44ad);
  border: none;
  background-size: 200%;
  color: #fff;
  transition: 0.5s;
}

.form-container button:hover {
  background-position: right;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}
.forgetPwd {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  margin: 5px 0px 10px 0px;
  left: 100px;
  cursor: pointer;
}
.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}
.sign-up-container button {
  margin-top: 20px;
}
.login-btn,
.register-btn {
  width: 250px;
}
.title {
  margin-bottom: 10px;
}
.valid {
  display: flex;
  .el-input {
    width: 55%;
    margin-right: 5px;
  }
}
.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}
.overlay {
  background-image: linear-gradient(120deg, #3498db, #8e44ad);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}
.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}
.overlay-right {
  right: 0;
  transform: translateY(0);
}

.overlay-left {
  transform: translateY(-20%);
}

.container.rightPanelActive .sign-in-container {
  transform: translateY(100%);
}

.container.container.rightPanelActive .overlay-container {
  transform: translateX(-100%);
}
.container.rightPanelActive .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}
.container.container.rightPanelActive .overlay {
  transform: translateX(50%);
}
.container.container.rightPanelActive .overlay-left {
  transform: translateY(0);
}
.container.container.rightPanelActive .overlay-right {
  transform: translateY(20%);
}
</style>
