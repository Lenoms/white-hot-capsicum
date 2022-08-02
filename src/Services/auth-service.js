const getRole = (user) => {
  console.log(user);
  try {
    return user["https://lenoms.github.io/white-hot-capsicum/app_metadata"]
      .role;
  } catch (error) {
    // swallowing error not the best, will differentiate later
    console.log("No role was found for the following user");
  }
};

export default getRole;
