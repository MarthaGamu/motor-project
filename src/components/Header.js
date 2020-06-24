import React from 'react';
import styled from 'styled-components';
import bmw from '../images/bmwa.jpg'


const LogoContainer = styled.div`

.imgWrapper{
    width:100vw;
    height:90vh;
    
    
     img{
     width:100%;
     height:100%;
     
     object-fit:cover;
    }
}

nav{
    display:flex;
    justify-content:space-evenly;
    background:#1338BE;
    width:100vw;
    height:10vh;
    text-align:center;
    padding-top:20px;
    margin-right:50px;
    
    .link{
        display:inline;
        margin-left:50px;
        font-weight:900;
    }
  .linksWrapper{
      padding:0;
      margin:0;
  }

}
.message{
    position:absolute;
    top:30%;
    left:10vw;
    right:10vw;
    width:80vw;
    height:300px;
    background:black;
    opacity:0.9;
    color:white;
    
    text-align:center;

.InnerMessage{
    width:50vw;
    margin:auto;
    
}

.contactBtn{
    border:unset;
    background:#1338BE;
    padding: 20px 18px 20px 18px;
    border-radius:20px;
    margin-top:30px;
    font-weight:600;
    color:white;
}

}
.bottomBanner{
    display:flex;
   text-align:center;
   color:white;
    .bottom{
        width:33.3%;
        height:200px;
        background:#1338BE;
        border-left:1px solid grey;
    }
}

`;




function Header() {
    return (
    <div className='Wrapper'>
     
            <LogoContainer>

    <nav>
     <ul className='linksWrapper'>
         <li className='link'>HOME</li>
         <li className='link'>ABOUT</li>
         <li className='link'>SERVICES</li>
        
         <li className='link'>CONTACT US</li>

         </ul>

        </nav>
    

       
<div className='imgWrapper'>
    
<img src={bmw} alt='car'/>


    </div>
    <div className='message'>
        <div className='InnerMessage'>
    <h1>WELCOME TO OUR WORKSHOP</h1>
    <p>Don't bother typing “lorem ipsum” into Google translate. If you already tried, you may have gotten anything from "NATO" to "China", depending on how you capitalized the letters. The bizarre translation was fodder for conspiracy theories, but Google has since updated its “lorem ipsum” translation to, boringly enough, “lorem ipsum”.</p>
    <button className='contactBtn'>GET A QUOTE</button>
    </div>
    </div>
    <div className='bottomBanner'>
    <div className='professionals bottom'>
        <h3>PROFESSIONAL EMPLOYEES</h3>
        <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor.</p>

        </div>
        <div className='support bottom'>
            <h3>24/7</h3>
            <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor.</p>
        </div>
        <div className='verified bottom'>
            <h3>VERIFIED & SECURED SERVICE</h3>
                <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor.</p>

        </div>
        </div>

</LogoContainer>

    
      

        </div>
    )
}

export default Header
