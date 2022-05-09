import react, { useState } from "react"
import { Button, Alert } from "react-bootstrap";
import { useParams } from 'react-router-dom';
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


    const createForm = () =>{

        let formData = new FormData();    //formdata object

        formData.append('merchant_id', params.merchant_id)
        formData.append('name', name);   //append the values with key, value pair
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image',imgFile)
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        return formData
    }

    const handleSubmit = async (e) => {
        const data = createForm()
        try{
          const response = await axios.post(CREATE_URL,data,config)
        if(response.data.verified){
            setSuccess(true)
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
        <main><body>
        <div className="container d-grid">
        <Alert key="success"variant="success" show = {show}>
                Product Created
        </Alert>
        <h1> Product Information</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div className="p-3 border bg-light">
                     <img src= {imgFile !== '' ? imgFile : IMAGE_PATH.concat("Default-Logo.png")} alt= 'Missing image'
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
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange ={e => setName(e.target.value)}></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Product Price:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" onChange = { e => setPrice(e.target.value)}></input>
                </div>
                </form>
                <label for="exampleFormControlTextarea1">Description</label>
                    <div className="p-3 border bg-light">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <div class="custom-file"  style= {{"margin-top": "25px", "Font-Size": '16px'}}>
                        <label class="custom-file-label" for="customFile">Product Image</label>
                        <input type="file" class="custom-file-input" id="customFile" onChange = {e => setImgFile(e.target.files[0])} ></input>
                    </div>
                </div>
            </div>
    
            <div className="row my-custom-row justify-content-center align-items-center" style= {{"marginTop": "50px"}}>
                <Button variant="success" size="lg" onClick ={e => handleSubmit()}>
                   Create New Product
                </Button>
            </div>
        </div>
        </body>
        </main>
    )
}

export default NewProductPage;