import ItemsForm from '../components/ItemsForm'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer';

function AddItem(){
    return(
        <>
            <Navbar />
            <ItemsForm />
            <Footer />
        </>
    )
}

export default AddItem;