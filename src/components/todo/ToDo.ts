import {Component, Prop, Vue} from 'vue-property-decorator';
import WithRender from './to-do.html';
import ToDoForm from './ToDoForm';
import Task from '@/types/Task';

@WithRender
@Component({
  components: {
    'to-do-form': ToDoForm
  }
})
export default class ToDo extends Vue {
  public tasks: Task[] = [
    {description: 'Task 1', completed: false},
    {description: 'Task 2', completed: true}
  ];

  public addTask(description: string): void {
    this.tasks.push({description, completed: false})
  }
}