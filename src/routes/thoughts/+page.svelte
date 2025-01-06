<script lang="ts">
  import { browser } from "$app/environment";
  import Seo from "$lib/components/Seo.svelte";
  import MinimalFooter from "$lib/components/MinimalFooter.svelte";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import { convertToUTC } from "$lib/utils/timeConversion";
  import { onMount } from "svelte";
  import thoughts from "$lib/layouts/thoughts.yaml";

  const { published: publishedThoughts, starter: starterThoughts } = thoughts;

  let isDropdownOpen = $state(false);
  let sortField = $state("last-updated");
  let sortOrder = $state("desc");

  const sortedThoughts = $derived(
    [...publishedThoughts].sort((a, b) => {
      const dateA = new Date(a[sortField]);
      const dateB = new Date(b[sortField]);
      return sortOrder === "desc"
        ? dateB.valueOf() - dateA.valueOf()
        : dateA.valueOf() - dateB.valueOf();
    })
  );

  let visited: { [filename: string]: string } = $state({});
  const isIntroVisited = $derived("introduction" in visited);

  if (browser) {
    onMount(() => {
      const stored = localStorage.getItem("visited-versions");
      if (stored) {
        visited = JSON.parse(stored);
      }
    });
  }

  function toggleDropdown(): void {
    isDropdownOpen = !isDropdownOpen;
  }

  function handleSort(field: SortField, order: SortOrder): void {
    sortField = field;
    sortOrder = order;
    isDropdownOpen = false;
  }

  function handleLinkClick(thought: Thought): void {
    visited[thought.filename] = thought["last-updated"];
    localStorage.setItem("visited-versions", JSON.stringify(visited));
  }

  function isActive(field: SortField, order: SortOrder): boolean {
    return field === sortField && order === sortOrder;
  }

  function showAlertIcon(thought: Thought) {
    const lastRead = visited[thought.filename];
    if (!lastRead) return false;
    return new Date(thought["last-updated"]) > new Date(lastRead);
  }
</script>

<Seo
  title="Nick Zhong"
  description="The pen moves of its own volition; I am only asked to lay paper before it. Too often I forget."
/>

<article class="font-freight text-[22px] text-primary-120">
  <div class="mt-[1.75rem]">
    <p>
      <span
        class="responsive-width font-freight text-[28px] font-bold italic underline"
      >
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
            <h3>
              {thought.title}
            </h3>
            <p class="text-[16px] italic">
              {thought.summary}
            </p>
          </a>
        {/each}
      </section>
    {/if}
    <Dropdown {toggleDropdown} {isDropdownOpen} {handleSort} {isActive} />
    <section class="layout-md mt-2 responsive-width">
      {#each sortedThoughts as thought (thought.filename)}
        <a
          class="block hover:bg-gray-100 py-1 px-2"
          href={`/thoughts/${thought.filename}`}
          onclick={() => handleLinkClick(thought)}
        >
          <div class="thought">
            <div>
              <div class="flex items-center">
                <h3 class:visited={thought.filename in visited}>
                  {thought.title}
                </h3>
                {#if showAlertIcon(thought)}
                  <div class="relative group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16167d"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="flex justify-center items-center ml-2 mb-0.5 opacity-100"
                      ><title>New content available</title>
                      <circle cx="12" cy="12" r="10" /><line
                        x1="12"
                        x2="12"
                        y1="8"
                        y2="12"
                      /><line x1="12" x2="12.01" y1="16" y2="16" /></svg
                    >
                    <span
                      class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-primary-120 text-white text-sm px-2 py-1 rounded shadow-lg"
                    >
                      New update on {convertToUTC(thought['last-updated'])}
                    </span>
                  </div>
                {/if}
              </div>
              <p
                class:visited={thought.filename in visited}
                class="font-freight font-thin italic text-[16px]"
              >
                {thought.summary}
              </p>
            </div>
            <span class="spacer"></span>
            <span
              class:visited={thought.filename in visited}
              class="text-[16px]">{convertToUTC(thought[sortField])}</span
            >
          </div>
        </a>
      {/each}
    </section>
  </div>
</article>

<MinimalFooter page="thoughts" />

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
