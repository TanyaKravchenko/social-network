import React from 'react';
import './App.css';
import header_image from './images/image-header.jpg'
import content_img from './images/anons.jpg'

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src={header_image} alt={'header_image'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img src={content_img} alt={'content_img'}/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
