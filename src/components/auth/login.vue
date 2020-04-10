<template>
  <section id="login">
    <div class="container">
      <div class="row">
        <div class="col-md-5 offset-md-4">
          <div class="card form-holder">
            <div class="card-body">
              <h4>LOGIN</h4>
              <h6>Login to continue</h6>
              <el-form label-position="top" ref="form" :model="form" label-width="120px">
                <el-form-item label="Email">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="Password">
                  <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button class="login-button" native-type="submit" block>Login</el-button>
                </el-form-item>
                <a class="forgot-password" href="#">Forgot password?</a>
              </el-form>

              <p class="text-center mt-4">Or</p>
              <el-row>
                <el-button class="google-button" native-type="submit" block>Login With Google</el-button>
                <p class="text-center mt-4">
                  Dont Have an Account?
                  <router-link to="/sign-up">Sign up</router-link>
                </p>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: { name: "", password: "" }
    };
  }
};
</script>
<style>
#login {
  /* background: #f7f9fb; */
}
.form-holder {
  margin-top: 20%;
  margin-bottom: 20%;
}
.login-button {
  width: 100%;
  background: #1d3c6e;
  color: #fff;
}
.google-button {
  width: 100%;
  background: transparent;
  color: #000000;
}
.el-form-item {
  margin-bottom: 18px;
}
.el-form--label-top .el-form-item__label {
  padding: 0 0 0px !important;
}
</style>