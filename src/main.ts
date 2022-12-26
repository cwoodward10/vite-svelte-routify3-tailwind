import '$src/app.css'; // the default styles that come with svelte. can delete
import '$assets/app.css;'
/* @ts-ignore: no types for this, its just the app module */
import App from '$src/App.svelte';

const app = new App({
  target: document.getElementById('app'),
})

export default app
