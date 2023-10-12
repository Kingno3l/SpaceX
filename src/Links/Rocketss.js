import { useSelector } from 'react-redux';
import RocketsItem from './RocketItem';

// const Rocketss = () => (
//   <div className="rocket">
//     <h1>Welcome to Home Page</h1>
//     <p>All content about the Project goes here</p>
//   </div>
// );
// export default Rocketss;
const Rockets = () => {
  const selectedData = useSelector((state) => state.rockets);
  const { loading, error, rocketData } = selectedData;
  return (
    <ul className="rocket-container">
      {loading && <p>Loading</p>}
      {error && <p>Error...</p>}
      {!loading
        && !error
        && rocketData.map((rocket) => (
          <RocketsItem
            key={rocket?.id}
            id={rocket?.id}
            name={rocket?.name}
            image={rocket?.image}
            description={rocket?.description}
            reserved={rocket?.reserved}
          />
        ))}
    </ul>
  );
};

export default Rockets;
