import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div id='outer-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-10 offset-lg-1'>
            <Main id='app'></Main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
