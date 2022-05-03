'use strict'

import { Op, where } from "sequelize";
import { Tome } from "../../database.js"

export default async function (fastify, opts) {

    fastify.get('/order/:param',async function(request,reply){
        return await Tome.findAll({order:[request.params.param]});
    })
    fastify.get('/:number',async function(request,reply){
        return await Tome.findByPk(request.params.number);
    })
    fastify.post('/',async function({body},reply){
        
        if(!body?.tome.name || !body?.tome.number || 
            !body?.tome.img || !body?.tome.resume || !body.tome.price){

                return reply.code(400).send('tous les champs name, number, link, resume sont obligatoires');

        }
        const onePiece = await Tome.findByPk(body?.tome.number);
        if(onePiece === null){
            return await Tome.create({
                name: body.tome.name,
                number: body.tome.number,
                img: body.tome.img,
                resume: body.tome.resume, 
                price: body.tome.price
            })
        }else{
            return reply.code(400).send('Ce Tome est déjà enregistré');
        }
    })
    fastify.delete('/:number', async function ({params, body} ,reply){
        const id = params.number;
        Tome.destroy({
            where: {
                id
            }
        })
        return "Tome supprimé"
    })
    fastify.put('/:id', async function (request, reply) {
        const id = request.params.id;
        if(Tome.findByPk(request.params.id) != null){
            let changes = {};
            if(request.body.number) changes.number = request.body.number; 
            if (request.body.img) changes.img = request.body.img;
            if (request.body.resume) changes.resume = request.body.resume;
            if(request.body.price) changes.price = request.body.price;
            Tome.update(request.body, {
              where: {
                id
              }
            })
            return "Mis à jour";
        }
        else{
            return "pas de mise à jour possible";
        }
      });
}
