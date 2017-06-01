// document.addEventListener('DOMContentLoaded', ()=>{
console.log('is working..');
// })

import React from 'react';
import ReactDOM from 'react-dom';

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
                                <input type="radio" checked>My shelf
                            <input type="radio">All questions
                        </form>
                    </div>
                                <div id="head-sort">
                                    <p>Sort by: <a href="#">recent</a> or <a href="#">hot</a></p>
                                </div>
                </section>
                            <section id="head-bottom">
                                <input id="text-input" type="text" placeholder="Search questions">
                                    <input id="search-submit" type="submit" value="SEARCH">
                </section>
            </section>
        </header>

                            <section id="questions-container">

                                <section class="question-container container-border">
                                    <div class="question-title">
                                        <div class="avatar-box avatar001"></div>
                                        <div class="topic">
                                            <p class="user-name">Eva</p>
                                            <p>is asking:</p>
                                            <h2>Will insulin make my patient gain weight?</h2>
                                        </div>
                                    </div>
                                    <div class="margin-bar">
                                        <div class="blue-box"></div>
                                    </div>
                                    <div class="activities">
                                        <div class="question-type activitie-box">
                                            <div class="active-type">
                                                <p>Asked</p>
                                            </div>
                                        </div>
                                        <div class="more-activities activitie-box">
                                            <div class="avatar-box">
                                                <p class="number">3</p>
                                            </div>
                                            <div class="description">
                                                <p class="status">more</p>
                                                <p class="status">activities</p>
                                            </div>
                                            <div class="status-dot"></div>
                                        </div>
                                        <div class="single-activitie activitie-box">
                                            <div class="avatar-box avatar005"></div>
                                            <div class="active-type answered">
                                                <p>Answered</p>
                                                <div class="status-dot"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="status-box">
                                        <p>
                                            <span class="number">1</span>
                                            <span class="status">related discussion</span>
                                        </p>
                                        <p>
                                            <span class="number">6</span>
                                            <span class="status">peers involved</span>
                                        </p>
                                        <p>
                                            <span class="number">3</span>
                                            <span class="status">conversations</span>
                                        </p>
                                    </div>
                                    <div class="question-status"></div>
                                </section>

                                <section class="question-container container-border">
                                    <div class="question-title">
                                        <div class="avatar-box avatar001"></div>
                                        <div class="topic">
                                            <p class="user-name">Eva</p>
                                            <p>is asking:</p>
                                            <h2>Will insulin make my patient gain weight?</h2>
                                        </div>
                                    </div>
                                    <div class="margin-bar">
                                        <div class="blue-box"></div>
                                    </div>
                                    <div class="activities">
                                        <div class="question-type activitie-box">
                                            <div class="active-type">
                                                <p>Asked</p>
                                            </div>
                                        </div>
                                        <div class="more-activities activitie-box">
                                            <div class="avatar-box">
                                                <p class="number">3</p>
                                            </div>
                                            <div class="description">
                                                <p class="status">more</p>
                                                <p class="status">activities</p>
                                            </div>
                                            <div class="status-dot"></div>
                                        </div>
                                        <div class="single-activitie activitie-box">
                                            <div class="avatar-box avatar005"></div>
                                            <div class="active-type answered">
                                                <p>Answered</p>
                                                <div class="status-dot"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="status-box">
                                        <p>
                                            <span class="number">1</span>
                                            <span class="status">related discussion</span>
                                        </p>
                                        <p>
                                            <span class="number">6</span>
                                            <span class="status">peers involved</span>
                                        </p>
                                        <p>
                                            <span class="number">3</span>
                                            <span class="status">conversations</span>
                                        </p>
                                    </div>
                                    <div class="question-status"></div>
                                </section>

                                <section class="question-container container-border">
                                    <div class="question-title">
                                        <div class="avatar-box avatar001"></div>
                                        <div class="topic">
                                            <p class="user-name">Eva</p>
                                            <p>is asking:</p>
                                            <h2>Will insulin make my patient gain weight?</h2>
                                        </div>
                                    </div>
                                    <div class="margin-bar">
                                        <div class="blue-box"></div>
                                    </div>
                                    <div class="activities">
                                        <div class="question-type activitie-box">
                                            <div class="active-type">
                                                <p>Asked</p>
                                            </div>
                                        </div>
                                        <div class="more-activities activitie-box">
                                            <div class="avatar-box">
                                                <p class="number">3</p>
                                            </div>
                                            <div class="description">
                                                <p class="status">more</p>
                                                <p class="status">activities</p>
                                            </div>
                                            <div class="status-dot"></div>
                                        </div>
                                        <div class="single-activitie activitie-box">
                                            <div class="avatar-box avatar005"></div>
                                            <div class="active-type answered">
                                                <p>Answered</p>
                                                <div class="status-dot"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="status-box">
                                        <p>
                                            <span class="number">1</span>
                                            <span class="status">related discussion</span>
                                        </p>
                                        <p>
                                            <span class="number">6</span>
                                            <span class="status">peers involved</span>
                                        </p>
                                        <p>
                                            <span class="number">3</span>
                                            <span class="status">conversations</span>
                                        </p>
                                    </div>
                                    <div class="question-status"></div>
                                </section>

                            </section>

                            <footer>
                                <div class="container-border">
                                    <a href="#">load more questions</a>
                                </div>
                            </footer>
                        </div>;
    }
}

document.addEventListener('DOMContentLoaded',
    function(){
                            ReactDOM.render(
                                <App />,
                                document.getElementById('app')
                            )
                        })