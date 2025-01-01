<script lang="ts">
  import { marked } from "marked";
  let { data } = $props();
</script>

<article class="markdown">
  <h1> { data.title } </h1>
  <p> Written by { data.author } on { data.date} </p>
  {@html marked(data.body)}
</article>