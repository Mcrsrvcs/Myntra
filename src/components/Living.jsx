import React, { useState, useEffect } from "react";

function Living(props) {
  const [Data, fetchData] = useState([[], [], [], [], [], [], [], []]);
  const getData = () => {
    props.setProgress(40);
    fetch("https://myntraapi.herokuapp.com/Living")
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
      <div className="divx my-2 mx-2">
        <section className="my-2 d-block items-center ">
          <div >
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg" alt="" className="banner"/>
          </div>
        </section>
  
          <h1 class="h1">NICE TO SEE YOU, COME ON IN!</h1>
          <div className="itemscontainer">
            {" "}
            {Data[0].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="Living ceteitem " alt="" />
            })}
          </div>
          <div className="itemscontainer">
            {" "}
             <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478281102-Home-page-Desktop_12.jpg" className="getinspired ceteitem " alt="" />
          </div>
          
          <div className="itemscontainer">
            {" "}
            {Data[1].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="ceteitem inspiredimgs" alt="" />;
            })}
          </div>
          
          <h1 class="h1">Featured Brands</h1>
          <div className="itemscontainer">
            {" "}
            {Data[2].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="ceteitem bigimg " alt="" />;
            })}
          </div>
          
          {/*<h1 class="h1">Fassions </h1>
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
          </div> */}
      </div>
    </div>
  );
}

export default Living;
