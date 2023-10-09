import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function TipCalculatorCard() {
    const tips = [5, 10, 15, 25, 50];
    const [bill, setBill] = useState(0);
    const [people, setPeople] = useState(0);
    const [percent, setPercent] = useState(0);
    const onChangeValue = (e) => {
        console.log(e.target);
        console.log(e.target.type);
        setPercent(Number(e.target.value));
    };

    let tipAmount;
    let total;
    if (bill && people && percent !== 0) {
        tipAmount = Number(((bill * (percent / 100)) / people).toFixed(2));
        total = (bill / people + tipAmount).toFixed(2);
    } else {
        tipAmount = 0;
        total = 0;
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
                        tips={tips}
                        onPercentChange={onChangeValue}
                    />
                </div>
                <div>
                    <Amount text={"Tip Amount"} amount={tipAmount} />
                    <Amount text={"Total"} amount={total} />
                    <button>RESET</button>
                </div>
            </div>
        </div>
    );
}

function TipSelect({ tips, onPercentChange }) {
    let tipsSelect = tips.map((tip) => {
        return (
            <div key={tip}>
                <input type="radio" name="tip" id={tip} value={tip} />
                <label htmlFor={tip}>{tip}%</label>
            </div>
        );
    });
    return (
        <fieldset onChange={onPercentChange}>
            <legend>Select Tip %</legend>
            {tipsSelect}
            <div>
                <input type="number" id="custom" placeholder="Custom" />
            </div>
        </fieldset>
    );
}

function BillForm({
    bill,
    onBillChange,
    people,
    onPeopleChange,
    tips,
    percent,
    onPercentChange,
}) {
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
            <TipSelect
                tips={tips}
                percent={percent}
                onPercentChange={onPercentChange}
            />
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
