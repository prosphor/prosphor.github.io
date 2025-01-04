<script>
  let { text, link } = $props(); 
</script>

<a class="hover:underline hover:italic font-bold" href={link}>
  { text }
</a>

<style>
  a {
    font-family: "Freight";
  }
</style>