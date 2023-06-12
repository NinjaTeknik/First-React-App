function Profile(props) {
  const {name, lastname} = props;

  //console.log(props);
  //Can't change props value when it's set. 
  //props.name = "John";

  return (
    <h1>
      Name: {name} {lastname}
    </h1>
  );
}

export default Profile