import React from 'react';
import ReactDOM from 'react-dom';

class SingleActivitie extends React.Component {
    render() {
        return <div className="single-activitie activitie-box">
            <div className="avatar-box avatar005"></div>
            <div className="active-type answered">
                <p>Answered</p>
                <div className="status-dot"></div>
            </div>
        </div>;
    }
}

class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null
        }
    }
    componentWillMount() {
        this.updateWidth();
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWidth);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }
    updateWidth = () => {
        this.setState({ width: window.innerWidth });
    }
    render() {
        console.log(this.state.width);
        if (this.state.width > 800) {
            return <div className="activities">
                <div className="question-type activitie-box">
                    <div className="active-type">
                        <p>Asked</p>
                    </div>
                </div>
                <div className="more-activities activitie-box">
                    <div className="avatar-box">
                        <p className="number">3</p>
                    </div>
                    <div className="description">
                        <p className="status">more</p>
                        <p className="status">activities</p>
                    </div>
                    <div className="status-dot"></div>
                </div>
                <SingleActivitie />
                <SingleActivitie />
                <SingleActivitie />
                <SingleActivitie />
            </div>;
        } else {
            return <div className="activities">
                <div className="question-type activitie-box">
                    <div className="active-type">
                        <p>Asked</p>
                    </div>
                </div>
                <div className="more-activities activitie-box">
                    <div className="avatar-box">
                        <p className="number">3</p>
                    </div>
                    <div className="description">
                        <p className="status">more</p>
                        <p className="status">activities</p>
                    </div>
                    <div className="status-dot"></div>
                </div>
                <SingleActivitie />
            </div>;
        }
    }
}

class QuestionContainer extends React.Component {
    render() {
        return <section className="question-container container-border">
            <div className="question-title">
                <div className="avatar-box avatar001"></div>
                <div className="topic">
                    <p className="user-name">Eva</p>
                    <p>is asking:</p>
                    <h2>Will insulin make my patient gain weight?</h2>
                </div>
            </div>
            <div className="margin-bar">
                <div className="blue-box"></div>
            </div>
            <Activities />
            <div className="status-box">
                <p>
                    <span className="number">1</span>
                    <span className="status">related discussion</span>
                </p>
                <p>
                    <span className="number">6</span>
                    <span className="status">peers involved</span>
                </p>
                <p>
                    <span className="number">3</span>
                    <span className="status">conversations</span>
                </p>
            </div>
            <div className="question-status"></div>
        </section>;
    }
}

class App extends React.Component {
    render() {
        return <div>
            <header>
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
            </header>
            <section id="questions-container">
                <QuestionContainer />
            </section>
            <footer>
                <div className="container-border">
                    <a href="#">load more questions</a>
                </div>
            </footer>
        </div>;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
})
