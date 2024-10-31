import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl p-2">
        <figure>
          <img src={user.photoUrl} alt="Profile Picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + " ," + gender}</p>}
          <div className="card-actions flex w-full justify-between my-4">
            <button className="btn btn-primary w-[9rem] ">Ignore</button>
            <button className="btn btn-success w-[9rem] ">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
