function CardComp({obj}) {
    return ( 
        <>
        <li>image :{obj.card_img_top} </li>
        <li>title : {obj.card_title}</li>
        <li>text : {obj.card_text} </li>
        <li>btn :  {obj.card_btn}</li>
        </>
     );
}

export default CardComp;