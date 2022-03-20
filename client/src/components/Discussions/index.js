import Ques from "./Ques";

const Discussions = ({ user, data, hideCreator = false }) => {
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
