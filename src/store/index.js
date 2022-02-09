import Vue from 'vue';
import Vuex from 'vuex';

import company from './modules/company'
import steps from './modules/onboardingProcess'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        company,
        steps
    }
})