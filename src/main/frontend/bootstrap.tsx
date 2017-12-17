import Router from 'preact-router';
import { h, render } from "preact";
import { App } from "./app";
import { About } from "./about";

const Main = () => (
    <Router>
        <App path="/" name="cool working" />
        <About path="/about" />
    </Router>
        );

render(<Main />, document.getElementById("app"));
