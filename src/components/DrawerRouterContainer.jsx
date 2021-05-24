import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, AppBarSection, AppBarSpacer, Avatar, Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
let kendokaAvatar = 'https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png';


const DrawerRouterContainer = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState(props.items.findIndex(x => x.selected === true));

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const onSelect = e => {
        setExpanded(!expanded);
        setSelectedId(e.itemIndex);
        props.history.push(e.itemTarget.props.route);
    };

    const setSelectedItem = pathName => {
        let currentPath = props.items.find(item => item.route === pathName);

        if (currentPath.text) {
            return currentPath.text;
        }
    };

    const selected = setSelectedItem(props.location.pathname);
    return <React.Fragment>
        <AppBar>
            <AppBarSection>
                <Button icon="layout" look="flat" onClick={handleClick} />
            </AppBarSection>

            <AppBarSection>
                <h1 className="title">{props.user.name}</h1>
            </AppBarSection>

            <AppBarSpacer />

            <AppBarSection>
                <Avatar shape="circle" type="image">
                    <img src={kendokaAvatar} />
                </Avatar>
            </AppBarSection>
        </AppBar>

        <Drawer expanded={expanded} mode="push" position="start" mini={true} items={props.items.map(item => ({ ...item,
            selected: item.text === selected
        }))} onSelect={onSelect}>
            <DrawerContent>
                {props.items.map(item => {
                    console.log(item);
                    return item.selected && <div className="content" id={item.text}>
                        {props.children}
                    </div>;
                })}
            </DrawerContent>
        </Drawer>
        <style>{`
              .header { padding: 20px; text-align: center; }
              .content { padding: 40px 20px; }
              `}</style>
    </React.Fragment>;
};

export default withRouter(DrawerRouterContainer);
