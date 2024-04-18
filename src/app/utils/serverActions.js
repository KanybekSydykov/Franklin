export const getData = async (baseUrl, endpoint) => {
  try {

    const url = `${baseUrl}${endpoint}`; // Constructing the URL


    const res = await fetch(url); // Fetching data from the API
    if (!res.ok) {
     console.log(url, res, 'something went wrong');
    }

    const data = await res.json(); // Parsing the response JSON
    if (!data) {
      return { error: 'No data available' };
    }

    return data; // Returning the fetched data
  } catch (error) {
    console.error('Error fetching data:', error); // Logging any errors
    throw error; // Re-throwing the error to handle it elsewhere
  }
};
