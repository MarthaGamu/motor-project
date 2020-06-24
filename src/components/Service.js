import React from 'react'
import styled from 'styled-components';
import mechanic from '../images/mechanicA.jpg'

const Services = styled.div`
h1{
    text-align:center;
    padding-top:50px;
    padding-bottom:50px;
}
.cardContainer{
    width:100vw;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:450px 500px;
    grid-gap:20px;

    .serviceCard{
        padding:30px;
        color:#979797;
    }
   

 .imgCard img{
     width:100%;
     height:100%;
     
 }
 h2{
     color:#d3d3d3;
 }
}

`

;
function Service() {
    return (
        
        <div>
            <Services>
            <h1>OUR SERVICES</h1>
      <div className ='cardContainer'>
      <div className='serviceCard'>
          <div className='imgCard'>
              <img src={mechanic} alt='mechanic'/>
              </div>
              <div className='info'>
                  <h2>Wheel Service</h2>
                  <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet.</p>
                  </div>
          </div>
          <div className='serviceCard'>
          <div className='imgCard'>
              <img src={mechanic} alt='mechanic'/>
              </div>
              <div className='info'>
                  <h4>Steering Service</h4>
                  <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet.</p>
                  </div>
          </div>
          <div className='serviceCard'>
          <div className='imgCard'>
              <img src={mechanic} alt='mechanic'/>
              </div>
              <div className='info'>
                  <h4>Glass Wash Service</h4>
                  <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet.</p>
                  </div>
          </div>
          <div className='serviceCard'>
          <div className='imgCard'>
              <img src={mechanic} alt='mechanic'/>
              </div>
              <div className='info'>
                  <h4>
Repair Service</h4>
                  <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet.</p>
                  </div>
          </div>
          <div className='serviceCard'>
          <div className='imgCard'>
              <img src={mechanic} alt='mechanic'/>
              </div>
              <div className='info'>
                  <h4>Carpet Wash Service</h4>
                  <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet.</p>
                  </div>
          </div>
          <div className='serviceCard'>
          <div className='imgCard'>
              <img src={mechanic} alt='mechanic'/>
              </div>
              <div className='info'>
                  <h4>
Interiors VAC Service</h4>
                  <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec ac nec. Nam vel eu amet.</p>
                  </div>
          </div>
          </div>
             
            </Services>
       
        </div>
    )
}

export default Service
