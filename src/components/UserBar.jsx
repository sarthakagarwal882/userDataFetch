/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { setActiveData } from "../store/slice/UsersData";
import "./UserBarStyles.css"
const UserBar = (props) => {
  const dispatch=useDispatch()

  function handleClick() {
    dispatch(setActiveData(props.id))
  }
  return (
    <div className="user" onClick={handleClick}>
      <img src="/assets/man.png" alt="" />
      <p>{props.name}</p>
    </div>
  );
};

export default UserBar;
