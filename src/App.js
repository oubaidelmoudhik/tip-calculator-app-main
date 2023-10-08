import logo from "./logo.svg";
import "./App.css";

function BillForm() {
    return (
        <form action="">
            <label htmlFor="billInput">Bill</label>
            <input type="number" id="billInput" placeholder="0" />
            <fieldset>
                <legend>Select Tip %</legend>
                <div>
                    <input type="radio" id="5" />
                    <label htmlFor="5">5%</label>
                </div>
                <div>
                    <input type="radio" id="10" />
                    <label htmlFor="10">10%</label>
                </div>
                <div>
                    <input type="radio" id="15" />
                    <label htmlFor="15">15%</label>
                </div>
                <div>
                    <input type="radio" id="25" />
                    <label htmlFor="25">25%</label>
                </div>
                <div>
                    <input type="radio" id="50" />
                    <label htmlFor="50">50%</label>
                </div>
                <div>
                    <input type="number" id="custom" placeholder="Custom" />
                </div>
            </fieldset>
            <label htmlFor="people">Number of People</label>
            <input type="number" id="people" />
        </form>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div>
                <div>
                    <BillForm />
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default App;
