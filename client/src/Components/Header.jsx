import React, { useEffect, useState } from "react";
import "../Components/Header.css";
import bell from "../SVGs/bell.svg";
import arrow from "../SVGs/arrow.svg";
import search from "../SVGs/search.svg";
import supabase from "../supabase";

export const Header = (props) => {
     
  const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   const fetchCurrentUser = async () => {
  //     try {
  //       const { data } = await supabase.auth.getUser();
  //       if (data) {
  //         console.log(data);
  //         setUserData(data);
  //         console.log('userData:',userData);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchCurrentUser();
  // }, []);

  return (
    <div className="head">
      <div className="b1">
        <div className="name">Hi Naman !</div>
        <div className="overview">
          This is your Freelancer Team {props.overview} overview
        </div>
      </div>
      <>
        {/* <div className="b2 f">
          <input type="text" placeholder="Type to search" />
          <img src={search} alt="" />
        </div> */}
        <div className="b3">
          {/* <img src={bell} alt="" /> */}
        </div>
        <div className="b4 f">
          <div className="i1"></div>
          <div className="name2">Naman Kulshresth</div>
          <img src={arrow} alt="" />
        </div>
      </>
    </div>
  );
};
