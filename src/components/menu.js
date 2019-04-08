import React from 'react';
import {  ListGroupItem } from 'reactstrap';

const Menu =  ({ nameFood , priceFood, add }) => {
  return (
    <div>
       <ListGroupItem>
         <div class="d-flex ">
    <div class = ' w-50 p-2'> {nameFood}  </div>
   <div class = ' w-50 p-2'> s/.{priceFood}   </div>
   <div class = ' w-50 p-2'> <i class="fas fa-plus" onClick={() =>add(nameFood, priceFood,nameFood)}></i></div>
 </div>
        </ListGroupItem>
        
    </div>
  );
};

export default Menu ;