import './App.css';
import styled from 'styled-components';
import imgview from '../src/images/image-equilibrium.jpg';
import ethicon from '../src/images/icon-ethereum.png';
import clockicon from  '../src/images/icon-clock.png';
import avatar from '../src/images/image-avatar.png';


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
  margin: 10px;
  padding: 10px;
  transition: all 0.5s;
  padding: 35px;

`

export const H1 = styled.h1`
  font-size: 30px;
  color: hsl(0,0%,100%);
  padding-top: 2rem;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: hsl(178, 100%, 50%);
  }
`

export const Image = styled.img`
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    opacity: 0.5;  
  }
`

export const PDescription = styled.p`
  color: hsl(215,51%,70%);
  padding-top: 2rem;
  font-size: 25px;
  width: 25rem;
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
    font-size: 20px;
    padding-top: 2rem;
    display: flex;
    align-items: center;

    img{
      margin-right: 10px;
    }
   }

    p + p {
      color: hsl(215,51%,70%);
      font-size: 20px;
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
  margin-top: 2rem;

  img{
    width: 55px;
    border-radius: 50%;
    border: 3px solid #fff;
  }

  p{
    color:  hsl(215,51%,70%);
    font-size: 20px;
    margin-left: 1.5rem;

    span{
      font-weight: bold;
      color: hsl(0,0%,100%);
      transition: all 0.5s;
      cursor: pointer;

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
        <Image src={imgview} width={400} alt="Preview"/>
        
        <ContentCard>
          <H1>Equilibrium #3429</H1>
          <PDescription> 
            Our Equilibrium collection promotes balance and calm.
          </PDescription>  
        </ContentCard>

        <InformationCard>
          <p><img src={ethicon} width={11} height={18} alt="icon ethereum"/> 0.041 ETH </p>
          <p><img src={clockicon} width={17} height={17} alt="icon clock"/> 3 days left </p>
        </InformationCard>

        <Line/>

        <Creator>
          <img src={avatar} alt="avatar"/>
          <p> Creation of <span> Jules Wyvern</span> </p>
        </Creator>
      </Card>
    </Main>
  );
}

export default App;
