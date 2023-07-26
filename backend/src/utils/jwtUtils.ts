import jwt from 'jsonwebtoken';
import { TokenPayload } from '../Interfaces/TokenPayload';
import 'dotenv/config';

export default class JwtUtils {
    private static jwtSecret = process.env.JWT_SECRET || 'jwt_secret' ;
    private static jwtOptions = { expiresIn: '10d'}

    public static sign(payload: TokenPayload): string {
      return jwt.sign(payload, this.jwtSecret, this.jwtOptions);
    }
  
    public static verify(token: string): jwt.JwtPayload {
      const decodedToken = jwt.verify(token, this.jwtSecret);
      return decodedToken as TokenPayload;
    }
  }
