import React from "react";
import './rightSpace.css'
import { ItemCard } from "../../itemCard/itemCard";
const flower = [
{name:'цветочки', rating: '8.7'},
{name:'цветочки', rating: '8.7'},
{name:'цветочки', rating: '8.7'},
{name:'цветочки', rating: '8.7'},
{name:'цветочки', rating: '8.7'},
{name:'цветочки', rating: '8.7'},
]


function RightSpace () {
    return (
        <div className="items_wrap">
            {flower.map((item) => (
                <ItemCard name={item.name} rating={item.rating}/>
            ))}
        </div>
    )
}

export { RightSpace }