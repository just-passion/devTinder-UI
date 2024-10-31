import React from "react";
import { BASE_URL, PHOTO_PLACEHOLDER } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user; //info of the user on feed
  console.log({ user: user });
  const dispatch = useDispatch();
  const location = useLocation();
  const isProfilePage = location.pathname.includes("/profile");
  //!location.pathname.includes("/login")
  const handleSendRequest = async (status, userId) => {
    try {
      console.log({ info: userId });
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl p-2">
        {photoUrl ? (
          <figure>
            <img src={user.photoUrl} alt="Profile Picture" />
          </figure>
        ) : (
          <figure>
            <img src={PHOTO_PLACEHOLDER} alt="Profile Picture" />
          </figure>
        )}
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + " ," + gender}</p>}
          {!isProfilePage &&(<div className="card-actions flex w-full justify-between my-4">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignore", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
