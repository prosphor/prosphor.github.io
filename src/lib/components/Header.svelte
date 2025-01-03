<script>
  import { base } from "$app/paths";
</script>

<header class="text-lg font-freight font-bold mt-[calc(3vh+3vw)] mx-12 text-primary-100">
  <nav class="flex responsive-width">
    <div class="flex items-stretch mr-1 flex justify-center items-center">
      <a href={`${base}/`} class="flex items-center justify-center">
        <img src="/favico.ico" alt="Icon" class="h-[calc(1.875rem+2px)] w-[calc(1.875rem+2px)] hover:filter hover:hue-rotate-[65deg] hover:saturate-[0.8] hover:brightness-[1.3]">
      </a>
    </div>
    <ul class="flex flex-wrap gap-y-0.5 gap-x-0.5 w-full">
      <li class="border-dense-dotted flex-grow flex justify-center">
        <a href={`${base}/projects`} class="px-3 py-1 hover:text-primary-110">projects</a>
      </li>
      <li class="border-dense-dotted flex-grow flex justify-center">
        <a href={`${base}/thoughts`} class="px-3 py-1 hover:text-primary-110">thoughts</a>
      </li>
      <li class="border-dense-dotted flex-grow flex justify-center">
        <a href={`${base}/favorites`} class="px-3 py-1 hover:text-primary-110">favorites</a>
      </li>
      <li class="border-dense-dotted flex-grow flex justify-center">
        <a href={`${base}/pdf/Nick_Zhong_CV.pdf`} target="_blank" rel="noopener noreferrer" class="px-3 py-1 hover:text-primary-110">cv</a>
      </li>

    </ul>
  </nav>
</header>

