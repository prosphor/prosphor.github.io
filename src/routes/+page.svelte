<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Seo from "$lib/components/Seo.svelte";
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
          <span class="font-bold italic text-[28px] mr-0.5"> nick zhong</span>
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
        <p class="leading-8">based in <Link text="sg" link="" /> and <Link text="nyc" link="" /></p>
        <p class="leading-8">feel free to reach out<span class="font-bold text-[28px]">~</span></p>
        <br />
      </div>
    </div>
    {#if preview}
      <div
        class="right-pane flex flex-col flex-grow justify-center items-center px-4 mr-[100px]"
      >
        <div class="fixed top-1/2 transform -translate-y-1/2">
          <img alt="preview" class="w-auto h-[350px]" src={preview} />
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
