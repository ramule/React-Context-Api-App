import AppContext from './AppContext';

const AppState = (props) => {
    const state1 = {
        "name": "Ravi"
    };

    return (
        <AppContext.Provider value={state1}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;