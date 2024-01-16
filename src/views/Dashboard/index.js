import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
const [Products, setProducts] = useState([])
const navigate = useNavigate()


    useEffect(()=>{
        getProductFromAPI()
    },[])





const getProductFromAPI = ()=>{
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res=>console.log(res.Products));
}







    return <div>


        <h1>Dashboard</h1>


<button onClick={()=>navigate('contact')}>Contact Us</button> 
<button onClick={()=>navigate('about')}>About us</button>
    </div>

}
export default Dashboard;