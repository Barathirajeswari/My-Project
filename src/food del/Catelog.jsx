import Card from "./CardCollection";
import CardComp from "./CardComp";

function Catelog() {
    return ( 
        <>
        {
            Card.map(()=>{
                return<CardComp />
            })
        }
        </>
     );
}

export default Catelog; 