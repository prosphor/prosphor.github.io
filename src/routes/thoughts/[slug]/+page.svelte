<script lang="ts">
  import Markdown from "$lib/components/Markdown.svelte";
  let { data } = $props();
</script>

<article class="markdown font-freight">
  <div class="font-freight">
    <h1>{data.postData.title}</h1>
    <div class="flex justify-between">
      <div class="subheading">{data.postData.date}</div>
      <a href="/thoughts" class="subheading"> Return to thoughts </a>
    </div>
    {#if data.postData.note}
      <div class="subheading italic mt-2">Author's Note: {data.postData.note}</div>
    {/if}
    <div class=mt-6></div>
    <Markdown source={data.postData.body} />
  </div>
</article>


<style>
  .subheading {
    font-size: 16px;
  }
</style>