<template>
  <t-modal :click-to-close="false" name="register">
    <template slot="close">
      <svg class="w-full h-full">
        <use xlink:href="/img/icon/free/sprite.svg#close"></use>
      </svg>
    </template>
    <template #header>
      <h3>Registration</h3>
    </template>
    <section-social class="mb-5" />
    <form class="grid grid-cols-1 gap-5" @submit.prevent="register">
      <div class="relative">
        <t-input
          v-model="user.username"
          class="!pl-12"
          variant="strong"
          placeholder="Login"
        ></t-input>
        <img
          class="absolute transform -translate-y-1/2 top-1/2 left-4"
          src="/img/icon/user.svg"
          alt=""
        />
      </div>
      <div class="relative">
        <t-input
          v-model="user.password"
          class="!pl-12"
          variant="strong"
          type="password"
          placeholder="Password"
        ></t-input>
        <img
          class="absolute transform -translate-y-1/2 top-1/2 left-4"
          src="/img/icon/password.svg"
          alt=""
        />
      </div>
      <div class="relative">
        <t-input
          v-model="user.password_confirmation"
          class="!pl-12"
          variant="strong"
          type="password"
          placeholder="Repeat Password"
        ></t-input>
        <img
          class="absolute transform -translate-y-1/2 top-1/2 left-4"
          src="/img/icon/password.svg"
          alt=""
        />
      </div>
      <div class="relative">
        <t-input
          v-model="user.email"
          class="!pl-12"
          variant="strong"
          type="email"
          placeholder="Email"
        ></t-input>
        <img
          class="absolute transform -translate-y-1/2 top-1/2 left-4"
          src="/img/icon/email.svg"
          alt=""
        />
      </div>
       <t-button type="button" @click="verify()" variant="primary">
        <div class="flex items-center justify-center py-2">
          <span>Verify</span>
          <img class="ml-2" src="/img/icon/next.svg" alt="" />
        </div>
      </t-button>
      <div class="relative">
        <t-input
          v-model="user.otpCode"
          class="!pl-12"
          variant="strong"
          type="number"
          placeholder="OTP Code"
        >
        <img
          class="absolute transform -translate-y-1/2 top-1/2 left-4"
          src="/img/icon/password.svg"
          alt=""
        />
        </t-input>
      </div>
      <p>
          By registering you accept the terms<br />
        <a href="#" class="font-semibold text-primary"
          >and user agreement</a
        >
      </p>
      <t-button type="submit" variant="primary">
        <div class="flex items-center justify-center py-2">
          <span>Register</span>
          <img class="ml-2" src="/img/icon/next.svg" alt="" />
        </div>
      </t-button>
    </form>
  </t-modal>
</template>

<script>
let  conditionOne = false;
let clicked = false;
import sectionSocial from './section-social.vue'
export default {
  components: { sectionSocial },
  data() {
    return {
      user: {
        username: '',
        password: '',
        password_confirmation: '',
        email: '',
        otpCode: '',
        correctCode: '',
      },
    }
  },
  methods: {
    async register() {
      if(conditionOne == true){
        if(this.user.otpCode == this.user.correctCode){
          await this.$axios
          .$post('/api/v1/auth/register', this.user)
          .then(async (data) => {
            try {
              await this.$auth.setUserToken(data.data.token)
              this.$modal.hide('register')
            } catch (e) {
              console.log(e)
            }
          })
        }
        else{
          alert("There verification failed in our system.");
        }
      }
      else{
        alert("Firstly, you must verify your email.");
      }
    },
    async verify(){
      if(this.user.email == "" || !this.user.email.includes("@")){
          alert("Invalid email."); 
      }
      else{
        let userEmail = this.user.email;
        let code = (Math.random() * 1000).toFixed(0).padStart(3, '0');
        console.log(code);
        this.user.correctCode = code;
        fetch("https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'a2e0c06363msh3664c0b736ff143p1e4e49jsn838fe74d7879',
            'X-RapidAPI-Host': 'http://localhost:80/'
          },
          body: {
            personalizations: [
              {
                to: [
                  {
                    email: userEmail
                  }
                ],
                subject: 'Your OTP Code is ready.'
              }
            ],
            from: {
              email: 'info@sofixar.com'
            },
            content: [
              {
                type: 'text/plain',
                value: 'Your OTP Code is: '+ code,
              }
            ]
          }}).then(data => data.json())
          .then(data => {
              conditionOne = true;
          });
      }
    },
  },
}
</script>

<style></style>
