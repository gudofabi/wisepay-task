const state = {

    steps: [
        {
            step: 1,
            name: 'Welcome Introduction',
            inprogress: true,
            passed: false
        },
        {
            step: 2,
            name: 'Create Password',
            inprogress: false,
            passed: false
        }
    ]
    
}

const getters = {
    
    getSteps: state => state.steps

}

const actions = {
    fetchSteps({commit}) {

        commit('setSteps', state.steps);

    },

    updateSteps({commit}, progress) {
        commit('updateProgress', progress);
    }
}

const mutations = {
    setSteps: (state, steps) => { state.steps = steps },

    updateProgress: (state, progress) => {
        state.steps.map(data => {
            if(data.step === progress.step) {
                data.inprogress = progress.inprogress
                data.passed = progress.passed
            }
        })
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}