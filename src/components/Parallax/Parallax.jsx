import React, {useState, useEffect} from "react";
import M from 'materialize-css';
import "./Parallax.css"
const Parallax =()=> {

    useEffect(() => {
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements)
    },[]);

    return(
        <div className="container">
        <div className="parallax-container">
        <div className = "parallax">
<img src ="https://lh3.googleusercontent.com/A9S1sA3bWx6oDxmIWzbNyUVjDZz83q5FhltiZ-EjpLirN0hTvtd62LOCbLzdgJije11HzVRx_IhTOtTIYV4bgM4p-2lG7K0CwHG6vbgYmDjl_thpw25AWoocxWa1OkwXo9pM0GrD6E11fLzM8eEyokMwzCJsToEbLG47IJIFNkElHwl1EDnYmzer6_A6wzAv4cSb2vFU40MLJF3dYmy2Dxy-4pKgiyoKufrOo1TYyIbJ8z_BE4XnTQCn2Rlgui6-X_QDO5ZqyAYQ27_Hu3wPmKINUvGZBBz_epB7d0RUE_oWfI8DE8p7Hu0GMB1QNVZsejmo7AWzC2eL327BxUtyN51y3uC9L_4b6nXWovzNTEOnRB-WpPHu-tSNY-CZLjKxsznByPxEP-2bZUUpUNYkxT5xVLvVZjl6BT4XqwhViA9A_LGwpAXKpL_Bk665L6iTsE-YmO5fw5ql0VidS_Ngx_Ag6De1WteYsGiO7GGyfkku7su2s090dLHblLCfM0HcUUel4JulbJXsNgqh9VNv1k-BXB923noiNePxSHO5Uwlizp_b_IHXwI0yFiQ5uP0cz0Z2UE4sgEMYya1xSrQhIFnwRGVQ-xG_tTBNT_ZRy6c0rohgQCSuXplinRJsIPnBSaMR109XIQwu3ydgQ-dJE5frTFKgb3EweLMjN5TAugezdXcWi8kq4Al5XEYc=s890-no" alt="parallax1"/>
        </div>
        <div className="section white">
            <h2>Parallax</h2>
        </div>
        </div>
        
          <div className="parallax-container">
          <div className = "parallax">
  <img src ="https://lh3.googleusercontent.com/A9S1sA3bWx6oDxmIWzbNyUVjDZz83q5FhltiZ-EjpLirN0hTvtd62LOCbLzdgJije11HzVRx_IhTOtTIYV4bgM4p-2lG7K0CwHG6vbgYmDjl_thpw25AWoocxWa1OkwXo9pM0GrD6E11fLzM8eEyokMwzCJsToEbLG47IJIFNkElHwl1EDnYmzer6_A6wzAv4cSb2vFU40MLJF3dYmy2Dxy-4pKgiyoKufrOo1TYyIbJ8z_BE4XnTQCn2Rlgui6-X_QDO5ZqyAYQ27_Hu3wPmKINUvGZBBz_epB7d0RUE_oWfI8DE8p7Hu0GMB1QNVZsejmo7AWzC2eL327BxUtyN51y3uC9L_4b6nXWovzNTEOnRB-WpPHu-tSNY-CZLjKxsznByPxEP-2bZUUpUNYkxT5xVLvVZjl6BT4XqwhViA9A_LGwpAXKpL_Bk665L6iTsE-YmO5fw5ql0VidS_Ngx_Ag6De1WteYsGiO7GGyfkku7su2s090dLHblLCfM0HcUUel4JulbJXsNgqh9VNv1k-BXB923noiNePxSHO5Uwlizp_b_IHXwI0yFiQ5uP0cz0Z2UE4sgEMYya1xSrQhIFnwRGVQ-xG_tTBNT_ZRy6c0rohgQCSuXplinRJsIPnBSaMR109XIQwu3ydgQ-dJE5frTFKgb3EweLMjN5TAugezdXcWi8kq4Al5XEYc=s890-no" alt="parallax1"/>
          </div>
          <div className="section white">
              <h2>Parallax</h2>
          </div>
          </div>
          </div>
    )
};

export default Parallax;