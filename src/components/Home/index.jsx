import logo from '../../logo.svg';
import './Home.css';
import { MetaDecorator } from '../MetaDecorator';

const defaultData = {
    title: 'Home page',
    body: 'Default description',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
};

export const Home = () => {
    return (
        <>
            <MetaDecorator 
                title={defaultData.title}
                description={defaultData.body}
                image={defaultData.image}
            />
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                </header>
            </div>
        </>
    );
}
