<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Header from "$lib/components/Header.svelte";
  import MinimalFooter from "$lib/components/MinimalFooter.svelte";
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();

  const favs = data.favorites.favs;
  const likes = data.favorites.likes;

  let preview: string = $state("");

  function handleHover(src: string) {
    preview = src || "";
  }
  function handleUnhover() {
    preview = "";
  }
</script>

<Seo
  title="Nick Zhong"
  description="a man with no favorites is a man mired in indecision"
/>

<Header page="favorites" />

<article class="text-primary-130 font-freight text-[20px]">
  <main class="flex mt-[1.75rem]">
    <div id="left-pane" class="fav-width">
      <div class="">
        <span class="font-freight text-[28px] font-bold italic underline">
          favorites
        </span>
        <p>
          I put a lot of stock in other people's favorites. Here are some of
          mine:
        </p>
      </div>
      <div class="mt-4">
        <div>
          {#each Object.entries(favs) as [key, value]}
            {#if Array.isArray(value)}
              <details>
                <summary class="font-bold">{key.replace(/_/g, " ")}</summary>
                <ul>
                  {#each value as item (item.category)}
                    {#if item.link}
                      <a
                        href={item.link}
                        class="hover:underline"
                        target="_blank"
                      >
                        <li
                          onmouseenter={() => handleHover(item.src)}
                          onmouseleave={() => handleUnhover()}
                        >
                          <span class="font-bold">{item.category}</span>:
                          {item.value}
                        </li>
                      </a>
                    {:else}
                      <li>
                        <span class="font-bold">{item.category}</span>:
                        {item.value}
                      </li>
                    {/if}
                  {/each}
                </ul>
              </details>
            {/if}
          {/each}
        </div>
      </div>
      <div class="mt-4">
        <p class="mb-4">
          ...and here are some quality things that are not necessarily my
          favorite:
        </p>
        <details>
          <summary class="mb-2 font-bold">good™</summary>
          <div class="px-4">
            {#each Object.entries(likes) as [key, value]}
              {#if Array.isArray(value)}
                <details>
                  <summary class="font-bold">{key.replace(/_/g, " ")}</summary>
                  <ul>
                    {#each value as item}
                      <li>
                        {#if item.link}
                          <a
                            href={item.link}
                            onmouseenter={() => handleHover(item.src)}
                            onmouseleave={() => handleUnhover()}
                            class="hover:underline"
                            target="_blank"
                          >
                            {item.value}
                          </a>
                        {:else}
                          {item.value}
                        {/if}
                      </li>
                    {/each}
                  </ul>
                </details>
              {/if}
            {/each}
          </div>
        </details>
      </div>
    </div>
    {#if preview}
      <div
        class="right-pane flex flex-col flex-grow justify-center items-center px-4"
      >
        <div class="fixed top-[calc(50%+40px)] transform -translate-y-1/2">
          <img alt="preview" class="max-w-[400px] h-auto" src={preview} />
        </div>
      </div>
    {/if}
  </main>
</article>

<MinimalFooter page="favorites" />

<style>
  ul {
    list-style-type: disc;
    margin-left: 2rem;
  }
</style>
