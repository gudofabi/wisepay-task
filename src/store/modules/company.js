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

    },

    updateCompany({commit}, company) {

        commit('updateCompany', company);
        
    }
}

const mutations = {
    setCompany: (state, company) => { state.company = company },

    updateCompany: (state, company) => {
        state.company.email = company.email;
        state.company.password = company.password;
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}