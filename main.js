const {createApp} = Vue;

 createApp({

    data(){
        return{
           arrayEmail: [],
        }
    
    },
    methods:{
                  
   },
   mounted(){   
    for (let index = 0; index < 10; index++) {
      axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
      .then((result) => {
        this.arrayEmail.push(result.data.response);
        console.log(result.data.response);        
      });
      
    }

    console.log(this.arrayEmail)
  }
 

}).mount("#app")








