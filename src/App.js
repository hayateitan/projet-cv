
import './App.css';
import Header from './components/Header'
import SectionItem from './components/SectionItem'
import SectionTitle from './components/SecionTitle'
import SectionItem2 from './components/SectionItem2'
import SectionItem3 from './components/SectionItem3'
import SectionItem4 from './components/SectionItem4'
import SectionItem5 from './components/SectionItem5'
import SectionItem6 from './components/SectionItem6'
import SectionItem7 from './components/SectionItem7'
import SectionItem8 from './components/SectionItem8';
import Bordure from './components/Bordure'

function App() {
  return (

    <div className="App"  >
      <Header title='EXPERIENCE' icon="book" class='titre1' />
      <Header title='FORMATION' icon="import_contacts" class='titre2' />
      <Header title='HOBBIES' icon="sports_mma" class='titre3' />
      <Header title='PROFILE' icon="person" class='titre4' />
      <Header title='COMPETENCE PRO' icon="manage_accounts" class='titre5' />
      <Header title='PERSONALITE' icon="dehaze" class='titre6' />
      <Header title='LANGUES' icon="translate" class='titre7' />
      <Header title='12 rue de la Réussite 75012 Paris' icon="home" class='titre8' />
      <Header title='0612345678' icon="phone_iphone" class='titre9' />
      <Header title='Facebook.com/moi' icon="public" class='titre10' />
      <Header title='monmail@mail.com' icon="email" class='titre11' />
      <SectionItem  />
      <SectionTitle />
      <SectionItem2 />
      <SectionItem3 />
      <SectionItem4 />
      <SectionItem5 />
      <SectionItem6 />
      <SectionItem7 />
      <SectionItem8 />
      <Bordure />

    </div>
  );
}

export default App;
