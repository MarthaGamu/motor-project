import React from 'react';
import styled from 'styled-components';
import smile from '../images/smile.jpg';


const Slider = styled.div`
.slideShow{
    background:green;
    position: relative;
    width:100vw;
    height:400px;
}
.mySlides{
    
    width:80%;
    background:white;
    margin:auto;
    text-align:center;
    padding-top:10%;
}
.slideImg{
    width:100px;
    height:100px;
    margin:auto;
    
    
    img{
        width:auto;
        height:100%;
        border-radius:50%;
    }


}
.prev,.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -30px;
    padding: 16px;
    color: #888;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .next {
    position: absolute;
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
    color: white;
  }
  .dot-container {
    text-align: center;
    padding: 20px;
    background: #ddd;
  }
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  .active, .dot:hover {
    background-color: #717171;
  }
  q {font-style: italic;}

  .author {color: cornflowerblue;}


`;


function Slideshow() {
    return (
        <Slider>
        <div className='slideShow'>
            <div className='mySlides'>
             <div className='slideImg'>
                 <img src={smile} alt='face'/>
                 </div>
                 <div className='slideInfo'>
            <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
  <p class="author">- John Keats</p>
  </div>
                </div>


                <div className='mySlides'>
             <div className='slideImg'>
                 <img src={smile} alt='face'/>
                 </div>
                 <div className='slideInfo'>
            <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
  <p class="author">- John Keats</p>
  </div>

  <div className='mySlides'>
             <div className='slideImg'>
                 <img src={smile} alt='face'/>
                 </div>
                 <div className='slideInfo'>
            <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
  <p class="author">- John Keats</p>
  </div>
                </div>
                </div>
            
               
  <a  href className="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a href className="next" onclick="plusSlides(1)">&#10095;</a> 



  <div className="dot-container">
  <span className="dot" onclick="currentSlide(1)"></span>
  <span className="dot" onclick="currentSlide(2)"></span>
  <span className="dot" onclick="currentSlide(3)"></span>
</div>     
        </div>
        </Slider>
    )
}

export default Slideshow
