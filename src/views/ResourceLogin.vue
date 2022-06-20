<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *
-->

<template>
  <div>
    <header class="home-header wrap">
      <nav-bar/>
    </header>
      <div class="login">
      <el-card>
          <el-divider content-position="center"><span style="font-size:0.3rem; color:rgba(56,149,191,1)">登录访问内部资源</span></el-divider>
          <div v-if="type == 'login'" class="login-body login">
          <van-form @submit="onSubmit" style="padding-top:10px">
            <van-field
              v-model="username"
              name="username"
              label="用户名"
              left-icon="contact"
              placeholder="请输入用户名"
              label-align=right
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              left-icon="closed-eye"
              placeholder="请输入密码"
              label-align=right
            />
            <div class="verify">
              <Verify ref="loginVerifyRef" @error="error" :showButton="false" @success="success" :width="'100%'" :fontSize="'0.3rem'" :type="2"></Verify>
            </div>
            <div style="text-align:center; margin-top:10px">
              <van-button type="primary" round native-type="submit" >登 录</van-button>
            </div>
          </van-form>
        </div>
      </el-card>
     
    </div>
  <footer-info/>
  </div>
</template>


<script>

import navBar from '@/components/NavBar'
import {setLocal} from '@/common/js/utils'

import footerInfo from '@/components/FooterInfo'
import {Toast} from 'vant'
import Verify from 'vue2-verify'
import axios from '../utils/axios'



export default {
  data() {
    return {
      username:[],
      password:[],
      type: 'login',
      verify: false
    }
  },
  components: {
    Verify,
    navBar,
    footerInfo
  },
  methods: {
    dealTriVer() {
      // 执行验证码的验证，通过 this.verify 知道验证码是否填写正确
      this.$refs.loginVerifyRef.$refs.instance.checkCode()
    },
    toggle(v) {
      this.verify = false
      this.type = v
    },
    async onSubmit(values) {
      this.dealTriVer()
      if (!this.verify) {
        Toast.fail('验证码未填或填写错误!')
        return
      }
      if(values.username == ''){
        this.$toast("用户名不能为空")
        return 
      }
      if(values.password == ''){
        this.$toast("密码不能为空")
        return 
      }
      
      if (this.type == 'login') {
        var formData = new FormData()
        formData.append('username', values.username)
        formData.append('password', values.password)
        
        console.log("111111",formData)
        await axios.post('/login',formData).then(res=>{
          this.$message(res.message)
           // 如果成功
          console.log('tocken:',res.JSESSIONID)
          // 登录成功,将token保存到本地,
          setLocal('token', res.JSESSIONID)
          // 存储token开始时间
          setLocal('tokenStartTime',new Date().getTime())
          // 跳转到home页面
          this.$router.push("/Resource")
        })
        
        
      
      } 
    },
    success(obj) {
      this.verify = true
      // 回调之后，刷新验证码
      obj.refresh()
    },
    error(obj) {
      this.verify = false
      // 回调之后，刷新验证码
      obj.refresh()
    }
  },
}
</script>

<style lang="less">

@import '../common/style/mixin';
@import '../common/style/text';
  .login {
    .logo {
      width: 120px;
      height: 120px;
      display: block;
      margin: 80px auto 0px;
    }
    .login-body {
      padding: 0 20px;
    }

    .verify-bar-area {
      margin-top: 24px;
      .verify-left-bar {
        border-color: #c0c0c0;
      }
      .verify-move-block {
        background-color: #c0c0c0;
        color: #fff;
      }
    }
    .verify {
      >div {
        width: 100%;
      }
      display: flex;
      justify-content: center;
      .cerify-code-panel {
        margin-top: 16px;
      }
      .verify-code {
        width: 40%!important;
        float: left!important;
      }
      .verify-code-area {
        float: left!important;
        width: 54%!important;
        margin-left: 14px!important;
        .varify-input-code {
          width: 90px;
          height: 38px!important;
          border: 1px solid #e9e9e9;
          padding-left: 10px;
          font-size: 0.3rem;
        }
        .verify-change-area {
          line-height: 44px;
        }
      }
    }
  }

  .el-card{
    margin: auto;
    width: 400px;
    padding: 20px;
    margin: 40px auto;
    
  }
  .el-card__body{
      padding-top: 0px;
      padding-bottom: 0px;
     
  }

  .el-divider--horizontal{
     margin: 10px 0;
     border-top: 2px solid rgba(56,149,191,1);
 }

.van-button--primary,.van-button--primary.is-active, .van-button--primary:active{background: rgba(56,149,191,1);width:60%;}

.van-button--primary:focus,.van-button--primary:hover {
    background: rgba(56,149,191,0.65);
    border-color: rgba(56,149,191,0.65);
    color:rgb(255, 255, 255);
    width:60%;
}
.van-cell__title.van-field__label.van-field__label--right {
    width: 20%;
}

</style>
