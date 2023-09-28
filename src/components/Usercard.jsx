import { useSelector } from "react-redux";
import "./UserCardStyles.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner/Spinner";
const UserCard = () => {
  const state = useSelector((store) => store.data);
  const [data, setData] = useState(null);
  useEffect(() => {
    let dataActive = state.data.find(
      (element, index) => state.active === index
    );
    setData(dataActive);
  }, [state, state.data, state.active]);
  console.log(data);
  return (
    <>
      {data !== null && data !== undefined ? (
        <div className="usercard">
          <div className="usercard-header">
            <p>User details</p>
          </div>
          <img src="/assets/man.png" alt="" />
          <div className="usercard-bio">
            <p>{data.Bio}</p>
          </div>
          <div className="usercard-info">
            <div className="usercard-info-item">
              <p className="info-item-title">Full Name</p>
              <div>
                <p>{data.profile.firstName + " " + data.profile.lastName}</p>
              </div>
            </div>
            <div className="usercard-info-item">
              <p className="info-item-title">Job Title</p>
              <div>
                <p>{data.jobTitle}</p>
              </div>
            </div>
            <div className="usercard-info-item">
              <p className="info-item-title">Email</p>
              <div>
                <p>{data.profile.email}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
};
export default UserCard;
