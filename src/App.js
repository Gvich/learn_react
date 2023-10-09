import './App.css';
import MyButton from "./QuickStart/MyButton";
import Profile from "./QuickStart/Profile";
import ConditionRendering from "./QuickStart/ConditionRendering";
import RenderingList from "./QuickStart/RenderingList";
import MyButton2 from "./QuickStart/RespondingEvents";
import UseStateButton from "./QuickStart/UseStateButton";
import {useState} from "react";
import Game from "./Tic-Tac-Toe/Game";
import ParentComponent from "./Hooks/Done/useCallback";
import Context from "./Hooks/Done/createContext_useContext";
import StatusBar from "./Hooks/Done/useDebugValue/useDebugValue";
import DeferredCount from "./Hooks/Done/useDeferredValue";
import ExampleComponent from "./Hooks/Done/useEffect/useEffect";
// import Cursor from "./Hooks/Done/useEffect/Cursor";
import List from "./Hooks/Done/useEffect/withObserver/List";
import PasswordForm from "./Hooks/Done/useId";
import Layout from "./Hooks/Done/useLayoutEffect/useLayoutEffect";
import ToolTipForm from "./Hooks/Done/useLayoutEffect/ToolTipForm";
import Square from "./Hooks/Done/useMemo";
import Reducer from "./Hooks/Done/useReducer";
import TabContainer from "./Hooks/Done/useTransition/Transition";
import TodosApp from "./Hooks/Done/useSyncExternalStore/TodoApp";
import CatFriends from "./Hooks/Done/useRef/useRef_forwardRef_useImperativeHandle";

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            {/*<Cursor/>*/}
            <div className="App">
                <h1>Welcome to my app</h1>
                <MyButton/>
                <Profile/>
                <ConditionRendering/>
                <RenderingList/>
                <MyButton2/>
                <div>
                    <h1>Counters that update separately</h1>
                    <UseStateButton/>
                    <UseStateButton/>
                </div>
                <div>
                    <h1>Counters that update together</h1>
                    <MyButton3 count={count} onClick={handleClick} />
                    <MyButton3 count={count} onClick={handleClick} />
                </div>
                <div style={{marginTop: '20px'}}>
                    <Game/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <ParentComponent/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <Context/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <StatusBar/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <DeferredCount/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <ExampleComponent/>
                </div>
                <div style={{marginTop: '20px', overflowY: "scroll", height: '200px'}}>
                    <List/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <PasswordForm/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <Layout/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <ToolTipForm/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <Square/>
                </div>
                <div style={{marginTop: '20px', marginBottom: '20px'}}>
                    <Reducer/>
                </div>
                <div style={{marginTop: '20px', overflowY: "scroll", height: '200px', width: '500px', margin: '0 auto'}}>
                    <TabContainer/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <TodosApp/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <CatFriends/>
                </div>
            </div>
        </>
    );
}

export default App;


function MyButton3({count, onClick}) {


    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}