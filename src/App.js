import './App.css';
import styled from 'styled-components';
import imgview from '../src/images/image-equilibrium.jpg';
import ethicon from '../src/images/icon-ethereum.png';
import clockicon from  '../src/images/icon-clock.png';
import avatar from '../src/images/image-avatar.png';
import iconview from '../src/images/icon-view.png';



export const Main = styled.div`
  background-color: hsl(217, 54%, 11%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const Card = styled.div`
  background-color:  hsl(216, 50%, 16%);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  transition: all 0.5s;
  padding: 20px;
  max-width: 300px;
  min-width: 300px;
`

export const TitleLinkArea = styled.div`
  padding: 1.5rem 0;
`

export const TitleLink = styled.a`
  font-size: 22.4px;
  color: hsl(0,0%,100%);
  cursor: pointer;
  transition: all 0.5s;
  text-decoration: none;
  font-weight: bold;
 
  &:hover {
    color: hsl(178, 100%, 50%);
  }
`

export const CardImage = styled.div`
    background: no-repeat;
    background-position: center;
    background-size: contain;
    display: inline-block;
    position: relative;
    z-index: 1;


    &:hover::after {
      opacity: 0.6;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:after {
      background: hsl(178deg 100% 50%);
      display: inline-block;
      position: absolute;
      content: url('${iconview}');
      width: 100%;
      height: 100%;
      opacity: 0;
      top: 0;
      left: 0;
      transition: all 0.5s;
      border-radius: 10px;

    }
`

export const Image = styled.img`
  border-radius: 10px;
  width: 100%;
`

export const Description = styled.p`
    color: hsl(215,51%,70%);
    font-size: 15.6px;
`

export const ContentCard = styled.div`
   text-align: initial;
`

export const InformationCard = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   p {
    color: hsl(178, 100%, 50%);
    font-weight: bold;
    font-size: 15.6px;
    padding-top: 2rem;
    display: flex;
    align-items: center;

    img{
      margin-right: 10px;
    }
   }

    p + p {
      color: hsl(215,51%,70%);
      font-size: 15.6px;
      font-weight: normal;
    }

    
`

export const Line = styled.hr`
  border: 1px solid hsl(0deg 0% 100% / 12%);
  margin-top: 1rem;
`

export const Creator = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 20px;

  img{
    width: 35px;
    border-radius: 50%;
    border: 3px solid #fff;
    height: 35px;
  }

  p{
    color:  hsl(215,51%,70%);
    font-size: 15.6px;
    margin-left: 1rem;

    a{
      font-weight: bold;
      color: hsl(0,0%,100%);
      transition: all 0.5s;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: hsl(178, 100%, 50%);
      }
    }
  }
`

function App() {
  return (
    <Main>
      <Card>
        <a href="">
        <CardImage>
         <Image src={imgview} alt=""/>
       </CardImage>
        </a>
        <ContentCard>
          <TitleLinkArea>
              <TitleLink href="#">Equilibrium #3429</TitleLink>
          </TitleLinkArea>
          <Description> 
            Our Equilibrium collection promotes balance and calm.
          </Description>  
        </ContentCard>
        <InformationCard>
          <p><img src={ethicon} width={11} height={18} alt="icon ethereum"/> 0.041 ETH </p>
          <p><img src={clockicon} width={17} height={17} alt="icon clock"/> 3 days left </p>
        </InformationCard>
        <Line/>
        <Creator>
          <img src={avatar} alt="avatar"/>
          <p> Creation of <a href="#"> Jules Wyvern</a> </p>
        </Creator>
      </Card>
    </Main>
  );
}

export default App;
