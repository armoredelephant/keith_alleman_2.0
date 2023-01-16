<script lang="ts">
  import FooterLink from "./FooterLink.svelte";
  import FooterLinkWrapper from "./FooterLink.svelte";
</script>

<div class="footer-container">
  <footer id="footer">
    <div class="footer-links">
      <FooterLink
        url="https://github.com/armoredelephant"
        icon="github-square"
      />
      <FooterLink
        url="https://www.linkedin.com/in/keith-alleman-b9b14487/"
        icon="linkedin"
      />
      <FooterLink
        url="https://docs.google.com/document/d/1jhdbGeye_VTV0LRobU6uF7NWX2xufSF0/edit?usp=share_link&ouid=108939729982659780751&rtpof=true&sd=true"
      />
    </div>
    <p class="copyright">copyright &#169 keith alleman</p>
  </footer>
</div>
