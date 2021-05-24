import React, {useState, useEffect} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AvatarComponent from './components/AvatarComponent';
import BottomNavigationComponent from './components/BottomNavigationComponent';
import CardComponent from './components/CardComponent';
import ChartContainer from "./components/ChartComponent";
import ChatComponent from "./components/ChatComponent";
import DrawerRouterContainer from './components/DrawerRouterContainer';
import MenuComponent from './components/MenuComponent';
import PanelBarComponent from './components/PanelBarComponent';
import ScheduleComponent from "./components/ScheduleComponent";
import SplitterComponent from './components/SplitterComponent';
import StepperComponent from './components/StepperComponent';
import TabStripComponent from './components/TabStripComponent';
import TileLayoutComponent from './components/TileLayoutComponent';
import LeftPanelItems from './assets/Lists/LeftPanelItems'
import Login from './views/Login'

const App = () => {
    const userInitialState = {
        name: '',
        userName: '',
        isAdmin: false,
    };

    const [ user, setUser ] = useState(userInitialState);
    const [ userSession, setUserSession ] = useState(false);
    const [ usersList, setUsersList ] = useState([userInitialState]);
    const getData=()=>{
        fetch('mockedapi.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                setUsersList(myJson.Users);
                console.log(usersList);
            });
    }
    useEffect(()=>{
        getData();
    },[])
    const onSubmitt = ( usersession ) => {
        console.log(usersession)
        // setUser( usersession );
        // setUserSession(true);
        usersList.map((item) =>{
            if(( item.username === usersession.userName && item.password === usersession.password )){
                setUser({...user,
                    name: item.name,
                    userName: userSession.userName,
                    isAdmin: item.isAdmin
                });
                setUserSession(true)
            }
        })
    };

    const callLogin = () =>{
        return <Login setUserSession={onSubmitt}/>;
    }
    const callChart = () =>{
        return <ChartContainer user={user}/>;
    }
    return <React.Fragment>
        <HashRouter>
            { (!userSession) ? <Route exact={true} path="/" component={callLogin} />
                : <DrawerRouterContainer
                    items={( user.isAdmin ) ? LeftPanelItems.Admin : LeftPanelItems.Customer}
                    user={user}
                >
                    <Switch>
                        {(user.isAdmin) ?
                            <React.Fragment>
                                <Route exact={true} path="/schedulecomponent" component={ScheduleComponent} />
                                <Route exact={true} path="/" component={callChart} />
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Route exact={true} path="/" component={AvatarComponent} />
                                <Route exact={true} path="/splitter" component={SplitterComponent} />
                                {/*<Route exact={true} path="/card" component={CardComponent} />*/}
                                {/*<Route exact={true} path="/menu" component={MenuComponent} />*/}
                                {/*<Route exact={true} path="/panelbar" component={PanelBarComponent} />*/}
                                {/*<Route exact={true} path="/splitter" component={SplitterComponent} />*/}
                                {/*<Route exact={true} path="/stepper" component={StepperComponent} />*/}
                                {/*<Route exact={true} path="/tabstrip" component={TabStripComponent} />*/}
                                {/*<Route exact={true} path="/tilelayout" component={TileLayoutComponent} />*/}
                                {/*<Route exact={true} path="/chatcomponent" component={ChatComponent} />*/}
                            </React.Fragment>
                        }}

                    </Switch>
                </DrawerRouterContainer>
            }
        </HashRouter>
    </React.Fragment>;
};

export default App;
