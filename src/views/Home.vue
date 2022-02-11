<template>
  <div>
    <div class="home-container">
        <WelcomeComponent v-if="data_activeSteps == 1" 
          :company="getCompany" 
          @next-step="func_createAccount"
        />
        <RegisterForm v-if="data_activeSteps == 2"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WelcomeComponent from '../components/process/WelcomeComponent.vue'
import RegisterForm from '../components/process/RegisterForm.vue'

export default {
  name: 'Home',

  components: {
    WelcomeComponent,
    RegisterForm
  },

  data() {
    return {
      data_activeSteps: 1,
    }
  },
  
  computed: {

    ...mapGetters({ getCompany: "getCompany" })

  },

  created() {
    this.fetchCompany();
  },

  methods: {

    ...mapActions({
      fetchCompany: "fetchCompany"
    }),

    func_createAccount(value) {
      this.data_activeSteps = value;
    },

  }
}
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>