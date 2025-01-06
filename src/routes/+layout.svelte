<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import { browser, dev } from "$app/environment";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { page } from "$app/state";
  let { children } = $props();
  // from ekzhang.com
  const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
  const reducedMotion =
    browser && matchMedia("(prefers-reduced-motion: reduce)").matches;
</script>

<Header />

{#if isMobile || reducedMotion}
  {@render children()}
{:else}
  {#key page.url}
    <main
      in:fly={{ x: -10, duration: 350, delay: 350, easing: cubicOut }}
      out:fly={{ y: 5, duration: 350, easing: cubicIn }}
    >
      {@render children()}
    </main>
  {/key}
{/if}

