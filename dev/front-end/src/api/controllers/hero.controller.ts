import http from '../http';

export interface HeroModel {
  name: string;
  class: string;
  lati: number;
  longi: number;
}



const hero = {
  create: async (data: any) => {
    const formData = { ...data };

    const { status, data: result } = await http.post('heros/create', formData);

    if (status !== 201) {
      throw new Error((result as any).message);
    }

    return result;
  },
  edit: async (data: any) => {
    const {id} = data;
    delete data.id;
    const { status, data: result } = await http.patch(`/heros/${id}`, {
      ...data
    });

    if (status !== 200) {
      throw new Error((result as any).message);
    }

    return result;
  },
  delete: async (id: number | string) => {
    const { data, status } = await http.delete(`/heros/${id}`);
    if (status !== 200) {
      throw new Error((data as any).message);
    }
    return data;
  },
  list: async ( ) => {
    const { status, data: result } = await http.get(`/heros/list`);

    if (status !== 200) {
      throw new Error((result as any).message);
    }

    return { result };
  },
}

export default hero;
