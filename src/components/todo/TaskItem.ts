import {Component, Prop, Vue} from 'vue-property-decorator';
import WithRender from './task-item.html'
import Task from '@/types/Task';

@WithRender
@Component
export default class TaskItem extends Vue {
  @Prop({type: String, default: "Mark as completed"}) readonly buttonText!: string;
  @Prop() task!: Task;

  public emitCompletion(): void {
    this.$emit('taskCompleted', this.task)
  }
  
}
