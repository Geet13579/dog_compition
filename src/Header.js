
import './header.css';
import React, { Component } from 'react';
import User from './user.png'


class Header extends Component {

  render() {
    return (
      <div>

        {/* {isMobile == true ?

        <div className='popuMenu'>
          <div onClick={closePopupmenu} className="closeButton" >close</div>

        </div>
        : <div></div>} */}

        <div className='Header_Main'>
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
          <div className='rightnavbar'>
            <div className='right_menu'>
              <a href='/winnerDetails' className="hover_style">
                Winner
              </a>


            </div>




            <div className='right_menu'>
              <a href='#/' className="hover_style">
                <img src={User} alt='dfknkjhg' style={{ width: "50px", height: "50px" }} />
              </a>




            </div>

          </div>
          {/* } */}


        </div>


      </div>
    );
  }
}

export default Header;

