import react from "react"
import { Button, Form, Alert } from "react-bootstrap";



const NewProductPage = () =>{

    const IMAGE_PATH = "/Images/"

    const default_product = {
        name: "Product Name",
        price: "4.99",
        description: "Your Product description here",
    }

    return(
        <main><body>
        <div className="container d-grid">
        <Alert key="success"variant="success" show = {false}>
                Added Item to cart!
        </Alert>
        <h1> Product Information</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div className="p-3 border bg-light">
                     <img src= {IMAGE_PATH.concat("Default-Logo.png")} alt="Missing Image"
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
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Product Price:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"></input>
                </div>
                </form>
                <label for="exampleFormControlTextarea1">Description</label>
                    <div className="p-3 border bg-light">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="custom-file"  style= {{"margin-top": "25px", "Font-Size": '16px'}}>
                        <label class="custom-file-label" for="customFile">Product Image</label>
                        <input type="file" class="custom-file-input" id="customFile"></input>
                    </div>
                </div>
            </div>
    
            <div className="row my-custom-row justify-content-center align-items-center" style= {{"margin-top": "50px"}}>
                <Button variant="success" size="lg" >
                   Create New Product
                </Button>
            </div>
        </div>
        </body>
        </main>
    )
}

export default NewProductPage;