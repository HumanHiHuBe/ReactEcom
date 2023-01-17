import Product from "./product/product";
import * as pd from "./product/ProductApp";
import Category from "./product/Category";
import IndividualProductRender from "./product/default.jsx";
function App() {
  function f5(event) {
    const temp = document.getElementsByClassName('category');
    for (let i=0;i<temp.length;i++){
        temp[i].style.display = '';
    }
}


  const y = <pd.SingleAllRender />;
  function CategCreator(inpu) {
    return(
      <button>{inpu.Category}</button>
    )
  }
  function CategRender(){
    Product.map(CategCreator)
  }

  return (
    <div>
      <pd.CategoryRender />
      <button onClick={f5}>All</button>
      {y}
      <div>
      <span>Featured Products</span>
      <IndividualProductRender />
      </div>
    </div>
  );
}

export default App;