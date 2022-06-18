import React, { useState, useEffect } from "react";

function KidsCloth(props) {
  
  const [Data, fetchData] = useState([[],[],[],[],[],[],[],[]]);
  const getData = () => {
         props.setProgress(40);
         fetch("https://myntraapi.herokuapp.com/Kids")
        .then((res) => res.json())
        .then((res) => {
          // console.table(res)
         props.setProgress(70);
          fetchData(res);
          props.setProgress(100);
        });
  };
  useEffect(() => {
    getData();
// eslint-disable-next-line
  }, []);
  return (
    <div>  
      <section className="divx">
       <section className="containersec d-block items-center ">
    <div className="clauser flex">
      {Data[0].map((e, i) => {
        return <img key={i} src={e.imgsrc} className="products" alt="" />;
      })}
    </div>

    <div className="flex btncontainer">
      <button className="leftbtn">&#8592;</button>
      <button className="rightbtn"> &#8594;</button>
    </div>
  </section>
  
          <h1 class="h1">Favorate Brands</h1>
          <div className="brandscontainer">
            {" "}
            {Data[1].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="brandimg" alt="" />;
            })}
          </div>
          
          <h1 class="h1">Top Picks</h1>
          <div className="itemscontainer">
            {" "}
            {Data[2].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="brandimg" alt="" />;
            })}
          </div>
          
          <h1 class="h1">Ionic Brands</h1>
          <div className="itemscontainer">
            {" "}
            {Data[3].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="ceteitem bigimg" alt="" />;
            })}
          </div>
          
          <h1 class="h1">Fassions </h1>
          <div className="itemscontainer">
            {" "}
            {Data[4].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="ceteitem bigimg" alt="" />;
            })}
          </div>
          
          <h1 class="h1">More</h1>
          <div className="itemscontainer">
            {" "}
            {Data[5].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="threeBYtwo" alt="" />;
            })}
          </div>
          
          <h1 class="h1">Kids Space</h1>
          <div className="itemscontainer">
            {" "}
            {Data[6].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="threeBYtwo" alt="" />;
            })}
          </div>
          
          <h1 class="h1">Budget Buys</h1>
          <div className="itemscontainer">
            {" "}
            {Data[7].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="budgetbuy" alt="" />;
            })}
          </div>
          </section>
    </div>
  )
}

export default KidsCloth