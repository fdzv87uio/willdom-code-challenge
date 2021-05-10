import Styled from "styled-components";

export const ArticleWrapper = Styled.div`

width: 100%;
height: auto;
z-index:1;
position: relative;


`;

export const ContentWrapper = Styled.div`

margin: 10px 60px 10px 60px;
width: 100%;
height: 380px;

`;

export const TextWrapper = Styled.div`


justify-items: left;
width: 100%;
height: 100%;

#title-container{
    display: inline;
}

#first-title {  
    display: inline;
    font-family: 'Urban Inline', sans-serif;
    font-size:2.2rem;
    color: #000000;
    z-index:1;
    font-weight:lighter;
    position: relative;
}

#second-title {
    display: inline;
    font-family: "georgia", serif ;
    font-weight: bold;
    color: #000000;
    z-index:1;
    font-size:2rem;
}

#space{
    font-size: 0.20rem;
}

#delete{
    border-radius: 5px 5px 5px 5px!important;
    font-size:0.8rem;
}
p{
    font-family: "georgia", serif ;
    color:gray;
    font-size: 1rem;
    z-index:1;
}

span{
    font-family: "monaco", sans-serif ;
    color:gray;
    font-size:0.75rem;
    margin: 0;
    border: 0;
    position: relative;
    bottom: 22px;
    z-index:1;
}

`;

export const Image = Styled.img`

    height: 355px;
    width: 82%;
    position: relative;
    left:30px;
    top:10px;
    overflow: hidden;
    object-fit: cover;
    z-index:1;


`;
