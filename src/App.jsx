import Marque from './components/Marque'
import Header from './components/Header'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Card from './components/Card'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import './App.css'

function App() {

  return (
    <>
      <Marque></Marque>
      <Header></Header>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <div className="cardsection">
        <Card></Card> 
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="cardsection">
        <Card></Card> 
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="cardsection">
        <Card></Card> 
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
