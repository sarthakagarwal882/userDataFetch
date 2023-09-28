/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./HomeStyles.css";
import axios from "axios";
import { useEffect } from "react";
import UserBar from "./UserBar";
import UserCard from "./Usercard";
import { useDispatch } from "react-redux";
import { addData } from "../store/slice/UsersData";
import Spinner from "./Spinner/Spinner";
const Home = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      let fetchData = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      setData(fetchData.data);
      dispatch(addData(fetchData.data));
    };
    getData();
  }, []);

  return (
    <>
      {data !== null ? (
        <div className="home">
          <div className="user-list">
            {data !== null &&
              data.map((element, index) => (
                <UserBar
                  key={index}
                  id={index}
                  name={
                    element.profile.firstName + " " + element.profile.lastName
                  }
                />
              ))}
          </div>
          <div className="user-card">
            <UserCard />
          </div>
        </div>
      ) : (
        <div className="home-wrapper-spinner">
          <Spinner/>
        </div>
      )}
    </>
  );
};
export default Home;
