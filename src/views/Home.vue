<template>
  <div>
    <div class="home-container">
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Home',
  
  computed: {

    ...mapGetters({ getCompany: "getCompany" })

  },

  created() {
    this.fetchCompany();
  },

  methods: {

    ...mapActions({
      fetchCompany: "fetchCompany"
    })

  }
}
</script>
