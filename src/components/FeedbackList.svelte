<script>
  // import {onMount, onDestroy} from 'svelte'
  import {FeedbackStore} from '../stores'
  import { fade , scale } from 'svelte/transition'
  import FeedbackItem from "./FeedbackItem.svelte";
  // let feedback = [];

  // const feedbackStore = FeedbackStore.subscribe((data) => feedback = data);

  // onMount(( )=>{
  //   console.log('mounted');
  // })
  // onDestroy(()=>{
  //   feedbackStore()
  // })
     
</script>

{#each $FeedbackStore as feedbk (feedbk.id) }
        
<div in:scale out:fade={{duration: 500}}>
  <FeedbackItem  item={feedbk} />
  <!-- <FeedbackItem  item={feedbk} on:delete-feedback/> -->
</div>
{/each}