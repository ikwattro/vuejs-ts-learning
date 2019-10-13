import Vue from 'vue';
import Vuex from 'vuex';
import Task from '@/types/Task';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {description: 'Hello', completed: false},
      {description: 'Some other task', completed: true}
    ]
  },
  getters: {
    tasks: (state => state.tasks)
  },
  mutations: {
    addTask(state, description: string) {
      state.tasks.push({description, completed: false});
    },
    completeTask(state, task: Task) {
      state.tasks.forEach((t) => {
        if (t.description === task.description) {
          t.completed = true;
        }
      })
    }
  },
  actions: {
    addTask(context, description: string) {
      console.log('commiting adding task');
      context.commit('addTask', description);
    },
    completeTask(context, task: Task) {
      context.commit('completeTask', task);
    }
  },
});
