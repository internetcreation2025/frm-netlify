<template>
    <header class="py-12 lg:py-20 mx-auto bg-frmgrey">
        <div class="container mx-auto">
            <div class="text-center">
                <h1 class="tracking-tight">
                    <span v-if="content.heading" class="inline text-2xl lg:text-60px font-bold text-frmpurple italic lg:mr-3">{{content.heading}}</span>
                    <span v-if="content.alternativetext" class="text-frmpink text-2xl lg:text-60px font-bold inline italic">{{content.alternativetext}}</span>
                </h1>
                <p v-if="content.text" class="pt-7 max-w-2xl mx-auto text-md lg:text-24px font-medium text-frmpurple md:mt-5 ">
                {{content.text}}
                </p>
            
            </div>
        </div>
    </header>
</template>

<script >

    export default {
        name: "standardheader",
        props:{
            content: Object
        },
    }

</script>