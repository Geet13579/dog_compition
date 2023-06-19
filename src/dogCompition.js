import React, { Component } from 'react';
import Header from './Header.js';
import './DogCompition.css';
import axios from 'axios';
import './login.css'
import Like from './like1.png'

class DogCompition extends Component {

    state={
    image:'',
    count:0,

    winner1 : '',
    winner6 : '',
    winner7 : '',
    winner4 : '',
    winner:'',
    finalWinner1:'',
    finalWinner2:'',
    dog1:'',
    dog2: '',
    dog3: '',
    dog4: '',
    dog5: '',
    dog6: '',
    dog7: '',
    dog8: '',
        opacity:''
       
    }

    componentDidMount = () => {


        axios.get(" https://dog.ceo/api/breeds/image/random", {
           
        })
            .then(res => {

                // console.log(res.data)
                var dog_img = res.data.message
                
                this.setState({image1:dog_img})

 
            })




        axios.get(" https://dog.ceo/api/breeds/image/random", {

        })
            .then(res => {

                // console.log(res.data)
                var dog_img = res.data.message
                this.setState({ image2: dog_img })

            })


    }
   

    onclike_Img =(dog_img)=>{

       var count =  this.state.count++

    var winner1 = '';
    var winner6='';
    var winner7='';
    var winner4='';
    var winner="";
        var finalWinner1 = '';
        var finalWinner2='';
        var arr = []
      
        // alert("Are You Sure Select a Dog?")
        let text = "Are You Sure Select a Dog?";
        if (window.confirm(text) == true) {
            const arr = [];

        if(count==0){
            
             winner1 =  dog_img ;
             
             var dog1 = this.state.image1;
             var dog2 = this.state.image2

             this.setState({winner1,dog1,dog2})

            axios.get(" https://dog.ceo/api/breeds/image/random", {

            })
                .then(res => {

                    var dog_img = res.data.message

                    this.setState({ image1: dog_img })
                   
                   
                })




            axios.get(" https://dog.ceo/api/breeds/image/random", {

            })
                .then(res => {

                
                    var dog_img = res.data.message
                    this.setState({ image2: dog_img })
                   
                })

        }
        else if(count==1){
           
           winner4   = dog_img
           var dog3 = this.state.image1
           var dog4 = this.state.image2
            this.setState({ winner4,dog3,dog4 })
           
            this.setState({ image1: this.state.winner1, image2: dog_img })
           
        }
        else if(count==2){

            finalWinner1 = dog_img
           
            this.setState({ finalWinner1 })
            alert("Ready for Second Round!")
            axios.get(" https://dog.ceo/api/breeds/image/random", {

            })
                .then(res => {

                    var dog_img = res.data.message

                    this.setState({ image1: dog_img })
                   

                })




            axios.get(" https://dog.ceo/api/breeds/image/random", {

            })
                .then(res => {


                    var dog_img = res.data.message
                    this.setState({ image2: dog_img })

                })

        } 
        else if(count==3){
         
         winner6  = dog_img
         
         console.log("jgkfgdkhk")
           var dog5 = this.state.image1
           var dog6 = this.state.image2
          
            this.setState({ winner6, dog5, dog6 })

            axios.get(" https://dog.ceo/api/breeds/image/random", {

            })
                .then(res => {

                    var dog_img = res.data.message

                    this.setState({ image1: dog_img })
                   

                })




            axios.get(" https://dog.ceo/api/breeds/image/random", {

            })
                .then(res => {


                    var dog_img = res.data.message
                    this.setState({ image2: dog_img })

                })


        }
        else if(count==4){

            winner7 = dog_img
            var dog7 = this.state.image1
            var dog8 = this.state.image2
            this.setState({ winner7, dog7, dog8 })

            this.setState({ image1: this.state.winner6, image2: dog_img,winner7 })
            
        }

        else if(count==5){

            finalWinner2 = dog_img

            this.setState({ image1:this.state.finalWinner1,finalWinner2,image2:dog_img })
        }
        else if(count==6){
            // console.log(dog_img)s
            this.setState({winner:dog_img})
            // alert("Winner Is :"+dog_img)
            // window.location.reload()

            this.handle_submit(dog_img)

        }

        console.log(count)
    }
    }
  

    handle_submit = (dog_img) => {


        // console.log("jknkjhf")
        var data = {
          
            dog1: this.state.dog1, 
            dog2: this.state.dog2, 
            dog3: this.state.dog3, 
            dog4: this.state.dog4, 
            dog5: this.state.dog5, 
            dog6: this.state.dog6, 
            dog7: this.state.dog7, 
            dog8: this.state.dog8, 
            winner1: this.state.winner1,
            winner4: this.state.winner4,
            finalWinner1: this.state.finalWinner1,
            winner6: this.state.winner6, 
            winner7: this.state.winner7, 
            finalWinner2: this.state.finalWinner2, 
            winner: dog_img
            

        
        // var round2 = {dog}

        }
        console.log(data)

        // console.log(data)

        try {

            console.log("jfgf")
            axios.post("http://localhost:8000/insert_dog_detail", data, {
                headers: { 'Content-Type': 'multipart/form-data', 'content-Type': 'application/json' },
                onUploadProgress: data => {

                    this.setState({
                        progress: Math.round((100 * data.loaded) / data.total)

                    });
                },

            })
                .then(res => {

                    if (res.data.msg === 'success') {

                        
                        this.setState({opacity:"none"})
                       

                    }


                })
        } catch (error) {

            console.log(error)
            this.setState({
                Load: false,
            });
            console.log("internal server error");
        }//some code
    }

    relade_page=()=>{
        window.location.reload()
    }
    render() {
       
    
   
        return (
            <div >
            

            <Header/>

                {this.state.count==7?


                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        {/* Tabs Titles */}
                        {/* Icon */}
                        <div id="formFooter">
                            <a className="underlineHover" onClick={this.relade_page}>Close</a>
                        </div>
                       
                        {/* Login Form */}
                        <div style={{ backgroundImage: `url(${this.state.winner})`, width: "449px", height: "400px", backgroundSize: "cover", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "-20px", borderRadius: "10px" }}>
                                             </div>
                        <div id="formFooter">
                            <h4 style={{ fontFamily: "Amigos", color: "#680d0d" }} >This is the winner!</h4>
                        </div>
                    </div>
                </div>
               
  
                    
:
""
}
                
                {/* {this.state.count == 6 ?
:

} */}
                <div style={{ backgroundImage: "linear-gradient( #F29053,#42c4dc)", width: "100%", height: "100%", position: "absolute", display:this.state.opacity }}>


<div>

</div>
                    <div className='container1'>
                        <div className='dog1'>
                            <div className='hover_img1' style={{ backgroundImage: `url(${this.state.image1})`, width: "500px", height: "400px", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center",borderRadius:"10px" }}>

                                {/* <div className='overlay1'></div> */}
                                <div className='show_like1' onClick={()=>this.onclike_Img(this.state.image1,1)}></div>
                            </div>


                        </div>
                        <div className='dog2'>
                            <div style={{
                                backgroundImage: `url(${this.state.image2})`, width: "500px", height: "400px", backgroundSize: "cover ", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                                {/* <div className='overlay'></div> */}
                                <div className='show_like' onClick={() => this.onclike_Img(this.state.image2,2)}></div>

                            </div>

                        </div>
                    </div>
                </div>
          
           
            </div>
        );
    }
}

export default DogCompition;
