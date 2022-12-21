
exports.getDate = getDate();
exports.getYear = getYear();

function getDate()
{
  const today = new Date();

  const options ={
    weekday: "long",
    day: "numeric",
    month:"long",
  };

  const day = today.toLocaleDateString("en-US" , options);

  return day;
}

function getYear()
{
  const today = new Date();

  const options ={
    weekday: "long",
    day: "numeric",
    month:"long",
    year: "numeric",
  };

  const day = today.toLocaleDateString("en-US" , options);

  return day;
}
