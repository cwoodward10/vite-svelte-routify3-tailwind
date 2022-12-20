import '$src/app.css';
/* @ts-ignore: no types for this, its just the app module */
import App from '$src/App.svelte';

const app = new App({
  target: document.getElementById('app'),
})

export default app
