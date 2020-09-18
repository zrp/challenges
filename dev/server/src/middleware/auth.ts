import jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from 'express';
import Config from '../controllers/authConfig';
import { promisify } from 'util';
import authConfig from "../controllers/authConfig";

export default class Auth {

    async validate(request: Request, response: Response, next: NextFunction) {

        const authHeader = request.headers.authorization;

        if (!authHeader) {
            return response.status(401).json({ error: "Token not provided"} )
        }
    
        const [schema, token] = authHeader.split(' ');

        if (!/^Bearer$/i.test(schema)) {
            return response.status(401).json({ error: "Token malformatted"} )
        }

        if (token) {
            
            jwt.verify(token, authConfig.secret, (err, decoded) => {
                if (err) {
                    return response.status(401).json({ error: "Token invalid"} )
                }
                //request.params.userId = decoded.id;
                
            });

        }
    }
}

