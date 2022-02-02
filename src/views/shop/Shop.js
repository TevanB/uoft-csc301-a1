import React from "react";
import axios from "axios";
// reactstrap components
import {
  Form,
  FormGroup,
  Input,
  Card,
  CardBody,
  Button,
  Row,
  Col,
  CardHeader
} from "reactstrap";
import { getConstantValue } from "typescript";
// core components

function Shop(){
    const [items, setItems] = React.useState([])
    const [cart, setCart] = React.useState({})
    const [cartVal, setCartVal] = React.useState(0)
    React.useEffect(()=>{
        getItems()
    },[items.length==0])
    React.useEffect(()=>{
        // console.log(items)
    },[items])
    React.useEffect(()=>{
        // console.log(cart)
    },[cart])
    async function getItems(){
        axios.get("http://localhost:5000/items").then((res)=>{
            //console.log(res)
            setItems(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    function checkout(e){
        e.preventDefault();
        console.log(cart)
        console.log(e)
    }
    function itemCartUpdate(e, item){
        let curCart = cart;
        curCart[item._id] = parseFloat(e.target.value) * parseFloat(item.item_price);
        setCart(curCart)
        setCartVal(getTotal())
    }
    function getTotal(){
        let counter = 0
        for(var key in cart){
            console.log(key)
            counter += cart[key];
        }  
        return counter
    }
    if(items.length>0){
        console.log()
        return (
            <>
            <Form onSubmit={checkout} className="text-center">
                <Row>
                {items.map((cur, i)=>{
                    return (
                        <Col>
                            <Card key={i} >
                                <CardBody>
                                    <h2>{cur.item_name}</h2>
                                    <FormGroup>
                                    <label htmlFor="exampleFormControlSelect1">Select Quantity</label>
                                    <Input key={i} id="exampleFormControlSelect1" type="select" onChange={(e)=>{itemCartUpdate(e, cur)}}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
                </Row>
            </Form>
            <Card className="text-center">

                <CardBody>
                    <h2>Total ${cartVal}</h2>
                </CardBody>
                <Button type="submit"> Checkout </Button>

            </Card>

        </>
        )
    }else{
        return(
            <div></div>
        )
    }
    // return (
    //     <>
    //     <Form>
    //         <h2>{props.name}</h2>
    //         <FormGroup>
    //         <label htmlFor="exampleFormControlSelect1">Select Quantity</label>
    //         <Input id="exampleFormControlSelect1" type="select">
    //             <option>1</option>
    //             <option>2</option>
    //             <option>3</option>
    //             <option>4</option>
    //             <option>5</option>
    //         </Input>
    //         </FormGroup>
    //         {/* <FormGroup>
    //         <label htmlFor="exampleFormControlSelect2">
    //             Example multiple select
    //         </label>
    //         <Input id="exampleFormControlSelect2" multiple="" type="select">
    //             <option>1</option>
    //             <option>2</option>
    //             <option>3</option>
    //             <option>4</option>
    //             <option>5</option>
    //         </Input>
    //         </FormGroup>
    //         <FormGroup>
    //         <label htmlFor="exampleFormControlTextarea1">
    //             Example textarea
    //         </label>
    //         <Input
    //             id="exampleFormControlTextarea1"
    //             rows="3"
    //             type="textarea"
    //         ></Input>
    //         </FormGroup> */}
    //     </Form>
    //     </>
    // );
}

export default Shop;