<script lang="ts">
  let { page }: { page: 'projects' | 'thoughts' | 'favorites'} = $props();
  const colors: Record<string, string> = {
    projects: "primary-110",
    thoughts: "primary-120",
    favorites: "primary-130",
  };
</script>

<footer class="font-freight text-{colors[page]} pb-8 mt-8 sticky bottom-0">
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
  @media (max-width: 640px) {
    footer {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  @media (min-width: 640px) {
    footer {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  @media (min-width: 768px) {
    footer {
      margin-left: 15vw;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>