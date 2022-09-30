import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import {CreateCustomerDTO, } from  './dto/create-customer.dto';
import { GetCustomerDTO } from './dto/get-customer.dto';
import * as fs from 'fs';
import { sign } from 'jsonwebtoken';
import { createOrderDTO } from './dto/create-order.dto';

@Injectable()
export class LiriumLibService {
    constructor (private readonly httpService: HttpService) {}
    public createJWT ()  {
        try {
            const privateKey = fs.readFileSync('private.key');
            const token = sign({ 
                "iss": "your_api_key",
                "iat": new Date().getTime()
             }, privateKey, { algorithm: 'RS512'});
            return token 
        } catch (error) {
            throw 'token error!'
        }
    } 
    public async createCustomer (customer: CreateCustomerDTO) {
        try {
            const token = this.createJWT()
            await this.httpService.post(`${process.env.LIRIUM_URL}/customers`,customer, token)    
        } catch (error) {
           console.log(error) 
        }
    }

    public async getCustomerDetails (customer: GetCustomerDTO) {
        try {
            const token = this.createJWT()
            await this.httpService.get(`${process.env.LIRIUM_URL}/customers/${customer.customer_id}`, token)    
        } catch (error) {
           console.log(error) 
        }
    }

    public async createOrder (orderDTO: createOrderDTO) {
        try {
            const token = this.createJWT()
            const order = {...orderDTO}
            order.reference_id = Date.now().toString()
            await this.httpService.post(`${process.env.LIRIUM_URL}/customers/${orderDTO.customer_id}/orders`,order, token)    

        } catch (error) {
            console.log(error)
        }
    }

}
