import { useState } from "react";
import CARD from "./CardCollection";
import CardComp from "./CardComp";

function Catelog() {
    const [arr, setArr] = useState([]);
    return (
        <>
            <div className="orders">
                <h2>your orders list </h2>
                <ol>
                    {
                        arr.map((value,index) => {
                            return <li key={index}> {value}</li>;
                        })
                    }
                </ol>
                <button>place your order</button>
            </div>
            {
                CARD.map((value) => {
                    return <CardComp arr={arr} setArr={setArr} value={value} />
                })
            }
        </>
    );
}

export default Catelog; 