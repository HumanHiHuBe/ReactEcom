import "./main.css";
import Product from "./product.js";
import Category from "./Category.jsx";
import SubCategoryComp from "./SubCategory.jsx";
import IndividualProduct from "./IndividualProduct"


function SingleAllCreator(inp) {
    const {id1, category, SubCategory} = inp;
    function CategoryCreator(inpc) {
        return(
            <div className="">
            <Category
                key = {inpc.id}
                Category = {inpc.Category}
            /> 
        </div>
        )
    }
    function CategoryRender() {
        return(
            CategoryCreator(inp)
        )
    }
    function SubCategoryCreator(inpd) {
        const {id, SubCategoryOfCategory, Products} = inpd;
        function IndividualProductsCreator(inpk) {
            return(
                <div className="">
                    <IndividualProduct
                        key = {inpk.id}
                        pImage = {inpk.pImage}
                        pName = {inpk.pName}
                        pPrice = {inpk.pPrice}
                    />
                </div>  
            ) 
        }
        function IndividualProductRender() {
            return(  
                Products.map(IndividualProductsCreator)
            )
        }
        return(
            <div className="">
            <SubCategoryComp
                key = {inpd.id}
                SubCategory = {inpd.SubCategoryOfCategory}
            />
            <IndividualProductRender /> 
        </div>
        )
    }
    function SubCategoryRender() {
        return(
            SubCategory.map(SubCategoryCreator)
        )
    }

    
    return(
        <div className={'category ' + inp.Category} style={{display: "none"}}>
            <CategoryRender />
            <SubCategoryRender />
        </div>
    )
        
    }

function SingleAllRender() {
    return(
        Product.map(SingleAllCreator)
    )
}
export {SingleAllRender};

function f4(event) {
    document.getElementsByClassName('category')[0].style.display = 'none';
    document.getElementsByClassName(event.target.value)[0].style.display = '';

}

function CategoryCreator(inp){
    return(
        <button onClick={f4} value={inp.Category}>
            <Category
                key = {inp.id}
                Category = {inp.Category}
            /> 
        </button>
    )   
}
function CategoryRender() {
    return(  
        Product.map(CategoryCreator)
    )
}

export {CategoryRender};
























// OLD METHOD
// function CategoryCreator(inp){
//     return(
//         <div className="SingleCat">
//             <Category
//                 key = {inp.id}
//                 Category = {inp.Category}
//             /> 
//         </div>
//     )   
// }

// function SubCategoryCreator(inp) {
//     return(
//         <div className="SingleSubCat">
//             <SubCategory
//                 key = {inp.id}
//                 SubCategory = {inp.SubCategory}
//             />
//         </div>
//     )   
// }

// function IndividualProductsCreator(inp) {
//     return(
//         <div className="SingleIndPro">
//             <IndividualProduct
//                 key = {inp.id}
//                 pImage = {inp.pImage}
//                 pName = {inp.pName}
//                 pPrice = {inp.pPrice}
//             />
//         </div>  
//     ) 
// }


// function CategoryRender() {
//     return(  
//         Product.map(CategoryCreator)
//     )
// }

// function SubCategoryRender() {
//     return(  
//         SubCatArr.map(SubCategoryCreator)
//     )
// }
// function IndividualProductRender() {
//     return(  
//         IndProArr.map(IndividualProductsCreator)
//     )
// }
// export default CategoryRender;
// export {SubCategoryRender, IndividualProductRender};