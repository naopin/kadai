<template>
   <div id="app">
     <Information></Information>
     <router-link to = "/ques">Go to Ques</router-link>
   </div>
</template>

<script>

import Information from './components/Information.vue';

export default {
  
   name: "",
   components: {
      Information
   },
    methods: {

    }
};

</script>


