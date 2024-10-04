// Importing the ReactDOM library
import ReactDOM from 'react-dom';

// Importing the main App component from the local 'App' module.
// This component serves as the root of the application and encapsulates all other components.
import App from './App';

// Using ReactDOM.render to render the App component into the HTML document.
ReactDOM.render(
  <App />,                        // The App component to be rendered
  document.getElementById('root') // The target DOM element where the component will be mounted
  // 'root' is the ID of the div in the index.html file where the React app will be injected.
);