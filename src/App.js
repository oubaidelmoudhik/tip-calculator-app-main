import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function TipCalculatorCard() {
    const tips = [5, 10, 15, 25, 50];
    const [bill, setBill] = useState("");
    const [people, setPeople] = useState("");
    const [selectedPercent, setSelectedPercent] = useState(null);
    const [customPercent, setCustomPercent] = useState("");

    const handleTipSelection = (percent) => {
        setSelectedPercent(percent);
        setCustomPercent("");
    };
    const handleCustomTip = (e) => {
        setCustomPercent(Number(e.target.value));
        if (selectedPercent !== null) {
            setSelectedPercent(null);
        }
    };

    const handleReset = () => {
        setBill(0);
        setPeople(0);
        setSelectedPercent(null);
        setCustomPercent(0);
    };
    let tipAmount;
    let total;
    if (bill && people > 0 && (selectedPercent !== 0 || customPercent !== 0)) {
        let percent =
            selectedPercent === null ? customPercent : selectedPercent;
        tipAmount = Number(((bill * (percent / 100)) / people).toFixed(2));
        total = Number((bill / people + tipAmount).toFixed(2));
    } else {
        tipAmount = 0;
        total = 0;
    }
    const resetEnable = bill || people || selectedPercent || customPercent;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="app__card">
                <div>
                    <BillForm
                        bill={bill}
                        onBillChange={setBill}
                        people={people}
                        onPeopleChange={setPeople}
                        tips={tips}
                        selectedPercent={selectedPercent}
                        onTipSelection={handleTipSelection}
                        customPercent={customPercent}
                        onCustomPercentChange={handleCustomTip}
                    />
                </div>
                <div className="app__totals">
                    <div className="app__totals__amounts">
                        <Amount
                            text={"Tip Amount"}
                            amount={tipAmount.toFixed(2)}
                        />
                        <Amount text={"Total"} amount={total.toFixed(2)} />
                    </div>
                    <button
                        type="button"
                        className="reset__btn"
                        disabled={resetEnable ? false : true}
                        onClick={handleReset}
                    >
                        RESET
                    </button>
                </div>
            </div>
        </div>
    );
}

function TipSelect({
    tips,
    selectedPercent,
    onTipSelection,
    customPercent,
    onCustomPercentChange,
}) {
    let tipsSelect = tips.map((tip) => {
        let checked = selectedPercent === tip;
        return (
            <div key={tip}>
                <label
                    htmlFor={tip}
                    className={checked ? "select checked" : "select"}
                >
                    {tip}%
                    <input
                        type="radio"
                        name="tip"
                        id={tip}
                        value={tip}
                        checked={checked}
                        onChange={() => onTipSelection(tip)}
                    />
                </label>
            </div>
        );
    });
    return (
        <div className="fieldset">
            <label>Select Tip %</label>
            <div>
                {tipsSelect}
                <div className="select custom">
                    <input
                        type="number"
                        id="custom"
                        placeholder="Custom"
                        value={customPercent}
                        onChange={onCustomPercentChange}
                        min={0}
                    />
                </div>
            </div>
        </div>
    );
}
function FormInput({ id, title, value, onChange }) {
    return (
        <div className="form__input">
            <label htmlFor={id}>{title}</label>
            <input
                type="number"
                id={id}
                placeholder="0"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                min={0}
            />
        </div>
    );
}
function BillForm({
    bill,
    onBillChange,
    people,
    onPeopleChange,
    tips,
    selectedPercent,
    onTipSelection,
    customPercent,
    onCustomPercentChange,
}) {
    return (
        <form action="" className="form">
            <FormInput
                id="billInput"
                title="Bill"
                value={bill}
                onChange={onBillChange}
            />
            <TipSelect
                tips={tips}
                selectedPercent={selectedPercent}
                onTipSelection={onTipSelection}
                customPercent={customPercent}
                onCustomPercentChange={onCustomPercentChange}
            />
            <FormInput
                id="peopleInput"
                title="Number of People"
                value={people}
                onChange={onPeopleChange}
            />
        </form>
    );
}

function Amount({ text, amount }) {
    return (
        <div>
            <div className="total__text">
                <p>{text}</p>
                <span>/ person</span>
            </div>
            <div>
                <h2>${amount}</h2>
            </div>
        </div>
    );
}
function Footer() {
    return (
        <div className="attribution">
            Coded by{" "}
            <a
                href="https://www.linkedin.com/in/oubaidelmoudhik/"
                target="_blank"
                rel="noreferrer"
            >
                Oubaid
            </a>
            .
        </div>
    );
}

function App() {
    return (
        <>
            <TipCalculatorCard />
            <Footer />
        </>
    );
}

export default App;
