import React, { Component } from 'react';
// import Header from "./Header.js"
import './header.css';
import './dogTree.css';
import axios from 'axios';
import User from './user.png'



class DogTree extends Component {

    state={
        Details:[]
    }
    componentDidMount = () => {

        var data={
            id: this.props.match.params.id
        }
        console.log(data)

        axios.post("http://localhost:8000/findById", data, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => {

                const users = res.data.rows[0];
                console.log(users)
                this.setState({ Details: users });

            })


    }
    render() {
        return (
            <div>
                <div className='Header_Main' style={{ backgroundImage: "linear-gradient( #F29053,#42c4dc)" }}>
                    <div className='leftnavbar'>

                        <div className='logo'>
                            <a href='/dogCompition' className="hover_style">
                                Dog Competition
                            </a>
                          

                        </div>



                    </div>

                    {/* {width <= 457 ? <div className='rightnavbar' style={{ justifyContent: "flex-end", marginRight: "30px" }}>
          <div ><img onClick={openPopupmenu} src={menu} className="menuStyle" /></div>


        </div>

          : */}
                    <div className='rightnavbar' style={{ width: "100%" }}>
                        <div className='right_menu'>
                            <a href='/winnerDetails' className="hover_style">
                                Winner
                            </a>


                        </div>




                        <div className='right_menu'>
                            <a href='#/' className="hover_style">
                                <img src={User} alt='dfknkjhg' style={{width:"40px",height:"40px"}}/>
                            </a>




                        </div>

                    </div>
                   


                </div>

<div className="main_container">
    <div><br/></div>
                    <div><br /></div>
                    <div><br /></div>
    <div><br/></div>
                    <div><br /></div>
                    <div><br /></div>
    <div><br/></div>

    <div className='card1'>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.dog1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
         <div className='lineDiv'></div>
        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.dog2})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }} >
                            <div className='lineDiv1'></div>

                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.dog3})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv'></div>

                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.dog4})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv1'></div>

                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.dog5})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv'></div>

                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.dog6})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv1'></div>

                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.dog7})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv'></div>

                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.dog8})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv1'></div>

                        </div>

    </div>


                    <div className='card1'>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.winner1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv2'></div>
                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.winner4})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv21'></div>

                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.winner6})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv2'></div>

                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.winner7})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv21'></div>

                        </div>
                       

                    </div>


                    <div className='card1'>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.finalWinner1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv3'></div>
                        </div>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.finalWinner2})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                            <div className='lineDiv31'></div>

                        </div>
                     

                    </div>


                    <div className='card1'>
                        <div className='card11' style={{ backgroundImage: `url(${this.state.Details.winner})`, width: "20%", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "10px" }}>
                           
                        </div>
                        


                    </div>

</div>

                
                
            </div>
        );
    }
}

export default DogTree;
