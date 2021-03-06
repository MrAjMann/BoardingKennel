import { createRouter } from "./context";

import {prisma} from '../../server/db/client'
import { z } from "zod";


export const userRouter = createRouter().query("get-user", {
    async resolve() {
       return await prisma.user?.findFirst({
            where: {
                id: 'cl5dm5pfv0014e8w0wrbtukws'
            },
            include: {
                address: {
                    select: {
                        unitNumber: true,
                        streetNumber: true,
                        streetName: true,
                        suburb: true,
                        state: true,
                        postcode: true
                    }
                }
            },
        } ) 
    }
    
}) 

