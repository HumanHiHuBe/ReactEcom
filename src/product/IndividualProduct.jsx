import { useState } from "react";

function IndividualProduct(props) {
    const [ProductCounter, setProductCounter] = useState(0);
    function f1() {
        const t = ProductCounter + 1;
        setProductCounter(t);    
    }
    function f2() {
        if(ProductCounter>0){
            const t = ProductCounter - 1;
            setProductCounter(t);  
        }  
    }

    const imgurl = ""+props.pImage;
    const iAlt = ""+props.pName+"'s Image";

    return(
        <div className="IndividualProduct">
            <div className="ProImg"><img src={imgurl} alt={iAlt}  /></div>
            <div className="NameDiv">{props.pName}</div>
            <div className="PriceDiv">{props.pPrice}</div>
            <div className="BtnDiv">
                <button className="btn" onClick={f2}>-</button>
                <div className="InpDiv"><input type="text" name="" id="" value={ProductCounter} /></div>
                <button className="btn" onClick={f1}>+</button>
            </div>
            
        </div>
    ) 
}

export default IndividualProduct;