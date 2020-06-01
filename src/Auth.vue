<template>
  <v-card class="signInForm">
    <v-card-title class="title">
      Sign In
    </v-card-title>
    <v-divider></v-divider>
    <v-form id="auth" ref="form" v-model="valid">
      <div>
        <label for="email">
          Email
        </label>
        <v-text-field
          class="textField"
          name="email"
          v-model="email"
          :rules="[rules.required, rules.email]"
          rounded
        ></v-text-field>
        <label for="password">
          Password
        </label>
        <v-text-field
          class="textField"
          name="password"
          v-model="password"
          type="password"
          :rules="[rules.required, rules.password]"
          rounded
        ></v-text-field>
      </div>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        @click="
          login({
            emailAddress: email,
            password: password
          })
        "
        :disabled="!valid"
      >
        Sign In
      </v-btn>
    </v-card-actions>
    <label class="error" v-show="error">
      Something went wrong, check email or password!!
    </label>
  </v-card>
</template>
<script>
import utils from "./js/utils";

export default {
  name: "SignIn",
  data() {
    return {
      valid: false,
      error: false,
      email: "",
      password: ""
    };
  },
  watch: {
    // если как-то изменили email или password, то убераем ошибку
    email() {
      this.error = false;
    },
    password() {
      this.error = false;
    }
  },
  computed: {
    rules() {
      return utils.validators;
    }
  },
  methods: {
    login() {
      // правильнй пароль 123
      if (this.password !== "123") {
        this.error = true;
        return;
      }
      // change flag of user auth
      this.$store.dispatch("auth/setAuth", this.email);
      // go to next page
      this.$router.push({ path: "/greetings" });
    }
  }
};
</script>
<style>
.title {
  text-align: center;
}

.signInForm {
  width: 600px;
  border-radius: 4px;
  margin: auto;
}

.signInForm input {
  border: none;
}

.signInForm label {
  display: block;
  margin: 15px 0 0 0;
  font-size: 0.875rem;
  color: black;
}

.v-text-field__details {
  display: block;
  margin: 12px 0 0 0;
  font-size: 0.875rem;
  color: red;
}

.textField input {
  width: 100%;
  background: lightgrey;
  min-height: 36px;
  font-size: 1.125rem;
  line-height: 21px;
  text-align: left;
  display: inline-block;
  margin: 0 10px 0 0;
}

.textField input:focus {
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.signInForm .error {
  display: block;
  margin: 12px 0 0 0;
  font-size: 0.875rem;
  color: red;
}

button {
  display: block;
  width: 100%;
  max-width: 288px;
  height: 48px;
  min-height: 48px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  text-transform: uppercase;
  background-color: #6b923a;
  box-sizing: border-box;
  font-size: 0.875rem;
  line-height: 16px;
  border: 0px solid #334e11;
  border-radius: 10px;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: 1s;
}

button:disabled {
  background-color: #808080;
}

button:disabled:hover {
  background-color: #808080;
}

button:not(:disabled):hover {
  background-color: #486e18;
  box-sizing: border-box;
  font-size: 1rem;
  border: 0px solid #334e11;
}
</style>
