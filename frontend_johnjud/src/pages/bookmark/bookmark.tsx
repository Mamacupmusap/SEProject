import React from "react";
import './bookmark.css';
import text1 from './text1.png'
import text2 from './text2.png'
import jame from './jame.png'
import yoda from './yoda.png'


const Bookmark = () => {
    return (
        <html>
        <head>
            <title>Bookmark</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
            </style>
        </head>
        <body className="bookmark-body">
            <div className="bookmark-container">
                <div className="bookmark">
                    Bookmark
                </div>
                <div className="row-pe" id="BookmarkPet">
                    <a href='./petUrl1'>
                        <div className="col-pet">
                            <img src={text1} alt={text1} className="pet-img" height="130"/> <br/> <strong>text</strong>
                        </div>
                    </a>
                    <a href='./petUrl2'>
                        <div className="col-pet">
                            <img src={jame} alt={jame} className="pet-img" height="130"/> <br/> <strong>Jame</strong>
                        </div>
                    </a>
                    <a href='./petUrl3'>
                        <div className="col-pet">
                            <img src={yoda} alt={yoda} className="pet-img" height="130"/> <br/> <strong>Yoda</strong>
                        </div>
                    </a>
                    <a href='./petUrl4'>
                        <div className="col-pet">
                            <img src={text2} alt={text2} className="pet-img" height="130"/> <br/> <strong>text</strong>
                        </div>
                    </a>
                </div>
            </div>
        </body>
        </html>
    )
}

export default Bookmark;