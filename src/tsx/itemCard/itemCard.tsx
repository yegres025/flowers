import React from "react";
import './itemCard.css'

function ItemCard(props: {name: string, rating: string}) {
    return (
        <div className="item_card_wrap">
            <img className="item_card_img" src="https://www.novochag.ru/upload/img_cache/9ce/9ceea6955796e3459f19621d82171cdd_cropped_666x888.jpg"></img>
            <div>{props.name}</div>
            <div>{props.rating}</div>
        </div>
    )
}

export { ItemCard }