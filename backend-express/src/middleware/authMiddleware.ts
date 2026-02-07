import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authorize = (roles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    // 1. Get the token from the header (Bearer <token>)
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: "No token provided" });

    try {
      // FIX: Use 'career_secret_key' to match your UserController!
      const decoded: any = jwt.verify(
        token, 
        process.env.JWT_SECRET || 'career_secret_key'
      );

      // 2. Check if user has the right role
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Access Denied: Insufficient Permissions" });        
      }
      
      req.user = decoded;
      next();
    } catch (err) {
      // This is where it was failing before!
      res.status(401).json({ message: "Invalid Token" });
    }
  };
};