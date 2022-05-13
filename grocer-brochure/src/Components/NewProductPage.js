import react, { useState } from "react"
import { Button, Alert } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from "../Database/axios";

const NewProductPage = () =>{

    const IMAGE_PATH = "/Images/"
    const CREATE_URL = '/product/new'

    const params = useParams();
    const [name, setName]= useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [imgFile, setImgFile] = useState("")
    const [success, setSuccess] = useState("")
    const [errMsg, setErrMsg] = useState("No Error")
    const [show, setShow] = useState(false)
    const [lastName, setLastName]= useState("")
    const navigate = useNavigate()


    useEffect(()=> {

        setErrMsg('');
    
      },[name,price,description])


    const createForm = () =>{

        let formData = new FormData();    //formdata object

        formData.append('merchant_id', params.merchant_id)
        formData.append('name', name);   //append the values with key, value pair
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image',imgFile)
        return formData
    }
    const resetForm = () =>{
        setLastName(name)
        setName('')
        setDescription('')
        setPrice('')
        setImgFile('')
        console.log(name)
    }

    const handleNavigate = () => {
        navigate(-1)
    }

    const handleSubmit = async (e) => {
        const data = createForm()
        try{
          const response = await axios.post(CREATE_URL,data,config)
        if(response.data.verified){
            setSuccess(true)
            setShow(true)
            resetForm()
        }
        else
          console.log(response.data)
          setErrMsg('Incorrect info')
        } catch(err){
            if(!err?.response){
              setErrMsg('No Response from Server');
            }
            else if(err.response?.status === 400){
              setErrMsg('Missing informatio');
            }
            else if(err.Response?.status === 401){
              setErrMsg("Unauthorized")
            }
            else {
              setErrMsg('Upload failed')
            }
    
        }
      }

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }

 

    return(
        <main>
        <div className="container d-grid">
        <div className = "row">
            <div className="col-md-12">
                <Button variant="success" onClick={e=>handleNavigate()}>Back to Store Page</Button>
            </div>
        </div>
        <Alert key="success"variant="success" show = {show}>
                Product {lastName} Created
        </Alert>
  
        <h1> Product Information</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div className="p-3 border bg-light">
                     <img src= {imgFile !== '' ? URL.createObjectURL(imgFile) : IMAGE_PATH.concat("Default-Logo.png")} alt= 'Missing image'
                     style ={{
                         "width": 500,
                         "height":480,
                         "flex": 1
                     }} ></img>
                    </div>
                </div>
                <div className="col-sm-6 d-grid gap-1" style={{ "font-size": "40px" }}>
                <form>
                <div class="form-group">
                    <label for="formGroupExampleInput"> Product Name</label>
                    <input type="text"   className="form-control" id="formGroupExampleInput" placeholder="Example input"value ={name} onChange ={e => setName(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Product Price:</label>
                    <input type="text"  className="form-control" id="formGroupExampleInput2" placeholder="Another input" value ={price} onChange = { e => setPrice(e.target.value)} required></input>
                </div>
                </form>
                <label for="exampleFormControlTextarea1">Description</label>
                    <div classNameName="p-3 border bg-light">
                    <textarea   className="form-control" id="exampleFormControlTextarea1" rows="3" value ={description} onChange={e => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div className="custom-file"  style= {{"margin-top": "25px", "Font-Size": '16px'}}>
                        <label classNam="custom-file-label" for="customFile">Product Image</label>
                        <input type="file" classNam="custom-file-input" id="customFile" onChange = {e => setImgFile(e.target.files[0])} ></input>
                    </div>
                </div>
            </div>
            <div className="row my-custom-row justify-content-center align-items-center" style= {{"marginTop": "50px"}}>
                <Button variant="success" size="lg" onClick ={e => handleSubmit()}>
                   Create New Product
                </Button>
            </div>
        </div>

        </main>
    )
}

export default NewProductPage;