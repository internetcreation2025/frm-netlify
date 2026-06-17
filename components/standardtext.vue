<template>
    <div class="bg-white blogtext py-20">
        <div class="container lg:px-0 markdown mx-auto max-w-798px" v-html="$md.render(content.text)">

        </div>
    </div>
</template>

<script>

    export default {
        name: "standardtext",
        props:{
            content: Object
        }
    }

</script>