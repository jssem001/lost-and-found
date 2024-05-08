import React,{useState} from "react";
import axios from "axios";


function AddItem({setToys}){
    //to create a state for the new item
const [formdata, setFormdata] =useState(
    {
        image:"",
        name:"",
        contact:"",
        description:"",
        location:""
    }
)
    function handleadd(e){
        setFormdata({
           ...formdata,
            [e.target.name]:e.target.value
        })
    }
    function handleadd(){
       axios.post("http://localhost:8002/toys",formdata)
       .then(res=>{return console.log("Successfully posted data to server",setToys(res));})
       .catch(err=>console.log("error posting data",err))
    }

    return(
        <div>
            <h1>Add Item</h1>
            <form>
                <label>Image</label>
                <input type="text" name="image" value={formdata.image} onChange={handleadd} placeholder="image url.."/>
                <label>Item Name</label>
                <input type="text" name="name" value={formdata.name} placeholder="eg Subaru forester"/>
                <label>Your Contact</label>
                <input type="text" name="contact" value={formdata.contact} placeholder="eg 0712 345 678"/>
                <label>Description</label>
                <input type="text" name="description" value={formdata.description} placeholder="eg green"/>
                <label>location</label>
                <input type="text" name="location" value={formdata.location} placeholder="eg Near supermaket"/>

                <button type="submit" onSubmit={handleadd}>Post</button>
            </form>
        </div>
    )
}
export default AddItem;