import React, { useState } from 'react';
import './../assets/stylesheets/RestaurantMenu.scss'
import CardComponent from './../components/CardComponent';
import Menus from './../assets/Lists/Menus';


const RestaurantMenu = ( props ) => {

    console.log("props"+props)
    const [ carList, setCarList ] = useState([]);
    const addToCar = (name) => {
        if (carList.includes(name)) {
            const newCarList = [...carList];
            console.log(newCarList)
            newCarList.map((item, index) => {
                if (item === name) {
                    delete newCarList[index]
                    setCarList(newCarList);
                }
            })
        } else {
            setCarList([...carList, name])
        }
    };
    const showMenuValentis  = Menus.valentis.map(card => {
        console.log(card)
        return <li>
            <CardComponent
                logo={card.picture}
                title={card.name}
                body={"$"+card.price}
                onClickCard={addToCar}
                classButton={carList.includes(card.name)}
                spanText={carList.includes(card.name) ? "Remove" : "Add to car"}
            />
        </li>
    })
    const showMenuMcDonalds  = Menus.mcdonalds.map(card => {
        console.log(card)
        return <li>
            <CardComponent
                logo={card.picture}
                title={card.name}
                body={"$"+card.price}
                onClickCard={addToCar}
                classButton={carList.includes(card.name)}
                spanText={carList.includes(card.name) ? "Remove" : "Add to car"}
            />
        </li>
    })
    return <React.Fragment>
        <ul>
            {(props === "Valentis Pizza") ? showMenuValentis : showMenuMcDonalds }
        </ul>
    </React.Fragment>
}

export default RestaurantMenu;