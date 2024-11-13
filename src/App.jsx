import Logo from './components/Logo';
import Heading from './components/Heading';
import Subtitle from './components/Subtitle';
import Text from './components/Text';
import Input from './components/Input';
import Button from './components/Button';

import './App.css';

const App = () => {

  return (
    <div className="container">
      <header>
        <Logo className="logo" text="PIZZA DAY" />
      </header>
      <main>
        <Heading text="The best pizza." />
        <Subtitle className="subtitle" text="Straight out of the oven, straight to you." />
        <Text className="welcome">Welcome! Please start by telling us your name:</Text>
        <Input type="text" placeholder="Your full name" aria-label="Your full name" />
        <Button className="btn" text="Start Order" />
      </main>
    </div>
  );
}

export default App;