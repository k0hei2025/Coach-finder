<template>
  <body class="body">
    <section class="auth">
      <div class="wrapperContainer">
        <p
          class="wrapperContent"
          v-on:click="genereChangeHandler"
          v-if="isAMentor"
        >
          Login as a Mentor
        </p>
        <p class="wrapperContent" v-on:click="genereChangeHandler" v-else>
          Login as a Student
        </p>
      </div>
      <h3>Ready To Start Your Journey? You're in the right place</h3>
      <!-- <h1>{login ? 'Login' : 'Sign Up'}</h1> -->
      <form v-on:submit.prevent onSubmit="{submitHandler}">
        <div class="control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required v-model="authData.email" />
        </div>
        <div class="control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            v-model="authData.password"
          />
        </div>
        <p
          class="AuthenticationStatusStyle_Success"
          v-if="hasShowStatus && authenticationStatus.isSuccessful"
        >
          {{ this.authenticationStatus.message }}
        </p>
        <p class="AuthenticationStatusStyle_Failed" v-else-if="hasShowStatus">
          {{ this.authenticationStatus.message }}
        </p>
        <div class="actions">
          <button v-on:click="submitHandler">
            {{ isLogin ? 'Login' : 'Create Account' }}
          </button>
          <button v-on:click="switchAuthHandler">
            {{ isLogin ? 'go to SignUp' : ' go to Login' }}
          </button>
        </div>
      </form>
    </section>
  </body>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      authData: {
        email: '',
        password: '',
      },
      isLogin: false,
      authenticationStatus: {
        message: '',
        isSuccessful: false,
      },
      hasShowStatus: false,
    };
  },
  async created() {
    this.userDataHandler();
  },
  computed: {
    ...mapGetters(['authenticatedData', 'isAMentor']),
  },
  mounted() {
    console.log('data from store', this.authenticatedData);
  },

  methods: {
    ...mapMutations(['addAuthenticateUserData', 'genereChangeHandler']),
    ...mapActions(['userDataHandler']),
    switchAuthHandler() {
      this.hasShowStatus = false;
      this.isLogin = !this.isLogin;
      console.log('autheHadnler', this.isLogin);
    },
    async submitHandler() {
      console.log(this.authData, 'authData');

      if (!this.isLogin) {
        const authenticateUrl = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXPy6gCQzM3hPGmD6HKf-Uy_DV1MAcOeo',
          {
            method: 'POST',
            body: JSON.stringify({
              email: this.authData.email,
              password: this.authData.password,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const resSignUpAuthenticate = await authenticateUrl.json();

        if (resSignUpAuthenticate.error) {
          this.authenticationStatus.message =
            resSignUpAuthenticate.error.message;
          this.authenticationStatus.isSuccessful = false;
        } else {
          this.authenticationStatus.message = 'Signed Up Successfully';
          this.authenticationStatus.isSuccessful = true;
        }

        console.log(resSignUpAuthenticate, 'data after signup', this.error);

        this.hasShowStatus = true;
      } else {
        const signInAuthenticateUrl = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXPy6gCQzM3hPGmD6HKf-Uy_DV1MAcOeo',
          {
            method: 'POST',
            body: JSON.stringify({
              email: this.authData.email,
              password: this.authData.password,
            }),
            header: {
              'Content-Type': 'application/json',
            },
          }
        );
        const resData = await signInAuthenticateUrl.json();
        console.log(resData, 'resData');
        const { idToken, localId } = resData;
        this.addAuthenticateUserData({ idToken, localId });
        if (resData.error) {
          this.authenticationStatus.message = resData.error.message;
          this.authenticationStatus.isSuccessful = false;
        } else {
          this.authenticationStatus.message = 'Successfully Logged In';
          this.authenticationStatus.isSuccessful = true;
        }
        this.hasShowStatus = true;
        if (this.isAMentor) {
          if (localId) {
            this.$router.push('/register');
          }
        }
        if(!this.isAMentor) {
          if(localId) {
            this.$router.push('/register_student')
          }
        }
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Asap:ital@1&family=Luckiest+Guy&family=Roboto:wght@100;300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Lato&family=Poppins:wght@200&family=Roboto:wght@100;300&display=swap');

.auth {
  width: 95%;
  max-width: 25rem;

  /* border-radius: 6px; */
  /* background-color: rgba(75, 25, 25, 0.7); */
  background-color: rgba(255, 255, 255);
  backdrop-filter: blur(10px);
  /* box-shadow: 0 1px 40px rgba(255, 255, 255, 0.95); */
  border: 5px solid #f7ea00;
  border-radius: 8px;
  padding-top: 1rem;
  text-align: center;
  transition: all 0.2s;
  margin-left: 39%;
  padding: 3rem;
  overflow: hidden;
}

.auth:hover {
  box-shadow: 0 1px 40px #000957;
  border: none;
}

.AuthenticationStatusStyle_Success {
  color: Green;
  font-weight: bold;
  font-size: 23px;
  font-family: 'Lato', sans-serif;
}
.AuthenticationStatusStyle_Failed {
  color: Red;
  font-weight: bold;
  font-size: 23px;
  font-family: 'Lato', sans-serif;
}

.body {
  height: 83vh;
  /* background-color: green; */
  font-weight: 900;
  overflow: hidden;
  padding: 5rem;
}

.auth h1 {
  /* text-align: center; */
  font-weight: normal;
  letter-spacing: 1px;
  color: #1c2431;
}

.auth h3 {
  font-weight: lighter;
  letter-spacing: 1px;
  color: black;
  margin-bottom: 3rem;
}

.control {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.control label {
  text-align: left;
  color: #1c2431;
  font-weight: normal;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.control input {
  font: inherit;
  /* background-color: #f1e1fc; */
  color: #1c2431;
  /* border-radius: 4px; */
  border: none;
  border-bottom: 2px solid #777;
  width: 100%;
  text-align: left;
  padding: 0.25rem;
}
.control input:focus {
  border-bottom: 2px solid #1c2431;
  outline: none;
}

.actions {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.actions button {
  margin-top: 2rem;
  cursor: pointer;
  font: inherit;
  color: white;
  background-color: #000957;
  border: 1px solid white;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: lighter;
  letter-spacing: 2px;
  padding: 0.5rem 2.5rem;
}

.actions button:hover {
  background-color: #f7ea00;
  border-color: #f7ea00;
  color: black;
}

.actions.toggle {
  font-weight: normal;
  margin-top: 1rem;
  background-color: transparent;
  color: #1c2431;
  border: none;
  padding: 0.15rem 1.5rem;
  transition: all 0.2s;
}

.actions.toggle:hover {
  background-color: transparent;
  color: black;
}
.wrapperContent {
  color: ivory;
  font-size: 18px;
  position: relative;
  top: 5px;
  font-family: 'Asap', sans-serif;
}
.wrapperContainer {
  background-color: #000957;
  transform: rotate(40deg);
  position: relative;

  left: 30%;
  height: 4vh;
  transform: rotateZ(45deg) translateX(1rem) translateY(-2rem);
  cursor: pointer;
}
.wrapperContainer:hover {
  background-color: #99c4c8;
  box-shadow: 2px 2px 4px 2px #000957;
}
</style>
