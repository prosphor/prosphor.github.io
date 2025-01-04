<script lang="ts">
  let { page }: { page: 'home' | 'projects' | 'thoughts' | 'favorites'} = $props();

  const navItems = [
    { label: "钟", href: "/", key: "home" },
    { label: "工", href: "/projects", key: "projects" },
    { label: "思", href: "/thoughts", key: "thoughts" },
    { label: "喜", href: "/favorites", key: "favorites" },
    { label: "历", href: "/pdf/Nick_Zhong_CV.pdf", key: "cv" },
  ];

  const colors: Record<string, string> = {
    home: "primary-100",
    projects: "primary-110",
    thoughts: "primary-120",
    favorites: "primary-130",
  };
  
</script>

<header class="text-lg">
  <nav class="flex font-sk">
    {#each navItems as { label, href, key }}
      <a
        href={href}
        target={key === 'cv' ? '_blank' : '_self'}
        rel="noopener noreferrer"
        class="flex flex-grow text-2xl font-thin flex items-center justify-center h-[2.5rem]"
        class:bg-primary-100={page === key && colors[page] === "primary-100"}
        class:bg-primary-110={page === key && colors[page] === "primary-110"}
        class:bg-primary-120={page === key && colors[page] === "primary-120"}
        class:bg-primary-130={page === key && colors[page] === "primary-130"}
        class:text-primary-200={page === key}
        class:text-primary-100={page !== key && colors[page] === "primary-100"}
        class:text-primary-110={page !== key && colors[page] === "primary-110"}
        class:text-primary-120={page !== key && colors[page] === "primary-120"}
        class:text-primary-130={page !== key && colors[page] === "primary-130"}
        class:border={page !== key}
        class:border-primary-100={colors[page] === "primary-100"}
        class:border-primary-110={colors[page] === "primary-110"}
        class:border-primary-120={colors[page] === "primary-120"}
        class:border-primary-130={colors[page] === "primary-130"}
        class:hover:bg-primary-100={colors[page] === "primary-100" && page !== key}
        class:hover:bg-primary-110={colors[page] === "primary-110" && page !== key}
        class:hover:bg-primary-120={colors[page] === "primary-120" && page !== key}
        class:hover:bg-primary-130={colors[page] === "primary-130" && page !== key}
        class:hover:text-primary-200={page !== key}
      >
        {label}
      </a>
    {/each}
  </nav>
</header>

<style>
  @media (max-width: 640px) {
    header {
      width: 100%;
      margin-top: 3rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  @media (min-width: 640px) {
    header {
      width: 75%;
      margin-top: 3rem;
    }
  }

  @media (min-width: 768px) {
    header {
      width: 360px;
      margin-top: 25vh;
      margin-left: 15vw;
    }
  }
</style>
