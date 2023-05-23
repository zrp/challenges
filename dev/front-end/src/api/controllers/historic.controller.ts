import http from '../http';



const historic = {
  getHistoric: async () => {
    const response = await http.get('/history');


    if (response.status !== 200) {
      throw new Error((response.data as any).message);
    }

    return { result: response};
  },

};

export default historic;
