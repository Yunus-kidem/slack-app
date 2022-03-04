import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';

function App() {
    return (
        // BEM naming convention
        <div className="App">
            <h1> Lahuwel ela kuwetel ela bilah,Inshallah!! </h1> 
            <Header/>
            <div className="app_body">
                <Sidebar/>
                {/* React-Router */}    
            </div>      
        </div>
    );
}

export default App;