import {Component, Prop, Vue} from 'vue-property-decorator';
import WithRender from './highlight.html';

@WithRender
@Component
export default class Highlight extends Vue {

  get lastItem(): string {
    let tasks = this.$store.getters.tasks;
    return tasks.length > 2 
      ? tasks[tasks.length - 1].description 
      : null;
  }
}