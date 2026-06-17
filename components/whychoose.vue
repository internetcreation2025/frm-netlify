<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-800 font-Rubik">
  <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
    <kirbyimage :image="content.image[0]" v-if="content.image" class="w-full h-full object-cover"/>
  </div>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div class="flex-1 flex flex-col p-8">
      <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
      <h3 class="mt-6 text-gray-900 text-sm font-medium">Jane Cooper</h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Title</dt>
        <dd class="text-gray-500 text-sm">Paradigm Representative</dd>
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
          <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">Admin</span>
        </dd>
      </dl>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="w-0 flex-1 flex">
          <a href="mailto:janecooper@example.com" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
            <!-- Heroicon name: solid/mail -->
            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span class="ml-3">Email</span>
          </a>
        </div>
        <div class="-ml-px w-0 flex-1 flex">
          <a href="tel:+1-202-555-0170" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
            <!-- Heroicon name: solid/phone -->
            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span class="ml-3">Call</span>
          </a>
        </div>
      </div>
    </div>
  </li>

  <!-- More people... -->
</ul>
  </div>
  <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <div class="md:ml-auto md:w-1/2 md:pl-10">
      <h2 v-if="content.rightpreheading" class="text-base font-semibold uppercase tracking-wider text-gray-300">
      </h2>
      <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">{{content.rightheading}}
      </p>
         <p class="mt-3 text-lg text-gray-300">
       {{content.righttext}}
      </p>
      <div class="mt-8">
        <div class="inline-flex rounded-md shadow">
            <a v-if="content.link" :href="content.link[0].url" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
              {{content.link[0].text}}
            </a>
         </div>
      </div>
      <!-- This example requires Tailwind CSS v2.0+ -->
<section class="bg-white overflow-hidden">
  <div v-for="(testimonial, index) in content.testimonial" v-bind:key="index" class="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
    <svg class="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
      <defs>
        <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
    </svg>

    <svg class="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
      <defs>
        <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
    </svg>

    <div class="relative lg:flex lg:items-center">
      <div class="hidden lg:block lg:flex-shrink-0">
        <kirbyimage class="h-64 w-64 rounded-full xl:h-80 xl:w-80" :image="testimonial.image[0]" v-if="testimonial.image"/> 
      </div>

      <div class="relative lg:ml-10">
        <svg class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
          <path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
        </svg>
        <blockquote class="relative">
          <div class="text-2xl leading-9 font-medium text-gray-900">
            <p>
              {{testimonial.content}}
            </p>
          </div>
          <footer class="mt-8">
            <div class="flex">
              <div class="flex-shrink-0 lg:hidden">
                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </div>
              <div class="ml-4 lg:ml-0">
                <div class="text-base font-medium text-gray-900">{{testimonial.user}}</div>
                <div class="text-base font-medium text-indigo-600">{{testimonial.userinfo}}</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</section>

    </div>
  </div>
</div>

</template>

<script>
import KirbyLink from './kirbylink.vue'
export default {
    name: "whychoose",
    props:{
      content: Object
    },
    components:{
      KirbyLink
    }
}
</script>