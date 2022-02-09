const state = {

    company: {
        name: 'Gudo Fabi',
        merchant: 'Visa',
        company_logo: '',
        email: '',
        password: ''
    }
    
}

const getters = {
    
    getCompany: state => state.company

}

const actions = {
    fetchCompany({commit}) {

        commit('setCompany', state.company);

    }
}

const mutations = {
    setCompany: (state, company) => { state.company = company }
}


export default {
    state,
    getters,
    actions,
    mutations
}