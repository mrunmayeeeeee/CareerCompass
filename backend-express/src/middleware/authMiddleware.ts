import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authorize = (roles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: "No token provided" });

    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Access Denied: Insufficient Permissions" });
      }
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid Token" });
    }
  };
};