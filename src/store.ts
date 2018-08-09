import Vue from 'vue';
import Vuex from 'vuex';
import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"

Vue.use(Vuex);

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

export default new Vuex.Store({
  state: new State(),
  mutations: mutations,
  actions: actions,
  getters: getters,
});
