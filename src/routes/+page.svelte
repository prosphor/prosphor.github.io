<script>
  import Link from "$lib/components/Link.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Seo title="Nick Zhong" description="A personal website for Nick Zhong" />

<Header />

<article class="text-primary-100 font-americas text-[24px]">
  <main class="mt-[1.75rem]">
    <p class="responsive-width">
      <a
        href="mailto:zhongxnicholas@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          class="font-freight font-bold italic text-[28px] leading-[100%] mr-0.5"
        >
          nick zhong</span
        >
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
      based in
      <span class="text-[26px] leading-[100%]"
        ><Link text="singapore" link="" /></span
      >
      <br />
      feel free to reach out<span class="font-freight font-bold text-[28px]"
        >~</span
      >
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
