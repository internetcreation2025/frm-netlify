<template>
    <div class="footer-lite pb-20 shadow-lg">
        <div class="">
            <div class="mx-auto text-center px-4 sm:px-6 lg:py-18 lg:px-8">
                <h2 class="tracking-tight text-frmpink w-full justify-center text-center sm:text-4xl">
                    <span class="text-2xl  lg:text-64px font-bold italic">{{content.heading}}</span>
                </h2> 
            </div>
        </div>
    </div>
</template>

<script>

 export default
 {
     name: "footerlite",
     props: {
         content: Object
     }
 }

</script>