const {createApp} = Vue;

 createApp({

    data(){
        return{
           
        }
    
    },
    methods:{
         apiEmail(){
           axios.get(`https:flynn.boolean.careers/exercises/api/random/mail`)
           .then((result) => {
             console.log(result.data.response);
             let email=result.data.response;
             let ul=document.getElementById("list")
             let element=document.createElement("li")
             element.innerHTML= email
             ul.append(element)
           });
         }
                  
   },
   mounted(){   
      for (let index = 0; index < 10; index++) {
          this.apiEmail()
      }
 
  }

}).mount("#app")








