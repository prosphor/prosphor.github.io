<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Header from "$lib/components/Header.svelte";
  import MinimalFooter from "$lib/components/MinimalFooter.svelte";
  import thoughts from "$lib/thoughts/thoughts.yaml";
  import Checkmark from "$lib/components/Checkmark.svelte";
  import Downarrow from "$lib/components/Downarrow.svelte";
  import { convertToUTC } from "$lib/utils/timeConversion";
  import { onMount } from "svelte";
  let visited: string[] = $state([]);
  let isDropdownOpen = $state(false);
  let sortField = $state("date-published");
  let sortOrder = $state("desc");

  const isIntroVisited = $derived(visited.includes("introduction"));

  const published = $derived(
    thoughts.published.slice().sort((a: Thought, b: Thought) => {
      const dateA = new Date(a[sortField as keyof Thought]);
      const dateB = new Date(b[sortField as keyof Thought]);
      return sortOrder === "desc"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    })
  );

  onMount(() => {
    visited = JSON.parse(localStorage.getItem("visited") || "[]");
  });

  function toggleDropdown(): void {
    isDropdownOpen = !isDropdownOpen;
  }

  function handleSort(field: SortField, order: SortOrder): void {
    sortField = field;
    sortOrder = order;
    isDropdownOpen = false;
  }

  function handleLinkClick(thought: Thought): void {
    if (!visited.includes(thought.filename)) {
      visited.push(thought.filename);
      localStorage.setItem("visited", JSON.stringify(visited));
    }
  }

  function isActive(field: SortField, order: SortOrder): boolean {
    return field === sortField && order === sortOrder;
  }
</script>

<Seo
  title="Nick Zhong"
  description="The pen moves of its own volition; I am only asked to lay paper before it. Too often I forget."
/>

<Header page="thoughts"/>

<article class="font-freight text-[20px] text-primary-120">
  <main class="mt-[1.75rem]">
    <p>
      <span class="responsive-width font-freight text-[28px] font-bold italic underline">
        thoughts
      </span>
    </p>
    {#if !isIntroVisited}
      <section class="layout-md responsive-width">
        {#each thoughts.starter as thought}
          <a
            class="block hover:bg-gray-100 py-1 px-2"
            onclick={() => handleLinkClick(thought)}
            href={`/thoughts/${thought.filename}`}
          >
            <div>
              {thought.title}
            </div>
            <div class="text-sm italic">
              {thought.summary}
            </div>
          </a>
        {/each}
      </section>
    {/if}

    <div
      class="button-container z-50 responsive-width flex justify-end text-[16px]"
    >
      <p class="mr-1 pt-0.5">Sort By:</p>
      <div class="relative">
        <button
          class="bg-primary-120 text-primary-200 flex items-center justify-center pl-2 pr-2 pt-0.5"
          onclick={toggleDropdown}
        >
          Time
          <Downarrow />
        </button>
        {#if isDropdownOpen}
          <div
            class="absolute right-0 py-1 w-48 bg-primary-200 border border-gray-200 shadow-md z-50"
          >
            <p class="px-4 py-1 text-primary-120 font-semibold border-b border-primary-120">
              Date Published
            </p>
            <button
              class="mt-0.5 w-full px-4 py-1 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
              onclick={() => handleSort("date-published", "desc")}
            >
              <span>Newest First</span>
              {#if isActive("date-published", "desc")}
                <Checkmark />
              {/if}
            </button>
            <button
              class="w-full px-4 py-1 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
              onclick={() => handleSort("date-published", "asc")}
            >
              <span>Oldest First</span>
              {#if isActive("date-published", "asc")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              {/if}
            </button>

            <p class="px-4 py-1 text-primary-120 font-bold border-b border-primary-120">
              Last Updated
            </p>
            <button
              class="w-full px-4 py-1 mt-0.5 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
              onclick={() => handleSort("last-updated", "desc")}
            >
              <span>Newest First</span>
              {#if isActive("last-updated", "desc")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              {/if}
            </button>
            <button
              class="w-full px-4 py-1 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
              onclick={() => handleSort("last-updated", "asc")}
            >
              <span>Oldest First</span>
              {#if isActive("last-updated", "asc")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              {/if}
            </button>
          </div>
        {/if}
      </div>
    </div>

    <section class="layout-md mt-2 responsive-width">
      {#each published as thought}
        <a
          class="block hover:bg-gray-100 py-1 px-2"
          class:visited={visited.includes(thought.filename)}
          href={`/thoughts/${thought.filename}`}
          onclick={() => handleLinkClick(thought)}
        >
          <div class="thought">
            <div>
              {thought.title}
            </div>
            <span class="spacer"></span>
            <span class="text-sm">{convertToUTC(thought[sortField])}</span>
          </div>
          <div class="font-freight font-thin italic text-sm">
            {thought.summary}
          </div>
        </a>
      {/each}
    </section>
  </main>
</article>

<MinimalFooter page="thoughts"/>

<style>
  .thought {
    display: flex;
    white-space: nowrap;
  }
  .spacer {
    flex: 1;
  }
  .visited {
    opacity: 0.3;
  }
</style>
