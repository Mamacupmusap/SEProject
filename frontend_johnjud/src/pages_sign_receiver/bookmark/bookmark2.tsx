import React, {useState} from "react";
import './bookmark2.css';
import Navigation from '../../Navigation/Navigation';
import bookmarkService from "./bookmarkService";
import {useEffect} from "react";

const url = "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"

const Bookmark = () => {
    const[obj,setObj] = useState<any[]>([]);
    const petArr=() =>{
        return(
            bookmarkService.fetchbookmark()
                .then(name => {
                    setObj(name)
                })
        )
    }
    useEffect(()=>{
        petArr().then()
    },[])
    /*
    const petName = obj.map(item=>(<span>{item.PetName}</span>))
    const petPic = obj.map(item=>(<span>{item.petPicUrl}</span>))
    const petUrl = obj.map(item=>(<span>{item.id}</span>))
    */
    return (
        <html>
        <Navigation/>
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
            <div className="row-pet">
                {obj.map((value) => {
                    return <a href={'./petprofile/'+value.id}>
                        <div className="col-pet">
                            <img src={url} alt={value.petPicUrl} className="pet-img"/> <strong>{value.PetName}</strong>
                        </div>
                    </a>
                })}
            </div>
        </div>
        </body>
        </html>
    )
}

export default Bookmark;