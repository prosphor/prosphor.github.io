<script lang="ts">
  import { marked } from "marked";
  import katex from "katex";
  import "katex/dist/katex.min.css";
  let { source } = $props();

  const renderer = new marked.Renderer();

  renderer.image = ({
    href,
    title,
    text,
  }: {
    href: string;
    title: string | null;
    text: string;
  }): string => {
    return `
    <figure>
      <img src="${href}" alt="${text}" />
      ${title ? `<figcaption>${title}</figcaption>` : ""}
    </figure>
  `;
  };

  renderer.paragraph = (token: { raw: string }): string => {
    let text = token.raw;

    text = text.replace(/(?<!\w)\$(.+?)\$(?!\w)/g, (match, math) => {
      return katex.renderToString(math, { throwOnError: false });
    });

    text = text.replace(/\$\$(.+?)\$\$/gs, (match, math) => {
      return `<div class="katex-block">${katex.renderToString(math, {
        displayMode: true,
        throwOnError: false,
      })}</div>`;
    });

    return text;
  };

  marked.setOptions({
    renderer,
  });
</script>

<div>
  {@html marked(source)}
</div>
