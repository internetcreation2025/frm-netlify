<template>
<div>
        <picture v-if="image">
          <source v-if="image.srcset" :srcset="image.srcset" />
          <img  v-if="image && image.url" :src="image.url" :class="CssClass" :alt="image.meta.alt ? image.meta.alt : ''" loading="lazy" />
        </picture>
        
</div>
</template>

<script>

  export default {
    props: { image: Object, CssClass: String}
  };
</script>
