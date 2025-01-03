<script>
  import Link from "$lib/components/Link.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Seo title="Nick Zhong" description="A personal website for Nick Zhong" />

<Header />

<article class="mx-12 text-primary-100 font-americas text-xl">
  <main>
    <p class="mt-[calc(2vh+2vw)] responsive-width">
      <a
        href="mailto:zhongxnicholas@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="font-freight text-2xl font-bold italic"> nick zhong</span>
      </a>
      is ever-curious, loves a good list, and dislikes handling tasks
      concurrently.

      <br />
      <br />
    </p>
    <div class="text-xl">
      interests:
      <ul>
        <li><Link text="content moderation" /></li>
        <li><Link text="sharing stories" /></li>
      </ul>
    </div>
    <br />
    based in <Link text="new york" /> and <Link text="singapore" />
    <br />
    feel free to reach out~
    <br />
    <br />
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
