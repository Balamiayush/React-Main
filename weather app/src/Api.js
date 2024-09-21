import axios from "axios";
import { useQuery } from "react-query";

const UseWeatherInfo = (city) => {
  const APIkey = "a9ad8bb880a515a5b91c3ae9aa5d4d57";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

  const { isLoading, error, data } = useQuery(["weather", city], async () => {
    const response = await axios.get(url);
    return response.data;
  });

  return { isLoading, error, data }; // Return the values here
};

export default UseWeatherInfo;
