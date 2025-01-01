<script>
  import { base } from "$app/paths";
</script>

<header class="text-xl font-freight font-bold italic mt-[calc(3vh+3vw)] mx-12 text-primary-100">
  <nav class="flex w-full sm:w-3/4 md:w-[420px]">
    <ul class="flex flex-wrap gap-y-1 space-x-0.5">
      <li class="flex">
        <a href={`${base}/`} class="flex items-center">
            <img src="/favico.ico" alt="Icon" class="h-[calc(1.875rem+2px)] w-[calc(1.875rem+2px)] mr-0.5 hover:filter hover:hue-rotate-[65deg] hover:saturate-[0.8] hover:brightness-[1.3]">
        </a>
      </li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/projects`}  class="px-3 py-1 hover:text-primary-300">projects</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/thoughts`}  class="px-3 py-1 hover:text-primary-300">thoughts</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/favorites`}  class="px-3 py-1 hover:text-primary-300">favorites</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/pdf/Nick_Zhong_CV.pdf`}  target="_blank" rel="noopener noreferrer" class="px-3 py-1 hover:text-primary-300">resume</a></li>
    </ul>
  </nav>
</header>