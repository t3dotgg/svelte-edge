<script lang="ts">
	type Todo = {
		uid: string;
		created_at: Date;
		text: string;
		done: boolean;
		pending_delete: boolean;
	};

	export let todos: Todo[];

	console.log('todos?', todos);
</script>

<svelte:head>
	<title>Todos</title>
	<meta name="description" content="A todo list app" />
</svelte:head>

<div>
	<h1>Look in console because Svelte eats my numbers 😭</h1>
	<div>
		<h2>
			Request-to-paint time: <span id="p-full-time" />
			ms
		</h2>
		<a href="/">Back</a>
		<script>
			const currentTime = new Date();

			// round trip time
			const fullTime = currentTime - window.performance.timing.requestStart;
			document.getElementById('p-full-time').innerHTML = fullTime;
			console.log('FULL TIME SINCE SVELTE EATS IT', fullTime);
		</script>
	</div>
</div>
