function CardComp({ value }) {
    return (
        <>
            <li>image :{value.card_img_top} </li>
            <li>title : {value.card_title}</li>
            <li>text : {value.card_text} </li>
            <li>btn :  {value.card_btn}</li>
        </>
    );
}

export default CardComp;