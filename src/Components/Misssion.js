import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelMission, reserveMission } from '../redux/missions/reduxmission';

const MissionItem = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="mission-title">{mission.mission_name}</td>
      <td className="mission-paragraph">{mission.description}</td>
      <td className="member-mission">
        <p className="member">
          {mission.reserved ? <span className="active-member">Active Member</span> : <span className="member">Not a Member</span>}
        </p>
      </td>
      <td>
        { mission.reserved ? <button type="button" className="join-mission" onClick={() => { dispatch(cancelMission(mission.mission_id)); }}>Leave Mission</button> : <button type="button" className="join-mission" onClick={() => { dispatch(reserveMission(mission.mission_id)); }}>Join Mission</button>}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,

};

export default MissionItem;
