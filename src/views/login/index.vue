<template>
  <div class="login">
    <a-form
      class="loginForm"
      name="custom-validation"
      ref="formRef"
      :model="formState"
      :rules="rules"
      v-bind="layout"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item has-feedback label="用户名" name="userName">
        <a-input
          v-model:value="formState.userName"
          type="text"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item has-feedback label="密码" name="pass">
        <a-input
          v-model:value="formState.pass"
          type="password"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" html-type="submit">登录</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import {
  RuleObject,
  ValidateErrorEntity,
} from "ant-design-vue/es/form/interface";

import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
interface FormState {
  pass: string;
  checkPass: string;
  age: number | undefined;
}
export default defineComponent({
  setup() {
    const formState: any = reactive({
      userName: "",
      pass: "",
    });

    const validatePass = async (rule: RuleObject, value: string) => {
      if (value === "") {
        return Promise.reject("请输入密码");
      } else {
        return Promise.resolve();
      }
    };
    const validateUserName = async (rule: RuleObject, value: string) => {
      if (value === "") {
        return Promise.reject("请输入用户名");
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      userName: [
        { required: true, validator: validateUserName, trigger: "change" },
      ],
      pass: [{ required: true, validator: validatePass, trigger: "change" }],
    };
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    const router = useRouter();

    const handleFinish = (values: FormState) => {
      router.replace("/discover");
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    const resetForm = () => {
      formState.userName = "";
      formState.pass = "";
    };
    return {
      formState,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
    };
  },
});
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  background: url("../../assets/images/bg.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
}
.loginForm {
  width: 500px;
  position: absolute;
  right: 100px;
  top: 40%;
  transform: translateY(-50%);
}
</style>
