import Styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = Styled.div`

display: grid;
width: 100%;
height: 55px;
justify-items: start;
align-items: center;
grid-template-columns: 3fr 3fr 5fr;
box-shadow: 0 10px 10px -10px gray;
position: fixed;
top:0;
gap:0;
z-index:99;
background:#ffffff;
`;

export const PageTitle = Styled.h2`

font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif;    
font-size: 1.3rem;
color: #000000;
text-align: center;
margin: 5px 60px 5px 60px;
letter-spacing: 3px;
font-weight: bold;


`;

export const MenuWrapper = Styled.div`

position: relative;
left: -2.5em;
display: grid;
justify-items: center;
align-items: center;
grid-template-columns: 1fr 1fr 1fr;

#local-storage{
    border-bottom: ${(props) =>
      props.onLocalStorage === true ? "2px solid black" : "none"};
    display: inline-block;
    line-height: 1.2;

}

#local-storage:active{
    border-bottom: ${(props) =>
      props.onLocalStorage === true ? "2px solid black" : "3px dotted gray"};
    display: inline-block;
    line-height: 1.2;

}

#gnews{
    border-bottom: ${(props) =>
      props.onGnews === true ? "2px solid black" : "none"};
      display: inline-block;
    line-height: 1.2;
}

#gnews:active{
    border-bottom: ${(props) =>
      props.onGnews === true ? "2px solid black" : "3px dotted gray"};
    display: inline-block;
    line-height: 1.2;

}

`;

export const CustomLink = Styled(Link)`

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: #000000; 
    cursor: pointer;
    text-decoration: none;


&:active {
    border: 3px dotted gray;
    text-decoration: none;

}
&:hover {
    color: #000000; 
    text-decoration: none;

}
`;
