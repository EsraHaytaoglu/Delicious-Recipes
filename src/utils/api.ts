import axios from "axios";

export default () => {
 

  return axios.create({
    baseURL: "https://yummly2.p.rapidapi.com",
    params: {limit: '5', start: '0', tag: 'list.recipe.popular'},
    headers: {
        'x-rapidapi-host': 'yummly2.p.rapidapi.com',
        'x-rapidapi-key': '3c552311b2msha976febca3a7cd4p153edfjsnf22488204be4'
      }
  });
};