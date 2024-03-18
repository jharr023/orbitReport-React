import satData from "./satData.jsx";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  const handleFilterByAllOrbits = () => {
    setSat(satData);
  };
  return (
    <div>
      <div>
        {displaySats.map((sat, id) => (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        ))}
      </div>
      <button onClick={handleFilterByAllOrbits}>All Orbits</button>
    </div>
  );
};

export default Buttons;
