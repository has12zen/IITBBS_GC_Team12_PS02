import Ques from "./Ques";

const Discussions = ({ user, data, hideCreator = false }) => {
  console.log(data[0]);

  return (
    <>
      {data.map((discussion, key) => (
        <Ques
          key={key}
          user={user}
          data={discussion}
          hideCreator={hideCreator}
        />
      ))}
    </>
  );
};

export default Discussions;
