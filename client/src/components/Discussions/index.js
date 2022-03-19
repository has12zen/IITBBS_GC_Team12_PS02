import Ques from "./Ques";

const Discussions = ({ user, data }) => {
  console.log(data[0]);
  return (
    <>
      {data.map((discussion, key) => (
        <Ques key={key} user={user} data={discussion} />
      ))}
    </>
  );
};

export default Discussions;
