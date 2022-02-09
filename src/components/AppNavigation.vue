<template>
<div>
    <div class="nav-container">
        <img src="/img/logo-wise-pay.svg" alt="" class="logo">
        <div class="onboarding-process-cover">
                <h3>Payer Onboarding</h3>
                <OnboardingStep v-for="(data, index) in getSteps" 
                    :key="index" 
                    :process="data" 
                />
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import OnboardingStep from './OnboardingStep.vue';
export default {
    name: 'AppNavigation',
    
    components: {
        OnboardingStep
    },

    computed: {
        ...mapGetters({
            getSteps: "getSteps"
        })
    },

    created() {

        this.fetchSteps();
    
    },

    methods: {
        ...mapActions({
            fetchSteps: "fetchSteps"
        })
    }
}
</script>

<style lang="scss" scoped>
.nav-container {
    position: relative;
    width: 450px;
    height: 100vh;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;

    .logo {
        width: 180px;
        height: auto;
    }

    .onboarding-process-cover {
        margin: 80px 0;
        text-align: center;

        h3{
            text-transform: capitalize;
            font-weight: 400;
            font-size: 20px;
            margin-bottom: 30px;
        }

    }
}
</style>