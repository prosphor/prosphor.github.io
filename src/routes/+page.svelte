<script>
  import Link from "$lib/components/Link.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Seo title="Nick Zhong" description="A personal website for Nick Zhong" />

<Header page="home" />

<article class="text-primary-100 font-freight text-[24px]">
  <main class="mt-[1.75rem]">
    <p class="responsive-width">
      <a
        href="mailto:zhongxnicholas@gmail.com"
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
