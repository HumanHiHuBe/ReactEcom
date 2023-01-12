import * as pd from "./product/ProductApp";
function App() {
  return (
    <div>
      <div className="Cat"><pd.default /></div>
      <div className="SubCat"><pd.SubCategoryRender /></div>
      <div className="IndPro"><pd.IndividualProductRender /></div>
    </div>
  );
}

export default App;
