import React from 'react'

const Product = () => {
  return (
    <>
    <div style={{justifyContent:"center", display:"grid"}}>
      <h1>Our Wines</h1>
      <p style={{width:"450px"}}>Everything we do at Cheers! is guided by core values that aim at preserving and enhancing the art of winemaking. We love to make wine, and we are happy to have talented winemakers. All you have to do is to discover them all!</p>
    </div>

    <div style={{display:"flex", justifyContent:"center", alignItems:"center" , margin:"5px", padding:"50px" }} >
    <div style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
        <img style={{height:"450px", width:"350px"}} src="https://m.media-amazon.com/images/I/51EpSA4JnuL.jpg" alt="" />
        <p>Vega Rica Non Alcoholic</p>
    </div>
    <div style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", margin:"20px"}}>
        <img style={{height:"450px", width:"350px"}} src="https://m.media-amazon.com/images/I/51EpSA4JnuL.jpg" alt="" />
        <p>Vega Rica Non Alcoholic</p>
    </div>
   
    <div style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
        <img style={{height:"450px", width:"350px"}} src="https://m.media-amazon.com/images/I/51EpSA4JnuL.jpg" alt="" />
        <p>Vega Rica Non Alcoholic</p>
    </div>
    </div>
    </>
  )
}

export default Product
