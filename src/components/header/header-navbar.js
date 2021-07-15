import Header from './header.component';
import Navbar from './Navbar';

const showButton = () => {
  if(window.innerWidth <= 960) {
    return Navbar
  } else {return Header}
}

export default showButton;