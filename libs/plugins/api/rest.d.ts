import express from 'express';
import { Token } from 'typedi';
export interface IRestController {
}
export declare const ExpressToken: Token<express.Express>;
export declare const RestControllerToken: Token<IRestController>;
export declare function setExpressApp(app: express.Express): void;
export declare function RestController(): (target: any) => any;
export declare function GetMapping(path: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function PostMapping(path: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function DeleteMapping(path: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function UpdateMapping(path: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function PatchMapping(path: string): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
