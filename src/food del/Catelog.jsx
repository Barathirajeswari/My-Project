import CARD from "./CardCollection";
import CardComp from "./CardComp";

function Catelog() {
    return (
        <>
            {
                CARD.map((value) => {
                    return <CardComp value={value} />
                })
            }
        </>
    );
}

export default Catelog; 