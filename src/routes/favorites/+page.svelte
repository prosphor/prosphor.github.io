<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Seo
  title="Nick Zhong"
  description="a man with no favorites is a man mired in indecision"
/>

<Header />

<article class="mx-12 text-primary-100 font-americas text-lg">
  <main class="flex w-full mt-[calc(2vh+2vw)] mb-4">
    <div id="left-pane" class="w-full sm:w-3/4 lg:w-[640px]">
      <div class="">
        <p class="w-full sm:w-3/4 lg:w-[420px]"> 
          I put a lot of stock in other people's favorites. <br />
          Here are some of mine:
        </p>
      </div>
      <div class="text-lg mt-4">
      </div>
      <div class="text-lg mt-4">
        <p class="mb-4 w-full sm:w-3/4 lg:w-[420px]">
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

<Footer />

<style>
</style>
