import React, { useState, useEffect } from "react";

function Main(props) {
  let { Who } = props;
  const [Data, fetchData] = useState([[], [], [], [], [], [], []]);
  const getData = () => {
    if (Who === "Men") {
         props.setProgress(40);
         fetch("https://myntraapi.herokuapp.com/")
        .then((res) => res.json())
        .then((res) => {
          // console.table(res)
          fetchData(res);
          props.setProgress(100);
        });
    } else {
         props.setProgress(40);
      fetch("https://myntraapi.herokuapp.com/women")
        .then((res) => res.json())
        .then((res) => {
          // console.table(res)
         props.setProgress(70);
          fetchData(res);
          props.setProgress(100);
        });
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {" "}
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

        <section className="items-center">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/10/8fd79f84-0aa6-4c11-850a-626bdc098f631654801550323-Unbelievable-Deals.jpg"
            alt=""
            srcSet=""
            className="heading"
          />
          <div className="itemscontainer">
            {Data[4].map((e, i) => {
              return (
                <img
                  key={i}
                  src={e.imgsrc}
                  className="ceteitem smallitem"
                  alt=""
                />
              );
            })}
          </div>

          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/10/97f15919-b4d4-4cb2-b5f6-d1abde95b2091654801550228-Budget-Buys.jpg"
            className="heading"
            alt=""
          />
          <div className="itemscontainer">
            {" "}
            {Data[1].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="ceteitem" alt="" />;
            })}
          </div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/10/6a50256c-af18-4880-9c2d-dfd836b438421654801550315-Top-Brands-On-Offer.jpg"
            className="heading"
            alt=""
          />
          <section className="items itemscontainer6">
            {Data[2].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="ceteitem" alt="" />;
            })}
          </section>
          <div className=""></div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/10/46968756-51b5-414e-b149-3780766a99641654801550280-Most-Loved-Brands.jpg"
            alt=""
            className="heading"
            srcSet=""
          />
          <div className="itemscontainer">
            {" "}
            {Data[5].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="ceteitem" alt="" />;
            })}
          </div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/10/f664be69-4173-42d8-92b2-b546642d09a01654801550289-Must-Haves-In-Your-Wardrobe.jpg"
            alt=""
            className="heading"
            srcSet=""
          />
          <div className="itemscontainer">
            {Data[6].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="ceteitem" alt="" />;
            })}
          </div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/166d4987-cb62-402b-81ea-e7dec15487c71654785362738-Shop-By-Category.jpg"
            className="heading"
            alt=""
          />
          <div className="itemscontainer cetegoriesx">
            {Data[3].map((e, i) => {
              return <img key={i} src={e.imgsrc} className="ceteitem" alt="" />;
            })}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Main;