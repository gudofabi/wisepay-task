const state = {

    steps: [
        {
            step: 1,
            name: 'Welcome Introduction',
            passed: false
        },
        {
            step: 2,
            name: 'Create Password',
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

    }
}

const mutations = {
    setSteps: (state, steps) => { state.steps = steps }
}


export default {
    state,
    getters,
    actions,
    mutations
}