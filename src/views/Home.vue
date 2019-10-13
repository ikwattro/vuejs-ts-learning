<template>
<div>
<to-do></to-do>
<highlight></highlight>
<card-modal :showing="showExampleModal" @modal-close="closeModal">
  <h2>Example modal</h2>
  <p>This is example text passed through to the modal via a slot.</p>
</card-modal>
<v-btn small @click.prevent="showModal">show modal</v-btn>
</div>

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ToDo from '@/components/todo/ToDo.ts';
import Highlight from '@/components/highlight/Highlight';
import CardModal from '@/components/modal/CardModal';

@Component({
  components: {
    ToDo,
    Highlight,
    CardModal
  },
})
export default class Home extends Vue {
  public showExampleModal: boolean;

  constructor() {
    super();
    this.showExampleModal = false;
  }

  public showModal(): void {
    this.showExampleModal = true;
  }

  public closeModal(): void {
    this.showExampleModal = false;
  }
}
</script>