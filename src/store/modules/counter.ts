import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"


export class State {
    count: number = 5;
}

const getters = <GetterTree<State, any>> {
    count(state: State): number {
        return state.count
    }
};

const mutations = <MutationTree<State>> {
    inc(state: State, amount: number) {
        state.count += amount
    },
    dec(state: State) {
        state.count -= 1
    }
};

const actions = <ActionTree<State, any>> {
    inc(store: ActionContext<State, any>, amount: number) {
        store.commit('inc', 1)
    },
    dec(store: ActionContext<State, any>) {
        store.commit('dec', 1)
    }
};

export const counter = {
    state: new State(),
    getters: getters,
    mutations: mutations,
    actions: actions
};