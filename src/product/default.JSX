import IndividualProduct from "./IndividualProduct";
import { defaultProducts } from "./product";
function IndividualProductsCreator(inp) {
    return(
        <div className="SingleIndPro">
            <IndividualProduct
                key = {inp.id}
                pImage = {inp.pImage}
                pName = {inp.pName}
                pPrice = {inp.pPrice}
            />
        </div>  
    ) 
}


function IndividualProductRender() {
    return(  
        <div className="category">{defaultProducts.map(IndividualProductsCreator)}</div>
    )
}

export default IndividualProductRender;