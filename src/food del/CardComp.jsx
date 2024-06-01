import './custom.css';

function CardComp({ arr, value, setArr }) {
    function handleClick() {
        setArr([...arr,value.title]);
    }
    return (
        <div className="card">
            <div>
                <img src={value.img_top} height={100} width={100} alt={value.title}/>
                <h2>{value.title}</h2>
                <p>{value.text} </p>
                <button onClick={handleClick}>{value.btn}</button>
            </div>
        </div>
    );
}

export default CardComp;

