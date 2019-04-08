import React, { Component } from 'react';
import Menu from './components/menu';
import firebase from './firebase/firebase';
import Header from './components/header'
import './App.css';
import {Container , Row  , Table ,Col ,Button ,ListGroup , Input} from 'reactstrap'
export default class App extends Component {
constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('food');
    this.unsubscribe = null;
    this.state = {
      food: {} ,
      typefood: 'breakfast',
      userName: '',
      countTotal: 0,
      list: []  
    };
  }
onCollectionUpdate = (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.setState({
          food:doc.data()
      }) });    
  }
componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }    
handleClick = () => {  
firebase.firestore().collection('orders').add({
    userName: this.state.userName,
    countTotal: this.countTotal,
    list:this.state.list
   });  
  }
handleChange = (e) => {
    this.setState({
      typefood: e.target.name
    })
  } 
handleAddItem = (name, priceItem, nameNow) => {
const list = this.state.list;
if (list.find(({ id }) => id === nameNow) ) 
 {
   list.forEach(item => {
   if (item.id === nameNow) {
        item.count++;
        item.price = priceItem * item.count; }
    })
  this.sumTotalOrder(list);
} 
 else {
list.push({
        item: name,
        price: priceItem,
        id: nameNow,
        count: 1
      });
   list.forEach(item => {
        if (item.id === nameNow) {
              item.price = priceItem * item.count; }
         })
      this.sumTotalOrder(list); }
   }
deleteOrder = (index  , price) => {
  const list = this.state.list;
  list.splice(index, 1);
  this.setState({ countTotal : this.countTotal - parseInt(this.price) }) 
  }  
sumTotalOrder = (list) => {
   let sum = 0;
   list.forEach(({ price }) => sum += price);
  this.countTotal = sum;
  this.setState({list:list , countTotal : this.countTotal + parseInt(this.price) }) 
} 
userName = (e) => {
 this.setState({
     userName: e.target.value
    }) 
  } 
render() {
    const { typefood, food, list } = this.state;
    const size = Object.keys(food);
  return (
    <Container class='container-fluid'>
     <Header/>  
    <Row> 
      <Col sm="">
        <div class='d-flex'>
       <div class = 'p-2'> <Button  name="breakfast"  onClick={this.handleChange}>Desayuno</Button></div>
       <div class = 'p-2'><Button name="dinner"  onClick={this.handleChange}>Almuerzo</Button> </div>
     </div>
      </Col>
    </Row>
    <br />
    <Row>
     <Col sm="4">
      <ListGroup>
              { size.length ?
                  food[typefood].map(({ item, price }) =>
                    <Menu nameFood={item} priceFood={price} key={item}
                      add={this.handleAddItem} />)
                  : null }
      </ListGroup>
     </Col>
     <Col sm="8">
     <div class='d-flex'>
     <div class ='w-50 p-2'>
     <Input placeholder="nombre" type="text" onChange={this.userName} value={this.userName} />
     </div>
     <div class = 'w-50 p-2' >      
     <Button onClick={this.handleClick}>Enviar</Button> 
       </div>
     </div>
      <br />
     <Table hover>
        <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
        </tr>
        </thead>
        <tbody>
        {list.map(({ item, price, count  }, i) =>
        <tr >
           <td> {item}</td>
           <td >s/.{price}</td>
           <td >{count}  </td>
           <td ><i className="fas fa-times" onClick={() => this.deleteOrder(i,item.id,price)}></i> </td> 
        </tr>   )}
        <tr>
   <td>Total</td>
           <td>s/. {this.countTotal}</td>
                   <td></td>
                   <td></td>
           </tr>
            </tbody>
      </Table> 
     </Col>      
    </Row>
     </Container >
    );
  }
}

