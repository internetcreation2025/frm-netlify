<template>

    <div class="max-w-4xl mx-auto lg:py-16">
        <div class="bg-white  lg:rounded-lg shadow-lg px-0 pt-12 grid grid-flow-row gap-8">
            <h1 class="lg:text-40px italic text-frmpink font-bold text-center">{{content.heading}}</h1>

            <p v-if="!submitted" class="text-center lg:text-24px font-medium text-frmpurple">{{content.intro}}</p>

            <form enctype="multipart/form-data" method="POST"  name="quick_quote"  v-if="!submitted" novalidate ref="form" class="px-2 lg:px-12 grid grid-cols-1 gap-y-6 sm:grid-cols-4 gap-x-6">
                <input type="hidden" name="form-name" value="Quick Quote" />
                <input type="hidden" name="referrer" value="" ref="referrer" />
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
                <div class="sm:col-span-4 input-group">
                    <label for="address_one" class="block text-16px font-bold text-frmpurple">First line of address <span class="asterix">*</span></label>
                    <div class="mt-1">
                        <input  data-pristine-required-message="The first line of your address is required" required id="address_one" name="address_one" autocomplete="address-line1" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
                    </div>
                    <span class="input-error">

                    </span>
                </div>    
                <div class="sm:col-span-3 input-group">
                    <label for="town" class="block text-16px font-bold text-frmpurple">Town <span class="asterix">*</span></label>
                    <div class="mt-1">
                        <input  data-pristine-required-message="Your town is required" required id="town" name="town" class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
                    </div>
                    <span class="input-error">

                    </span>
                </div>       
                <div class="sm:col-span-1 input-group">
                    <label for="postcode" class="block text-16px font-bold text-frmpurple">Postcode <span class="asterix">*</span></label>
                    <div class="mt-1">
                        <input  data-pristine-required-message="Your postcode is required" required id="postcode" name="postcode"  class="py-3 px-4 block w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md">
                    </div>
                    
                    <span class="input-error">

                    </span>
                </div>                       
                
                <div class="input-group mt-12 grid grid-flow-row gap-4 justify-center items-center col-span-full">
     
                    <div class="relative">
                        <div class="relative pointer-events-none text-center bg-frmpink text-21px z-50 text-white font-bold lg:w-594px py-4 px-12">
                           <span v-html="doing_label"></span> <span class="ml-4 rotate-90 relative inline-block transform">></span>
                        </div>
                            <select id="doing" name="doing" @change="changeDoing" v-model="doing" class="absolute top-0 left-0 w-full h-full z-0" required  data-pristine-required-message="Please tell us where you need your job doing">
                                
                                <option>
                                    I need a job doing at:
                                </option>
                                <option>
                                    Home
                                </option>
                                <option>
                                    Work
                                </option>
                                <option>
                                    A managed property
                                </option>
                            </select> 
                    </div>
                    
                    <span class="input-error">

                    </span>
                </div>
                <div class="input-group mt-12 grid grid-flow-row gap-4 justify-center items-center col-span-full">
     
                    <div class="relative">
                        <div class="relative pointer-events-none text-center bg-frmpink text-21px z-50 text-white font-bold lg:w-594px py-4 px-12">
                            <span v-html="help_label"></span> <span class="ml-4 rotate-90 relative inline-block transform">></span>
                        </div>
                            <select id="help" name="help" @change="changeHelp($event)" v-model="help" class="absolute top-0 left-0 w-full h-full z-0" required  data-pristine-required-message="Please tell us what you need help with">
                                <option>I need help with</option>
                                <option>
                                    Repairs and Maintenance
                                </option>
                                <option>
                                    Odd Jobs
                                </option>
                                <option>
                                    Flooring
                                </option>
                                <option>
                                    Plastering
                                </option>
                                <option>
                                    Painting / Decoration / Tiling
                                </option>                                
                                <option>
                                    Joinery
                                </option>
                                <option>
                                    Gardening
                                </option>
                                
                                <option>
                                    Windows & Doors
                                </option>
                                
                                <option>
                                    Plumbing
                                </option>
                                
                                <option>
                                    Electrics 
                                </option>                                
                                <option>
                                    Not sure / Other
                                </option>
                            </select> 
                    </div>
                    
                    <span class="input-error">

                    </span>
                </div>
                <div class="col-span-full input-group">
                    <label for="description" class="block text-16px font-bold text-frmpurple w-full text-center">Job Description <span class="asterix">*</span></label>
                    <div class="mt-1">
                        <textarea  data-pristine-required-message="A description of your job is required" required maxlength="500" id="description" name="description"  class="h-52 w-full shadow-sm border-solid border-2 border-frmpink focus:frmpurple focus:border-frmpurple rounded-md" />
                    </div>
                    <div class="flex justify-between">
                        
                        <span class="input-error">

                        </span>
                        <div class="text-right text-16px text-frmpurple">
                                Max. 500 characters
                        </div>
                    </div>
                    
                </div>   
                <div class="col-span-full input-group">
       
                        <label class="block text-16px text-frmpurple text-center font-bold px-12">Photos can help us give you a more detailed quote. Please attach any images you think will help us identify what you need fixing.</label>
                                     
                </div>  
                <div class="col-span-full text-center justify-center items-center w-full  input-group">
                    
                    <div class="relative max-w-sm mx-auto cursor-pointer ">
                        <input @change="checkFiles" class="border-0 m-1 w-full h-full absolute left-0 z-0 top-0" ref="photos" data-pristine-required-message="Please upload at least one photo" name="files[]" multiple id="photos" type="file" />
                        <div class="w-full h-full bg-frmpink py-4 rounded-md text-xl relative z-50 pointer-events-none text-white font-bold">
                            Upload <span v-html="file_chosen"></span>
                        </div>
                    </div>
                    <span class="input-error">

                    </span>
                </div>

                <div class="col-span-full">
       
                        <label class="block text-16px text-frmpurple text-center font-bold px-12">Suitable times (choose up to three dates)</label>
                                   
                </div>  
                <div class="lg:justify-items-start col-span-full grid gap-y-4 lg:grid-cols-3  gap-x-12  input-group">

                    
                    <div class="grid grid-flow-row gap-4  ">
                        <div class="relative lg:w-full w-min mx-auto input-group">
                            <input class="border-2 px-4 py-2 rounded-md border-frmpink" data-pristine-required-message="Date option one is required" required id="date_one" name="date_one" type="date"  />
                            <div class="flex justify-center items-center bg-white absolute pointer-events-none w-8 h-8 top-2  right-2">
                                <img src="@/assets/images/calendar.svg" alt="calendar icon" class="w-6 h-6" />
                            </div>
                            
                                            <span class="input-error col-span-full ">

                                            </span>
                        </div>
                            <div class="col-span-full grid grid-cols-2 mx-auto max-w-xs gap-x-12  input-group">       
                                            <div class="flex flex-row justify-center items-center">
                                                <div class="relative">
                                                    <input value="AM" class="border-frmpink w-8 h-8 border-2 rounded-lg" data-pristine-required-message="AM or PM is required" required type="radio" id="am_one" name="am_pm_one" />                     
                                                    <span class="checked absolute top-0 left-0 rounded-full pointer-events-none w-8 h-8 border-frmpink border-2"></span>
                                                </div>
                                                <label class="font-bold text-frmpurple  ml-4" for="am_one">AM</label>
                                            </div>    
                                            <div class="flex flex-row justify-center items-center">
                                                <div class="relative">
                                                    <input value="PM" class="border-frmpink w-8 h-8 border-2 rounded-lg mr-4"  data-pristine-required-message="AM or PM is required" required type="radio" id="pm_one" name="am_pm_one" />
                                            
                                                    <span class="checked absolute top-0 left-0 rounded-full pointer-events-none w-8 h-8 border-frmpink border-2"></span>
                                                
                                                </div>
                                                <label  class="font-bold text-frmpurple" for="pm_one">PM</label>
                                            </div>       
                                            
                                            <span class="input-error col-span-full ">

                                            </span>
                                            
                                        </div>                          
                    </div>
                    
                    
                    <div class="grid grid-flow-row gap-4">
                    <div class="relative  lg:w-full w-min mx-auto">
                        <input class="border-2 px-4 py-2 rounded-md border-frmpink"     id="date_two" name="date_two"  type="date"  />
                            <div class="flex justify-center items-center bg-white absolute pointer-events-none w-8 h-8  right-2  top-2">
                            <img src="@/assets/images/calendar.svg" alt="calendar icon" class="w-6 h-6" />
                        </div>
                    </div>
                        <div class="col-span-full grid grid-cols-2 mx-auto max-w-xs gap-x-12  input-group">       
                                            <div class="flex flex-row justify-center items-center">
                                                <div class="relative">
                                                    <input class="border-frmpink w-8 h-8 border-2 rounded-lg" value="AM"  type="radio" id="am_two" name="am_pm_two" />                     
                                                    <span class="checked absolute top-0 left-0 rounded-full pointer-events-none w-8 h-8 border-frmpink border-2"></span>
                                                </div>
                                                <label class="font-bold text-frmpurple  ml-4" for="am_two">AM</label>
                                            </div>    
                                            <div class="flex flex-row justify-center items-center">
                                                <div class="relative">
                                                    <input class="border-frmpink w-8 h-8 border-2 rounded-lg mr-4"  value="PM"  type="radio" id="pm_two" name="am_pm_two" />
                                            
                                                    <span class="checked absolute top-0 left-0 rounded-full pointer-events-none w-8 h-8 border-frmpink border-2"></span>
                                                
                                                </div>
                                                <label  class="font-bold text-frmpurple" for="pm_two">PM</label>
                                            </div>       
                                             
                                        </div>                       
                    </div>
                    
                    <div class="grid grid-flow-row gap-4">
                        <div class="relative  lg:w-full w-min mx-auto">
                            <input class="border-2 px-4 py-2 rounded-md border-frmpink"    id="date_three" name="date_three"  type="date"  />
                            <div class="flex justify-center items-center bg-white absolute pointer-events-none w-8 h-8  right-2  top-2">
                                <img src="@/assets/images/calendar.svg" alt="calendar icon" class="w-6 h-6" />
                            </div>
                        </div>

                        <div class="col-span-full grid grid-cols-2 mx-auto max-w-xs gap-x-12  input-group">       
                                            <div class="flex flex-row justify-center items-center">
                                                <div class="relative">
                                                    <input class="border-frmpink w-8 h-8 border-2 rounded-lg"  value="AM" type="radio" id="am_three" name="am_pm_three" />                     
                                                    <span class="checked absolute top-0 left-0 rounded-full pointer-events-none w-8 h-8 border-frmpink border-2"></span>
                                                </div>
                                                <label class="font-bold text-frmpurple  ml-4" for="am_three">AM</label>
                                            </div>    
                                            <div class="flex flex-row justify-center items-center">
                                                <div class="relative">
                                                    <input class="border-frmpink w-8 h-8 border-2 rounded-lg mr-4"  value="PM" type="radio" id="pm_three" name="am_pm_three" />
                                            
                                                    <span class="checked absolute top-0 left-0 rounded-full pointer-events-none w-8 h-8 border-frmpink border-2"></span>
                                                
                                                </div>
                                                <label  class="font-bold text-frmpurple" for="pm_three">PM</label>
                                            </div>       
                                             
                                        </div>   

                    </div>
                    
                    <span class="input-error text-center col-span-full">

                    </span>
                </div>

          
                
                <div class="col-span-full grid grid-cols-1 mx-auto lg:max-w-xs gap-x-12  input-group">       
                    <div class="lg:w-96 justify-center">
                            
                        <div class="flex flex-row lg:justify-center items-center">
                            <div class="relative">
                                 <input  class="w-4 p-2 h-4 border-0 rounded-lg m-4"  data-pristine-required-message="Please accept the terms and conditions"  required type="checkbox" name="terms" id="terms" /> 
                                
                                <span class="checked bg-white top-2 absolute right-2 rounded-md pointer-events-none w-8 h-8 border-frmpink border-2"></span>
                            
                               
                            </div>    <label for="terms" class="terms">Tick to confirm <a href="/terms-and-conditions" target="_blank">Ts&Cs</a> are understood</label>
                            
                        </div>
                    </div>
                    
                    <span class="input-error col-span-full w-full text-center">

                    </span>
                </div>

                <div class="col-span-full text-center mt-4">
                    <button class="bg-frmpurple text-white cta italic py-4 text-lg lg:px-36" @click="submitForm">
                    
                        {{form_sent ? 'Submitting' : 'Submit'}}
                        
                    </button>
                </div>

                <div class="col-span-full w-full text-center text-frmpink" v-if="this.valid == false"  v-html="$md.render(content.invalid)">
 
                </div>
            </form>
            
            <div v-if="submitted" class=" text-4xl mx-12 text-center" v-html="$md.render(content.submitted)"> 
            </div>

            <div class="col-span-full contact-form-footer" v-if="content.outro" v-html="$md.render(content.outro)"> 
            
            </div>
        </div>
    </div>

</template>

<script>

  import Pristine from 'pristinejs'; 
  
  export default{
      name: "getquote",
      props:{
          content: Object
      },
      data(){
          return {
            form_sent: false,
            doing_label: "I need a job doing at",
            help_label: "I need help with",
            help: null,
            doing: null,
            file_chosen: "",
            submitted: false,
            valid: true,
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
            this.$refs.form.action = process.env.PRODUCTION_BASE_URL + "/quote";     
            this.$refs.referrer = process.env.FRONTEND_PRODUCTION_BASE_URL + location.href.replace(location.origin,'');

            if (this.$route.hash == '#submitted'){
                this.submitted = true;
            }
      },
      methods:{
          changeHelp(){
              this.help_label = 'I need help with ' + this.help;
          },
          changeDoing(){
              this.doing_label = 'I need a job doing at ' + this.doing;
          },
          checkFiles(){
              let $files = this.$refs.photos.files;
              this.file_chosen = '(' + $files.length + ")";
          },
          submitForm(e){
            this.valid = this.pristine.validate(); 

            e.preventDefault();
            
            if (this.valid)
            { 
  
                    let $self = this;
                    let myForm = this.$refs.form;
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