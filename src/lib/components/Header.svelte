<script lang="ts">
  import { page } from "$app/stores";

  /**
   * Navigation items:
   * - `label` is what appears
   * - `href` is the route
   * - `key` helps us map to a "page key" for styling
   */
  const navItems = [
    { label: "钟", href: "/", key: "home" },
    { label: "工", href: "/projects", key: "projects" },
    { label: "思", href: "/thoughts", key: "thoughts" },
    { label: "喜", href: "/favorites", key: "favorites" },
    { label: "历", href: "/pdf/Nick_Zhong_CV.pdf", key: "cv" },
  ];

  /**
   * For each route key, we map it to a color variant (Tailwind style).
   * You can add/edit these as needed.
   */
  const colors: Record<string, string> = {
    home: "primary-100",
    projects: "primary-110",
    thoughts: "primary-120",
    favorites: "primary-130",
  };

  function getActiveKey(pathname: string): string {
    if (pathname === "/") return "home";
    const trimmed = pathname.replace(/\/$/, "");
    const segments = trimmed.split("/");

    switch (segments[1]) {
      case "projects":
        return "projects";
      case "thoughts":
        return "thoughts";
      case "favorites":
        return "favorites";
      default:
        return "";
    }
  }

  function linkClasses(activeKey: string, linkKey: string): string {
    const color = colors[activeKey];
    const isActive = activeKey === linkKey;

    let base =
      "flex flex-grow text-2xl font-thin items-center justify-center h-[2.5rem]";

    if (isActive) {
      return `${base} bg-${color} text-primary-200`;
    } else {
      return [
        base,
        `text-${color}`,
        `border border-${color}`,
        `hover:bg-${color} hover:text-primary-200`,
      ].join(" ");
    }
  }
</script>

<header class="text-lg">
  <nav class="flex font-sk">
    {#each navItems as { label, href, key }}
      {#if key === "cv"}
        <a
          {href}
          target="_blank"
          rel="noopener noreferrer"
          class={linkClasses(getActiveKey($page.url.pathname), key)}
        >
          {label}
        </a>
      {:else}
        <a {href} class={linkClasses(getActiveKey($page.url.pathname), key)}>
          {label}
        </a>
      {/if}
    {/each}
  </nav>
</header>
