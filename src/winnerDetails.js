
// import React, { Component } from 'react';
// // import './entry.css'
// import axios from 'axios';





// export default class view_truck_no extends Component {


//     state = {
    
        
//         driverList: []
//     }



//     componentDidMount = () => {


//         axios.get("http://localhost:8000/show_dog_details", {
//             headers: { 'Content-Type': 'application/json' },
//         })
//             .then(res => {

//                 const users = res.data.rows;
//                 console.log(users)
//                 this.setState({ driverList: users });

//             })


//     }
//     HandleView=(id)=>{

//         window.location = "/dogTree" + id
//     }

    


//     render() {
//         return (


//             <div>


            
                 
//                     {/* <Header /> */}

//                     <div id="main">
//                         <div className="header">
//                             <h3 style={{ color: "black", paddingBottom: "10px" }}>Daily Competition Chart</h3>

//                         </div>


//                         <div className="content" style={{display:"flex",justifyContent:"center"}}>
                           
//                             <table className="table" style={{ width: "100%" }}>
//                                 <thead>

//                                     <tr style={{background:"black",height:"50px",color:"white"}}>
//                                         <th className="header-label">S.No.</th>

//                                         <th className='header-label'>Dog1</th>
//                                         <th className='header-label'>Winner</th>
//                                         <th className='header-label'>Timing</th>
//                                         <th className='header-label'>Loser</th>
//                                         <th className='header-label'>Dog2</th>
//                                     <th className='header-label'>Details</th>

//                                     </tr>
//                                 </thead>
//                                 <tbody>



//                                     {this.state.driverList.map((data, index) => (


//                                         <tr style={{ background:"#ecf1f4"}}>
//                                             <th>
//                                                 <div className="input_wrapper" style={{ fontWeight: "bolder", color: "black" }}>{index + 1}</div>
//                                             </th>
//                                             <th>
//                                                 <div className="input_wrapper" style={{ backgroundImage: `url(${data.finalWinner1})`, width: "250px", height: "250px", backgroundSize: "cover",backgroundRepeat:"no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>
//                                             </th>
//                                             <th>
//                                                 <div className="input_wrapper" style={{ backgroundImage: `url(${data.winner})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

//                                             </th>
//                                             <th>
//                                                 <div className="input_wrapper">{data.date.replace("T","  ").split("Z")}</div>
//                                            </th>
//                                             {data.winner==data.finalWinner1?
//                                                 <th>
//                                                     <div className="input_wrapper" style={{ backgroundImage: `url(${data.finalWinner2})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

//                                                 </th>
//                                             :
//                                                 <th>
//                                                     <div className="input_wrapper" style={{ backgroundImage: `url(${data.finalWinner1})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

//                                                 </th>}
                                            
//                                             <th>
//                                                 <div className="input_wrapper" style={{ backgroundImage: `url(${data.finalWinner2})`, width: "250px", height: "250px", backgroundSize: "cover",backgroundRepeat:"no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

//                                             </th>
                                           
                                           
//                                             <th>
//                                                 <div className="input_wrapper" onClick={()=>this.HandleView(data.id)} style={{width:"100%",height:"30px",backgroundColor:"green",color:"white",borderRadius:"10px"}}>View</div>
//                                             </th>

//                                         </tr>
//                                     ))}









//                                 </tbody>
//                             </table>


//                         </div>
//                     </div>
//                 </div>
            


//         )
//     }
// }



import React, { Component } from 'react';
// import './entry.css'
import axios from 'axios';
import './header.css';




export default class view_truck_no extends Component {


    state = {


        driverList: [],
        date:''
    }



    componentDidMount = () => {


        axios.get("http://localhost:8000/show_dog_details", {
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => {

                const users = res.data.rows[0];
                
                this.setState({ driverList: users });

            })


    }
    HandleView = (id) => {

        // console.log(this.state.driverList.id)
        window.location = "/dogTree/" + id
    }




    render() {
        return (


            <div>


                <div className='Header_Main' style={{ backgroundImage: "linear-gradient( #F29053,#42c4dc)" }}>
                  
                    <div className='rightnavbar' style={{width:"100%"}}>
                        <div className='right_menu'>
                            <a href='/winnerDetails' className="hover_style">
                                Winner
                            </a>


                        </div>




                        <div className='right_menu'>
                            <a href='#/' onClick={() => this.HandleView(this.state.driverList.id)} className="hover_style">
                             Details
                            </a>




                        </div>

                    </div>
                    {/* } */}


                </div>


            

                {/* <Header /> */}

                <div id="main">
                    <div className="header">
                        <h3 style={{ color: "black", paddingBottom: "10px" }}>Daily Competition Chart</h3>

                    </div>


                    <div className="content" style={{ display: "flex", justifyContent: "center" }}>

                        <table className="table" style={{ width: "100%" }}>
                            <thead>

                                <tr style={{ background: "black", height: "50px", color: "white" }}>
                                

                                    <th className='header-label'>Dog1</th>
                                    <th className='header-label'>Winner</th>
                                    <th className='header-label'>Timing</th>
                                    <th className='header-label'>Loser</th>
                                    <th className='header-label'>Dog2</th>
                                    {/* <th className='header-label'>Details</th> */}

                                </tr>
                            </thead>
                            <tbody>



                                {/* {this.state.driverList.map((data, index) => ( */}


                                    <tr style={{ background: "#ecf1f4" }}>
                                       
                                    <th>
                                        <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.winner1})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>
                                    </th>
                                        <th>
                                        <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.finalWinner1})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>
                                        </th>
       
                                        <th>
                                            <div className="input_wrapper">{this.state.date}</div>
                                        </th>
                                        {this.state.driverList.winner4 == this.state.driverList.finalWinner1 ?
                                            <th>
                                                <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.winner1})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

                                            </th>
                                            :
                                            <th>
                                                <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.winner4})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

                                            </th>}

                                        <th>
                                            <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.winner4})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

                                        </th>
{/* 

                                        <th>
                                            <div className="input_wrapper" onClick={() => this.HandleView(this.state.driverList.winner1.id)} style={{ width: "100%", height: "30px", backgroundColor: "green", color: "white", borderRadius: "10px" }}>View</div>
                                        </th> */}

                                    </tr>
                                {/* ))} */}





                                <tr style={{ background: "#ecf1f4" }}>

                                    <th>
                                        <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.winner6})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>
                                    </th>
                                    <th>
                                        <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.finalWinner2})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

                                    </th>
                                    <th>
                                        <div className="input_wrapper">{this.state.driverList.date}</div>
                                    </th>
                                    {this.state.driverList.winner6 == this.state.driverList.finalWinner2 ?
                                        <th>
                                            <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.winner7})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

                                        </th>
                                        :
                                        <th>
                                            <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.winner6})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

                                        </th>}

                                    <th>
                                        <div className="input_wrapper" style={{ backgroundImage: `url(${this.state.driverList.winner7})`, width: "250px", height: "250px", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "stretch", justifyContent: "center", marginTop: "30px", borderRadius: "10px" }}></div>

                                    </th>
                                    {/* 

                                        <th>
                                            <div className="input_wrapper" onClick={() => this.HandleView(this.state.driverList.winner1.id)} style={{ width: "100%", height: "30px", backgroundColor: "green", color: "white", borderRadius: "10px" }}>View</div>
                                        </th> */}

                                </tr>







                            </tbody>
                        </table>


                    </div>
                </div>
            </div>



        )
    }
}
