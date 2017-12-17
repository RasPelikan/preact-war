import { h, Component } from "preact";
import { Link } from "preact-router";
import * as styles from "./style.css";

export interface AppProps {
    name: string;
}

interface AppState {
    name: string;
}

export class App extends Component<AppProps, AppState> {
    constructor( props: AppProps ) {
        super( props );

        this.state = { name: props.name };
    }
    
    componentDidMount() {
        setTimeout(() => {
            var state = this.state;
            state.name = "Preact's componentDidMount worked as expected!";
            this.setState( state );
        }, 2000 );
    }
    
    render( props: AppProps, state: AppState ) {
        return (
            <div>
                <h1 className={styles.locals.title}>PROPS: {props.name} state: {state.name}</h1>
                <ul>
                <li><Link activeClassName='' href='/'>Home</Link></li>
                <li><Link activeClassName='' href='/about'>About</Link></li>
                </ul>
            </div>
            );
    }
}
