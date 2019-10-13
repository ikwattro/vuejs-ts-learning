import {Component, Prop, Vue} from 'vue-property-decorator';
import WithRender from './to-do.html';
import ToDoForm from './ToDoForm';
import TaskItem from './TaskItem';
import Task from '@/types/Task';

@WithRender
@Component({
  components: {
    'to-do-form': ToDoForm,
    'task-item': TaskItem
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

  public completeTask(task: Task): void {
    this.tasks.forEach(function (t) {
      if (task.description === t.description) {
        t.completed = true
      }
    })
  }
}