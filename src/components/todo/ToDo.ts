import {Component, Prop, Vue} from 'vue-property-decorator';
import WithRender from './to-do.html';
import ToDoForm from './ToDoForm';
import TaskItem from './TaskItem';
import Task from '@/types/Task';
// import store from '@/store';

@WithRender
@Component({
  components: {
    'to-do-form': ToDoForm,
    'task-item': TaskItem
  }
})
export default class ToDo extends Vue {
  private tasks: Array<Task> = [];

  get Tasks(): Task[] {
    let tasks = this.$store.state.tasks;
    return tasks
  }

  public addTask(task: Task): void {
    console.log(task);
    this.$store.dispatch('addTask', task);
  }

  public completeTask(task: Task): void {
    this.$store.dispatch('completeTask', task);
  }
}