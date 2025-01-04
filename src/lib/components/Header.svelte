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

  function navLinkClasses(key: string) {
    const color = colors[page];
    const isActive = (page === key);
    const base =
      'flex flex-grow text-2xl font-thin flex items-center justify-center h-[2.5rem]';

    if (isActive) {
      return [
        base,
        `bg-${color}`,
        'text-primary-200'
      ].join(' ');
    } else {
      return [
        base,
        `text-${color}`,
        'border',
        `border-${color}`,
        `hover:bg-${color}`,
        'hover:text-primary-200'
      ].join(' ');
    }
  }
  
</script>

<header class="text-lg">
  <nav class="flex font-sk">
    {#each navItems as { label, href, key }}
      <a
        href={href}
        target={key === 'cv' ? '_blank' : '_self'}
        rel="noopener noreferrer"
        class={navLinkClasses(key)}
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
