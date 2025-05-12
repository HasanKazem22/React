import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  const handleHobbyClick = ((hobby) => {
    alert(`You clicked on ${hobby}`)
  })

  const mohammadInfo = {
    name: "Mohammad",
    age: 4,
    isGood: true,
    hobbies: ['Buy Car', 'Watch Islamic Cartoon'],
    onHobbyClick: handleHobbyClick
  }

  const zarifaInfo = {
    name: "Zarifa Mufliha",
    age: 3,
    isGood: true,
    hobbies: ['Buy Dress', 'Travelling'],
    onHobbyClick: handleHobbyClick
  }

  return (
    <div className='app-container'>
      <h1>Madrasa Students Information</h1>
      <ProfileCard {...mohammadInfo} />
      <ProfileCard {...zarifaInfo} />
    </div>
  )
}

export default App
