import { useEffect, useState } from "react"


function Products(){

   

   

    let [products,setProducts] = useState([]);

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
           setProducts(data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])



  return (
    <div className="products">

        {
            products.map((product,index)=>{

                return (
                    <div className="product" key={product.id}>
                        <div className="image-wrapper">
                            <img className="p-image" src={product.image} alt="product" />
                        </div>
                        <h1 className="p-title">{product.title}</h1>
                        <h3>{product.price}</h3>
                    </div>
                )

            })
        }
       
    </div>
  )
}

export default Products
