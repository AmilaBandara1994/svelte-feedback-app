<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
	let feedback = [
		
	]

	// $:count = feedback.length
	// $:average = feedback.reduce((a,{rating}) => a + rating,0)/feedback.length

	// const deleteFeedback  = (e)=>{
	// 	const itemId = e.detail
	// 	feedback = feedback.filter((item) => item.id != itemId	)
	// }
	// const feedbackHandler  = (e)=>{
	// 	const new_feedback = {
	// 		id: e.detail.id,
	// 		rating: e.detail.rating,
	// 		text: e.detail.text,
	// 	}
	// 	feedback = [new_feedback , ...feedback];
	// 	// feedback = 
	// 	console.log(new_feedback);
	// }

</script>

<main class="container">
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList/>
	<!-- <FeedbackList   on:delete-feedback={deleteFeedback} /> -->
</main>

<style>

</style>