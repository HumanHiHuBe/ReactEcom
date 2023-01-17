import Product from "./product/product";
import * as pd from "./product/ProductApp";
import Category from "./product/Category";
function App() {
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
      {y}
    </div>
  );
}

export default App;