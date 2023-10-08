import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function TipCalculatorCard() {
    const [bill, setBill] = useState();
    const [people, setPeople] = useState();

    let tipAmount;
    if (bill && people) {
        tipAmount = (bill / people).toFixed(2);
    } else {
        tipAmount = 0;
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div>
                <div>
                    <BillForm
                        bill={bill}
                        onBillChange={setBill}
                        people={people}
                        onPeopleChange={setPeople}
                    />
                </div>
                <div>
                    <Amount text={"Tip Amount"} amount={tipAmount} />
                    <Amount text={"Total"} amount={0} />
                    <button>RESET</button>
                </div>
            </div>
        </div>
    );
}

function TipSelect() {
    const tips = [5, 10, 15, 25, 50];

    let tipsSelect = tips.map((tip) => {
        return (
            <div key={tip}>
                <input type="radio" name="tip" id={tip} />
                <label htmlFor={tip}>{tip}%</label>
            </div>
        );
    });
    return (
        <fieldset>
            <legend>Select Tip %</legend>
            {tipsSelect}
            <div>
                <input type="number" id="custom" placeholder="Custom" />
            </div>
        </fieldset>
    );
}

function BillForm({ bill, onBillChange, people, onPeopleChange }) {
    return (
        <form action="">
            <label htmlFor="billInput">Bill</label>
            <input
                type="number"
                id="billInput"
                placeholder="0"
                value={bill}
                onChange={(e) => {
                    onBillChange(e.target.value);
                }}
            />
            <TipSelect />
            <label htmlFor="people">Number of People</label>
            <input
                type="number"
                id="people"
                placeholder="0"
                value={people}
                onChange={(e) => {
                    onPeopleChange(e.target.value);
                }}
            />
        </form>
    );
}

function Amount({ text, amount }) {
    return (
        <div>
            <div>
                <p>{text}</p>
                <span>/ person</span>
            </div>
            <div>
                <p>${amount}</p>
            </div>
        </div>
    );
}

function App() {
    return <TipCalculatorCard />;
}

export default App;
