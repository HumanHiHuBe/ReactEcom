import "./main.css";
import Product from "./product.js";
import Category from "./Category.jsx";
import SubCategory from "./SubCategory.jsx";
import IndividualProduct from "./IndividualProduct"


const SubCatArr = Product.flatMap( (x) => x.SubCategory );
const IndProArr = SubCatArr.flatMap( (x) => x.Products );

function CategoryCreator(inp){
    return(
        <div className="SingleCat">
            <Category
                key = {inp.id}
                Category = {inp.Category}
            /> 
        </div>
    )   
}

function SubCategoryCreator(inp) {
    return(
        <div className="SingleSubCat">
            <SubCategory
                key = {inp.id}
                SubCategory = {inp.SubCategory}
            />
        </div>
    )   
}

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


function CategoryRender() {
    return(  
        Product.map(CategoryCreator)
    )
}

function SubCategoryRender() {
    return(  
        SubCatArr.map(SubCategoryCreator)
    )
}
function IndividualProductRender() {
    return(  
        IndProArr.map(IndividualProductsCreator)
    )
}
export default CategoryRender;
export {SubCategoryRender, IndividualProductRender};