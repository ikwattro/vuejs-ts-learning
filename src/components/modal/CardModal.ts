import {Component, Prop, Vue} from 'vue-property-decorator';
import WithRender from './card-modal.html';
import './card-modal.css';

@WithRender
@Component
export default class CardModal extends Vue {
  @Prop() showing!: boolean;

  public close(): void {
    this.$emit('modal-close')
  }
}