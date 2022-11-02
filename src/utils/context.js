import React, {createContext, useState} from "react"
import axios from "axios";

export const CustomContext = createContext();

const Context =  (props)=>{

    const [gender, setGender]=useState('woman')
    const [category, setCategory] = useState('t-short')
    const [price, setPrice] = useState('')
    const [page, setPage]=useState(1)
    const [size, setSize] = useState('')
    const [brands, setBrands] =useState([])
    const [brand, setBrand]=useState('')
    const [products,setProducts] =useState({
        data:[],
        error:'',
        dataLength:0
    })

    const changeGender = (value) =>{
        setGender(value)
        setPage(1)
        setBrand('')
    }

    const changeCategory = (value) =>{
        setCategory(value)
        setSize('')
        setPage(1)
        setBrand('')
        setPrice('')


    }
    const getProducts = ()=>{
            axios(`http://localhost:4444/catalog?gender=${gender}&category=${category}${price !== "" ? "&_sort=price&_order="+ price : ""}${brand !== ''? '&brand=' + brand : ''}`)
                .then(({data})=>{
                    setProducts({ data: data , dataLength:data.length, error:''})
                    axios(`http://localhost:4444/brands?category=${category}&gender=${gender}`)
                        .then(({data}) => setBrands(data[0].brand))
                        .catch(()=>alert('brand not found'))
                })
                .catch((error)=> setProducts({ error:error, dataLength:0, data:[]}))
    }

    const value= {
        products,
        getProducts,
        gender,
        category,
        changeCategory,
        changeGender,
        price,
        setPrice,
        size, setSize,
        page, setPage,
        setProducts,
        brand, setBrand,
        brands, setBrands

    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}

export default Context


