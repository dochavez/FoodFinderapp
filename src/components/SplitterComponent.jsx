import React, {useState} from 'react';
import './../assets/stylesheets/splitter.scss'
import { Splitter } from '@progress/kendo-react-layout';
import CardComponent from './CardComponent';
import ChatComponent from './ChatComponent';
import CardList from './../assets/Lists/CardList'
import MenuModal from './MenuModal';
import RestaurantMenu from './../views/RestaurantMenu';

const SplitterComponent = () => {
    const [panes, setPanes] = React.useState([{
        size: '70%',
        min: '20px',
        collapsible: true
    }, {}, {}]);
    const [ nestedPanes, setNestedPanes ] = useState();
    const [ selectedRest, setSelectedRest ] = useState('');
    const [ showModal, setShowModal ] = React.useState(false);
    const [ showChat, setShowChat ] = React.useState(false);

    const onChange = event => {
        setPanes(event.newState);
    };

    const onNestedChange = event => {
        setNestedPanes(event.newState);
    };

    const onSelectRest = (rest_name) => {
        setSelectedRest(rest_name);
        setShowModal(true);
        setShowChat(false);
    };

    const card = CardList.map(card => {
        return <li>
            <CardComponent logo={card.logo} title={card.name} body={card.bio} onClickCard={onSelectRest} classButton={false} spanText="Menu"/>
        </li>
    })

    const onHideModal = () => {
        setShowModal(false);
        setShowChat(true);
    };
    return <div>
        <MenuModal
            show={showModal}
            onHide={() => onHideModal()}
            selectedRest={selectedRest}
            content={RestaurantMenu(selectedRest)}
        />
        <Splitter className="splitter" panes={nestedPanes} orientation={'vertical'} onChange={onNestedChange}>
            <Splitter panes={panes} onChange={onChange}>
                <div className="scrollpane">
                    <ul>
                    {card}
                    </ul>
                </div>
                <div className="pane-content">
                    {(showChat) ? <ChatComponent author={selectedRest}/> : null}
                </div>
            </Splitter>

        </Splitter>
        <style>{`
            .pane-content { padding: 0 10px; }
            .pane-content h3 { font-size: 1.2em; margin: 10px 0; padding: 0; }
            .pane-content p { margin: 0; padding: 0; }
            `}</style>
    </div>;
};

export default SplitterComponent;