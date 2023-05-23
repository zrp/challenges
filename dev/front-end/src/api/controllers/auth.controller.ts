import http from '../http';

function validateStatus(status: number) {
  return Number(status.toString().substring(0, 1)) !== 2;
}

interface LoginFormProps {
  email: string;
  password: string;
}

interface SignupFormProps {
  name:string;
  email: string;
  password: string;
}

const auth = {
  login: async (data: LoginFormProps) => {
    const response = await http.post('/login', data, {
      validateStatus: (stat) => stat < 500,
    });


    if (response.status !== 200) {
      throw new Error((response.data as any).message);
    }

    return { result: response.data, jwt: response.headers.authorization as string };
  },
  signup: async (data: SignupFormProps) => {


    const newData = {name: data.name, email: data.email, password: data.password}
    const response = await http.post('/user', newData);

    if (response.status !== 201) {
      throw new Error((response.data as any).message);
    }

    return { result: response.data, jwt: response.headers.authorization as string };
  },
};

export type { LoginFormProps, SignupFormProps };
export default auth;
