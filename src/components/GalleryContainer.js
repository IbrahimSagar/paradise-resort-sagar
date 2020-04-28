import React from 'react';
// import RoomList from "./RoomList";
// import RoomFilter from "./RoomFilter";
// import {RoomConsumer} from "../context";
 import Loading from "./Loading";

function GalleryContainer(props) {
     return (


                 value => {
                     const {loading} = value
                 if(loading){
                     return <Loading />
                 }
                     return(
                         <div>
                             Hello From
                         </div>
                     );
                 }


     );
 }

export default GalleryContainer;