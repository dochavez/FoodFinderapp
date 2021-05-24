import ValentisHawaiiana from './../images/valentis_hawaiiana.png'
import ValentisPepperoniHongos from './../images/valentis_pepperoni_hongos.jpg'
import ValentisTocineta from './../images/valentis_tocineta.jpg'

import McDonaldsBicMac from './../images/McDonalds_bigmac.png'
import McDonaldsQuesoDoble from './../images/McDonalds_quesodoble.png'
import McDonaldsRes from './../images/McDonalds_res.png'

const Menu = {
    valentis: [
        {
            picture: ValentisHawaiiana,
            name: 'Hawaiian Pizza',
            price: 5.00,
        }, {
            picture: ValentisPepperoniHongos,
            name: 'Pepperoni Pizza with Mushrooms',
            price: 6.00,
        }, {
            picture: ValentisTocineta,
            name: 'Bacon Pizza',
            price: 4.50,
        },
    ],
    mcdonalds: [
        {
            picture: McDonaldsBicMac,
            name: 'Big Mac',
            price: 4.80,
        }, {
            picture: McDonaldsQuesoDoble,
            name: 'Cheese Burger Double',
            price: 4.00,
        }, {
            picture: McDonaldsRes,
            name: 'Beef Burger',
            price: 4.35,
        },
    ],
}
export default Menu;