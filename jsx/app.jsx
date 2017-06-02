import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <header>
            <section id="back-button">
                <div id="back-sign"></div>
            </section>
            <section id="head-container">
                <section id="head-top">
                    <div id="name">QUESTIONS</div>
                    <div id="plus-button">+</div>
                    <div id="head-select">
                        <form>
                            <input type="radio" />My shelf
                            <input type="radio" />All questions
                        </form>
                    </div>
                    <div id="head-sort">
                        <p>Sort by: <a href="#">recent</a> or <a href="#">hot</a></p>
                    </div>
                </section>
                <section id="head-bottom">
                    <input id="text-input" type="text" placeholder="Search questions" />
                    <input id="search-submit" type="submit" value="SEARCH" />
                </section>
            </section>
        </header>;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
})
