import { useEffect, useState } from "react"
import LoadingView from "./Skeleton"
import { Card } from "react-bootstrap"
import CardProduct from "./Card"

export const GetData = () => {
    const[product,setProduct] = useState([])
    const[view,setView] = useState(true)
        const fetchData = () =>{
            fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(Response =>{
                setProduct(Response)
                setView(false)
                console.log(Response)
            } )
        }
        useEffect(() => {
            fetchData()
        },[])

        return(
          <>
          <div className="container">
            <div className="row">
            {
                view ? <LoadingView/> : product.map((products) => (
                    <CardProduct key={products.id} products={products}/>
                ))
            }
        
            </div>
          </div>
          
          </>
        )

}
