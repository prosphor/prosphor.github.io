<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Header from "$lib/components/Header.svelte";
  import MinimalFooter from "$lib/components/MinimalFooter.svelte";

  import display from "$lib/layouts/projects.yaml";
  const projects = display.projects;
</script>

<Seo title="Nick Zhong" description="My relevant body of work" />

<article class="font-freight text-[22px] text-primary-110">
  <div class="mt-[1.75rem]">
    <div class="responsive-width mb-2">
      <span class="font-freight text-[28px] font-bold italic underline">
        projects
      </span>
    </div>
    {#each projects as project (project.title)}
      <div class="flex">
        <div class="project-width mb-12">
          <div class="grid responsive-cols">
            <div class="">
              <h3 class="flex items-end space-between">
                <span class="flex-1 font-bold">
                  {project.title}
                </span>
                <div class="flex justify-center text-[16px]">
                  {project.date}
                </div>
              </h3>
              <div class="text-[16px] mt-4">
                {project.content}
              </div>
              <div class="mt-6 text-[16px]">
                <a href={project.url}>
                  <span class="font-bold">Links: </span>
                  <span class="underline">{project.link}</span>
                </a>
              </div>
              <div class="flex gap-x-2 mt-2">
                {#each project.topics as tag}
                  <div
                    class="flex rounded-xl bg-primary-110 text-primary-200 px-2 pt-0.5 text-[16px]"
                  >
                    {tag}
                  </div>
                {/each}
              </div>
            </div>
            <div class="flex justify-center items-center">
              <img
                alt={project.title}
                src="/images/{project.image}"
                class="h-auto border rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    {/each}
    </div>
</article>

<MinimalFooter page="projects" />

<style>
  @media (max-width: 640px) {
    .responsive-cols {
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 640px) {
    .responsive-cols {
      gap: 2rem;
      grid-template-columns: 1.5fr 1fr;
    }
  }

  @media (min-width: 768px) {
    .responsive-cols {
      gap: 3rem;
      grid-template-columns: 1.5fr 1fr;
    }
  }
</style>
