<script lang="ts">
  export let name: string;
  import { getRef } from "../../helpers";
</script>

<!-- this should anchor to an id. so href="/#id" -->
<li class="nav-list-item">
  <a id="nav" class="nav-anchor" href={getRef(name)}>{name}</a>
</li>
