import jwt from 'jsonwebtoken';

export function isJwtExpired(token: string) {
  const decoded = jwt.decode(token.replace('Bearer ', ''), { complete: true });
  const date = new Date();
  return decoded.payload.exp * 1000 < date.getTime();
}
