import myImage from "../assets/profilepicture.png";

function Home() {
  return (
    <div className="flex">
      <div>
        <img className="min-w-[15%] max-w-[35%]" src={myImage} />
      </div>
      Home
    </div>
  );
}

export default Home;
