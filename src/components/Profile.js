function Profile(props) {
  console.log(props);
  //Can't change props value when it's set. 
  //props.name = "John";
  return (
    <h1>
      Name: {props.name} {props.lastname}
    </h1>
  );
}
export default Profile