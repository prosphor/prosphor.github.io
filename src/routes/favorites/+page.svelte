<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Header from "$lib/components/Header.svelte";
  import MinimalFooter from "$lib/components/MinimalFooter.svelte";
</script>

<Seo
  title="Nick Zhong"
  description="a man with no favorites is a man mired in indecision"
/>

<Header page="favorites"/>

<article class="text-primary-130 font-freight text-[24px]">
  <main class="flex w-full mt-[1.75rem]">
    <div id="left-pane" class="responsive-width">
      <div class="">
        <span class="font-freight text-[28px] font-bold italic underline">
          favorites
        </span>
        <p> 
          I put a lot of stock in other people's favorites. Here are some of mine:
        </p>
      </div>
      <div class="text-lg mt-4">
      </div>
      <div class="mt-4">
        <p class="mb-4">
          ...and here are some quality things that are not
          necessarily my favorite:
        </p>
        <details>
        <summary class="mb-2">good™</summary>
        <div class="px-4">
        </div>
      </details>
      </div>
    </div>
    <div class="right-pane h-[40vh] flex flex-col flex-grow items-center">
      <iframe title="preview" class="flex-grow bg-primary-300"></iframe>
      <div class="italic"> Fig.1 caption here </div>
    </div>
  </main>
</article>

<MinimalFooter page="favorites" />

<style>
</style>
