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
        <div className="">
            <div className=""><img src={imgurl} alt={iAlt}  /></div>
            <div className="">{props.pName}</div>
            <div className="">{props.pPrice}</div>
            <div className="">
                <button className="" onClick={f2}>Add To Cart</button>
                {/* <div className=""><input type="text" name="" id="" value={ProductCounter} /></div>
                <button className="" onClick={f1}>+</button> */}
            </div>
            
        </div>
    ) 
}

export default IndividualProduct;