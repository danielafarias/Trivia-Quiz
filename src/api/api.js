import axios from "axios";

export const getCategories = async () => {
  const response = await axios({
    method: "get",
    url: "https://opentdb.com/api_category.php",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const getTriviaByCategoryId = async (id) => {
    const response = await axios({
        method: "get",
        url: `https://opentdb.com/api.php?amount=10&category=${id}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      return response.data;
}

export const getRandomTrivia = async () => {
    const response = await axios({
        method: "get",
        url: "https://opentdb.com/api.php?amount=10",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      return response.data;
}