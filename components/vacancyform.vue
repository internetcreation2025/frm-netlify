<template>

<div class="bg-frmpink overflow-hidden font-Rubik contact-form ">
  <div class="relative max-w-3xl mx-auto lg:rounded-xl shadow-lg bg-frmwhite">
    
    <div class="py-12" v-if="role">
      <h2 class="lg:text-40px text-center justify-center font-bold tracking-tight text-frmpink italic sm:text-4xl" >{{role}}</h2>
    </div>
    <div>
      <form name="vacancy-form"  enctype="multipart/form-data" method="POST"  v-if="!submitted"  ref="form" action="#" novalidate class="grid grid-cols-1 gap-y-6 sm:grid-cols-4 gap-x-6">
<input type="hidden" name="form-name" value="vacancy-form" />
<input type="hidden" name="role" ref="role" :value="role" />
  
<div class="sm:col-span-2 input-group">
                    <label for="first-name" class="block text-16px font-bold text-frmpurple">First name <span class="asterix">*</span></label>
                    <div class="mt-1">
                        <input data-pristine-required-message="Your first name is required" required type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
                    </div>
                    <span class="input-error">

                    </span>
                </div>
                <div class="sm:col-span-2 input-group">
                    <label for="last-name" class="block text-16px font-bold text-frmpurple">Last name <span class="asterix">*</span></label>
                    <div class="mt-1">
                        <input  data-pristine-required-message="Your last name is required" required type="text" name="last-name" id="last-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
                    </div>
                    <span class="input-error">

                    </span>
                </div>   
                <div class="sm:col-span-4 input-group">
                    <label for="company" class="block text-16px font-bold text-frmpurple">Email <span class="asterix">*</span></label>
                    <div class="mt-1">
                        <input  data-pristine-required-message="Your email is required" required type="email" name="email" id="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
                    </div>
                    <span class="input-error">

                    </span>
                </div>
                <div class="sm:col-span-4 input-group">
                    <label for="phone" class="block text-16px font-bold text-frmpurple">Phone <span class="asterix">*</span></label>
                    <div class="mt-1">
                        <input required  data-pristine-required-message="Your phone number is required" id="telephone" name="phone" type="telephone" autocomplete="telephone" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
                    </div>
                    <span class="input-error">

                    </span>
                </div>    


              <div class="col-span-full input-group">
       
                        <label class="block text-16px text-frmpurple text-center font-bold px-12">Upload your CV</label>
                                     
                </div>  
                <div class="col-span-full text-center justify-center items-center w-full  input-group">
                    
                    <div class="relative max-w-sm mx-auto cursor-pointer ">
                        <input @change="checkFiles" class="border-0 m-1 w-full h-full absolute left-0 z-0 top-0" ref="photos" data-pristine-required-message="Please upload your CV" required name="files[]" multiple id="photos" type="file" />
                        <div class="w-full h-full bg-frmpink py-4 rounded-md text-xl relative z-50 pointer-events-none text-white font-bold">
                            Upload <span v-html="file_chosen"></span>
                        </div>
                    </div>
                    <span class="input-error">

                    </span>
                </div>                

         <div class="sm:col-span-4 text-center">
          <button @click="submitForm" type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-20px font-bold text-frmwhite bg-frmpink hover:bg-frmpurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
       
                 {{form_sent ? 'Submitting' : 'Submit'}}
          </button>
        </div>  
         <div class="sm:col-span-4 text-center">
          <span class="asterix">*</span> denotes a required field.
        </div>
       
      </form>
      
            <div v-if="submitted" class=" mx-12 py-12 text-center text-4xl" v-html="$md.render(content.submitted)"> 
            </div>
        <div class="sm:col-span-2 contact-form-footer" v-if="content.outro" v-html="$md.render(content.outro)"> 
          
        </div>
        
    </div>
  </div>
</div>


</template>

<script>

import Pristine from 'pristinejs'; 
export default
{
    name: "vacancyform", 
    props:{
        content: Object
    },
    data(){
          return {
            form_sent: false,
            role: "Speculative application",
            submitted: false,
            valid: true,
            file_chosen: null,
            pristine: null,
            pristineConfig: {
                classTo: 'input-group',
                errorClass: 'has-error',
                successClass: 'has-success',
                errorTextParent: 'input-error',
                errorTextTag: 'span',
                errorTextClass: 'text-help'
            }
          }
      },
      mounted(){
            this.pristine = new Pristine(this.$refs.form, this.pristineConfig);     
            
            this.role = this.$route.query.role;    
            this.$refs.form.action = process.env.PRODUCTION_BASE_URL + "/vacancy";     
            this.$refs.referrer = process.env.FRONTEND_PRODUCTION_BASE_URL + location.href.replace(location.origin,'');

            if (this.$route.hash == '#submitted'){
                this.submitted = true;
            }
   
      },
      methods:{
          checkFiles(){
              let $files = this.$refs.photos.files;
              this.file_chosen = '(' + $files.length + ")";
          },
          submitForm(e){
            this.valid = this.pristine.validate(); 

            e.preventDefault();
            
            if (this.valid)
            { 
   
                    let myForm = this.$refs.form
                     
                    this.form_sent = true;
                    myForm.submit();
                    
            }
            else
            {
                console.log("invalid");
            }
          }
      }
}

</script>