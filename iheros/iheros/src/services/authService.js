// export const KEY = '@iHero'
export const isAuthenticated = () => localStorage.getItem('username, password') !== null 
// export const getToken = () => localStorage.getItem(KEY);
// export const login = token => {localStorage.setItem(KEY,token)};
// export const logout = () => localStorage.removeItem(KEY);

export default isAuthenticated;