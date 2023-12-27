import './App.css';
import React from 'react';
import BigNumber from 'bignumber.js';
import navia1 from './navia1.png';


const levelhpArray = [
    91.1791,
    98.707667,
    106.23622,
    113.764771,
    121.293322,
    128.821878,
    136.350422,
    143.878978,
    151.407522,
    158.936078,
    169.991484,
    181.076253,
    192.190362,
    204.048207,
    215.938996,
    227.86275,
    247.685944,
    267.542105,
    287.431209,
    303.826417,
    320.225217,
    336.627633,
    352.319267,
    368.010913,
    383.702548,
    394.432358,
    405.18147,
    415.949907,
    426.737645,
    437.544709,
    450.600004,
    463.700301,
    476.845577,
    491.127512,
    502.554564,
    514.012104,
    531.409589,
    549.979601,
    568.58488,
    584.99652,
    605.670375,
    626.386206,
    646.052333,
    665.755638,
    685.496096,
    700.839402,
    723.333147,
    745.865265,
    768.435731,
    786.791945,
    809.538812,
    832.329057,
    855.162654,
    878.039628,
    899.484802,
    919.362018,
    946.039586,
    974.764223,
    1003.578617,
    1030.077002,
    1056.634974,
    1085.246306,
    1113.924427,
    1149.25872,
    1178.064819,
    1200.223743,
    1227.660294,
    1257.242987,
    1284.917392,
    1314.75288,
    1342.665216,
    1372.752485,
    1396.320986,
    1427.312436,
    1458.374528,
    1482.335772,
    1511.910837,
    1541.549377,
    1569.153701,
    1596.814298,
    1622.419626,
    1648.074031,
    1666.376146,
    1684.678276,
    1702.980391,
    1726.104684,
    1754.671567,
    1785.86656,
    1817.137404,
    1851.060358,
    1885.067163,
    1921.749303,
    1958.523291,
    2006.194108,
    2041.569007,
    2054.472064,
    2065.97498,
    2174.7226,
    2186.7682,
    2198.81396
];
let level = 1;
let em = 0;


function calculateShieldStrength(level, em) {
    let shieldMultiplier = new BigNumber(4.44);
    let emValue = new BigNumber(em);
    let emDenominator = new BigNumber(1400);
    let emAddition = emValue.plus(emDenominator);
    let emDivision = shieldMultiplier.times(emValue).dividedBy(emAddition);
    let shieldStrength = emDivision.times(100);
    shieldStrength = shieldStrength.dividedBy(100);

    if (shieldStrength.isZero()) {
        return Math.round(levelhpArray[level - 1]);
    }
    else {
        shieldStrength = shieldStrength.plus(1);
        let shieldValue = shieldStrength.times(levelhpArray[level - 1]);
        return Math.round(shieldValue);
    }
}


function LevelSlider() {
    return (
        <div>
            <input type="range" min="1" max="90" step="1" defaultValue="1" onChange={event => {
                level = event.target.value;
                document.getElementById("level").innerHTML = level;
                document.getElementById("shield").innerHTML = calculateShieldStrength(level, em);
            }}/>
            <p>Level: <span id="level">1</span></p>
        </div>
    );
}


function EmSlider() {
    return (
        <div>
            <input type="range" min="0" max="1250" step="1" defaultValue="0" onChange={event => {
                em = event.target.value;
                document.getElementById("em").innerHTML = em;
                document.getElementById("shield").innerHTML = calculateShieldStrength(level, em);
            }}/>
            <p>Elemental Mastery: <span id="em">0</span></p>
        </div>
    );
}


function ShieldValue() {
    let shieldStrength = calculateShieldStrength(level, em);
    return (
        <div>
            <p>Shield Strength: <span id="shield">{shieldStrength}</span></p>
        </div>
    );
}


function Navia() {
    return (
        <div>
            <img src={navia1} className="App-logo" alt="logo"/>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Crystallize shield calculator</h1>
            <LevelSlider/>
            <EmSlider/>
            <ShieldValue/>
            <Navia/>
        </header>
    </div>
  );
}

export default App;
