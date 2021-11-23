import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api");
      const result = await response.json();
      return result;
    };
    fetchData()
      .then((res) => {
        const userData = res.results;
        setUserData(userData);
      })
      .catch((err) => {
        setUserData(err);
      });
  }, []);

  return (
    <div className="App">
      {userData ? (
        <p>{userData.map((user) => user.name.first)}</p>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default App;
