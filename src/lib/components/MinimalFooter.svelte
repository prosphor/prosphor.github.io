<script lang="ts">
  let { page }: { page: 'projects' | 'thoughts' | 'favorites'} = $props();
  const colors: Record<string, string> = {
    projects: "primary-110",
    thoughts: "primary-120",
    favorites: "primary-130",
  };
</script>

<footer class="font-freight text-{colors[page]} pb-8 mt-8  mx-auto text-center sticky bottom-0 left-0 right-0">
  <div class="">
    <a href="https://github.com/prosphor" target="_blank" rel="noopener noreferrer" class="hover:underline">
      github
    </a>
    <br>
    —
    <br>
    <p>
      nickxzhong [at] gmail [dot] com
    </p>

  </div>
</footer>

<style>
</style>