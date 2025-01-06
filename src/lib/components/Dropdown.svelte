<script>
  import DownArrow from "./DownArrow.svelte";
  import Checkmark from "./Checkmark.svelte";
  let { toggleDropdown, isDropdownOpen, handleSort, isActive } = $props()
</script>

<div
class="button-container z-50 responsive-width flex justify-end text-[16px]"
>
<p class="mr-1 pt-0.5">Sort By:</p>
<div class="relative">
  <button
    class="bg-primary-120 text-primary-200 flex items-center justify-center pl-2.5 pr-1.5 pt-0.5"
    onclick={toggleDropdown}
  >
    Time
    <DownArrow />
  </button>
  {#if isDropdownOpen}
    <div
      class="absolute right-0 py-1 w-48 bg-primary-200 border border-gray-200 shadow-md z-50"
    >
      <p
        class="px-4 py-1 text-primary-120 font-bold border-b border-primary-120"
      >
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
      <p
        class="px-4 py-1 text-primary-120 font-semibold border-b border-primary-120"
      >
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
    </div>
  {/if}
</div>
</div>