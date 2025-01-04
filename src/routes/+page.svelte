<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let preview: string = $state("");

  function handleHover(src: string) {
    preview = src || "";
  }
  function handleUnhover() {
    preview = "";
  }
</script>

<Seo title="Nick Zhong" description="A personal website for Nick Zhong" />

<Header page="home" />

<article class="text-primary-100 font-freight text-[24px]">
  <main class="flex mt-[1.75rem]">
    <div>
      <p class="responsive-width">
        <a
          href="mailto:zhongxnicholas@gmail.com"
          onmouseenter={() => handleHover("/images/profile.webp")}
          onmouseleave={() => handleUnhover()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="font-bold italic text-[28px]"> nick zhong</span>
        </a>
        is ever-curious, loves a good list, and dislikes handling tasks concurrently.

        <br />
        <br />
      </p>
      <div class="responsive-width">
        interests:
        <ul>
          <li><Link text="sharing stories" link="" /></li>
        </ul>
      </div>
      <div class="responsive-width">
        <br />
        based in <Link text="singapore" link="" />
        <br />
        feel free to reach out<span class="font-bold text-[28px]">~</span>
        <br />
        <br />
      </div>
    </div>
    {#if preview}
      <div
        class="right-pane flex flex-col flex-grow justify-center items-center px-4 ml-[30px]"
      >
        <div class="fixed top-[calc(50%-5px)] transform -translate-y-1/2">
          <img alt="preview" class="w-auto h-[400px]" src={preview} />
        </div>
      </div>
    {/if}
  </main>
</article>

<Footer />

<style>
  ul {
    list-style-type: none;
    padding-left: 4px;
  }

  ul li::before {
    content: "– ";
  }
</style>
