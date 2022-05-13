import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { Alert,Button, Row, Col, Container, Modal} from 'react-bootstrap';
import AuthContext from '../Context/AuthProvider'
import axios from '../Database/axios';
import  './styles/Admin.css'
import Aos from 'aos';

const Admin = () => {

    const IMAGE_PATH = "/Images/"
      const [modalShow, setModalShow] = useState(false);

    const OUTGOING_URL = '/orders/outgoing';

    const Context   = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [outgoingOrders, setOutgoingOrders] = useState({});
    const [GP, setGP] = useState({});
    const navigate = useNavigate();
    const [imgFile, setImgFile] = useState("")
    const [profilePic, setProfilePic] = useState("Default-Logo.png")
    const [errMsg, setErrMsg] = useState("No Error")
    const [show, setShow] = useState(false)
    const [alertMsg, setAlertMsg] = useState("Profile Image updated!")

    useEffect(()=>{
        const run = async (e) => {
            try{
                const response = await axios.get(OUTGOING_URL, {
                    params: {
                        'merchant_id': Context.auth.id 
                    }
                });
                
                setOutgoingOrders(response.data)
                setSuccess(true)
                setProfilePic(response.data[0].image1_path)
            } catch (err) {
                console.log(err);
            }
        }
        run();
        if(success)
         filterOrders()
        console.log(`orders: ${outgoingOrders}`);
    }, [success])

    const filterOrders = () => {

        const groups = [...new Set(outgoingOrders.map(q => q.order_hash))];

        const groupProducts =
        groups.map( group => 
                outgoingOrders.filter(order => order.order_hash = group));

        setGP(groupProducts)

    };


    const renderRequest = (request) => {

        if(request.length > 0)
        return (
        <div className='admin-outgoing'>
            <h2>{request[0].full_name}</h2>
            <div className='admin-quantity'>{request.map(product => renderProduct(product))}</div>
        </div>
        )
        else
             return
      }

      
    const renderProduct = (product) => {
        return (            
            <p>{product.name}: {product.quantity}</p>
        );
    }

      const changeRoute = () => {
        navigate(`/StorePage/${Context.auth.id}/`, { });
      };

      const createForm = () =>{

        let formData = new FormData();    //formdata object
        formData.append('id', Context.auth.id)
        formData.append('image',imgFile)
        return formData
    }

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }

    const UPDATE_URL = '/product/merchantImage'

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = createForm()
        try{
          const response = await axios.post(UPDATE_URL,data,config)
        if(response.data.valid){
            console.log(response.data)
            setSuccess(true)
            setShow(true)
            setProfilePic(response.data.file_name)
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

      function MydModalWithGrid(props) {
        return (
          <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Update Das Profile Picture
              </Modal.Title>


            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
                <Row>
                <Alert key="success"variant="success" show = {show}>
                     {alertMsg}
                </Alert>
                </Row>
                <Row>
                  <Col xs={12} md={8}>
                  <img src= {imgFile !== '' ? URL.createObjectURL(imgFile) : IMAGE_PATH.concat(profilePic)} alt= 'Missing image'
                     style ={{
                         "width": 400,
                         "height":380,
                         "flex": 1
                     }} ></img>
                  </Col>
                  <Col xs={6} md={4}>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
            <label className="custom-file-label" for="customFile">Product Image</label>
                        <input type="file" classNam="custom-file-input" id="customFile" onChange = {e => setImgFile(e.target.files[0])}></input>
                <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    
    return (
        <main className='admin-main'>
             <> {GP.length > -1 ? (
            <><div className='leftside-admin'>
                    <img className="admin-profile" src= {imgFile !== '' ? URL.createObjectURL(imgFile) : IMAGE_PATH.concat(profilePic)}></img>
                    <button  onClick = {() => changeRoute()} className='admin-button'>
                        Manage Products
                    </button>
                    <button onClick = {() => setModalShow(true)} className='admin-button'>
                        Change Profile Image
                    </button>
                </div><div className='rightside-admin'>
                        <h1>Outgoing Orders</h1>
                        <div className='order-box'>
                        {GP.map(request => {
                            return (renderRequest(request))
                        })}
                        </div>
                    </div></>
             ) : (
                <div>
                <h1>Loading</h1>
              </div>

             )
            }
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
            </>  
        </main>
    )
};

export default Admin;