import "./App.css";

import Button from './component/Button';
import {ButtonStyle } from './component/buttonStyle';  
function App() {
  return (
    <div>
      
      <Button buttonText="Learn More" />
      <Button buttonText="Add to Cart" />
    </div>
  );
}
<ButtonStyle buttonText="Learn More" buttonStyle="learn-button" />
<ButtonStyle buttonText="Add to Cart" buttonStyle="add-to-cart-button" />


export default App;
