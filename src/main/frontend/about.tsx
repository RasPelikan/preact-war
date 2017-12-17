import { h, Component } from "preact";

export interface AboutProps {

}

interface AboutState {

}

export class About extends Component<AboutProps, AboutState> {
    constructor( props: AboutProps ) {
        super( props );
    }
    
    render( props: AboutProps, state: AboutState ) {
        return <h1>JUHU</h1>;
    }
}
