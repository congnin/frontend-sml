import './App.css';
import AppRouter from './AppRouter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faUser, faQuoteLeft, faQuoteRight, faTrophy, faMedal, faInbox, faPaperPlane, faComments,
faSearch, faCalendarAlt, faTasks, faCaretLeft, faCaretDown, faTimes, faHeart, faHandHoldingHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faUser, faQuoteLeft, faQuoteRight, faTrophy, faMedal, faInbox, faPaperPlane, faComments,
  faSearch, faCalendarAlt, faTasks, faCaretLeft, faCaretDown, faTimes, faHeart, faHandHoldingHeart, faHeartBroken);

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
