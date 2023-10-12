import React from 'react';
import { useSelector } from 'react-redux';
import MissionProfile from '../components/MissionProfile';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const { mission } = useSelector((state) => state.mission);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  const filterMission = mission.filter((m) => m.status === 'Active member');
  return (
    <section className="profile-section">
      <div className="profile">
        <div className="">
          <h1 className="">My Rockets</h1>
          <ul className="rocket-list">
            {filterRockets.map((rocket) => (
              <li key={rocket.id} className="">
                {rocket.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mission-profile">
        <MissionProfile filterMission={filterMission} />
      </div>
    </section>
  );
};

export default MyProfile;
