const {createApp} = Vue;

 createApp({

    data(){
        return{
           email:``,
        }
    
    },
    methods:{
          apiEmail(){
            axios.get(`https:flynn.boolean.careers/exercises/api/random/mail`)
            .then((result) => {
              console.log(result.data.response);
              this.email=result.data.response;
              //   let ul=document.getElementById("list")
              //  let element=document.createElement("li")
              // element.innerHTML= this.email
              //  ul.append(element)
            });
          
          
          }
                  
   },
   mounted(){   
     this.apiEmail()
     
  }


}).mount("#app")








