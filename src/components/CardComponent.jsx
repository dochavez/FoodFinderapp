import React from 'react';
import './../assets/stylesheets/CardComponent.scss'
import { Button } from "@progress/kendo-react-buttons";
import { Card, CardHeader, CardBody, CardTitle, CardImage, CardActions } from '@progress/kendo-react-layout';

import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = props => {

    const { dir, logo, title, body, onClickCard, spanText, classButton } = props;
    return <React.Fragment>
        <Card dir={dir} className="card_container">
            <CardImage src={logo} />
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <p>{body}</p>
            </CardBody>
            <CardActions>
                <Button class={classButton ? "secondary_button" : "primary_button"} onClick={() => onClickCard(title)}>{spanText}</Button>
            </CardActions>
        </Card>
    </React.Fragment>;
};

export default CardComponent;
