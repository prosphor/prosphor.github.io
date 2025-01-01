<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
	let { children }: { children: Snippet} = $props();
</script>

<!-- <svelte:head>
  {#if !dev}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-156644599-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-156644599-1");
    </script>
  {/if}
</svelte:head> -->


{@render children()}