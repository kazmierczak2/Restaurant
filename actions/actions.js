const Menu = require('../models/menu');
const Order = require('../models/order')
class menuActions {
    async saveMenu(req, res){

        const category = req.body.category;
        const name = req.body.name;
        const price = req.body.price;
        let newMenu;
    
        try {
            newMenu = new Menu({
                category: category,
                name: name,
                price: price
            });

            await newMenu.save();
        }catch(err){
            res.status(404).json({message: err.message});
        }

        res.status(200).json(newMenu);
    }

    async getMenu(req, res){
        const doc = await Menu.find({});

        res.status(200).json(doc);
    }

    async getDish(req, res)
    {
        const id = req.params.id;
        const dish = await Menu.findOne({_id:id});
        res.status(200).json(dish);
    }

    async updateDish(req, res){
        const id = req.params.id;
        const category = req.body.category;
        const name = req.body.name;
        const price = req.body.price;
        
        const dish = await Menu.findOne({_id:id});
        dish.category = category;
        dish.name = name;
        dish.price = price;
        await dish.save();
        res.status(201).json(dish);
    }

    async deleteDish(req, res){
        const id = req.params.id;
        await Menu.deleteOne({_id:id});
        
        res.sendStatus(204);
    }

    async getAllOrder(req, res){
        const doc = await Order.find({});
        res.status(200).json(doc);
    }

    async getOrder(req, res){
        const id = req.params.id;
        const doc = await Order.find({_id:id});
        res.status(200).json(doc);
    }

    async createOrder(req, res){
        const tableNum = req.body.tableNum;
        const nameDishlength = req.body.content.length;
        let newOrder;

        try {
            newOrder = new Order({
                content: [],
                tableNum: tableNum,
                status: "przyjęte"
            });

            for (let i = 0; i < nameDishlength; i++){
                const nameDish = req.body.content[i].nameDish;
                const addto = await Menu.findOne({name: nameDish}, {name: 1, price:1} );
                if(addto ===null)
                {
                    res.status(404).json({message: "Brak w menu"});
                }

                await newOrder.content.push(addto);
            }

            await newOrder.save();
        }catch(err){
            res.status(404).json({message: err.message});
        }

        res.status(200).json(newOrder);
    }

    async addToOrder(req, res){
        const id = req.params.id;
        const nameDishlength = req.body.content.length;
        const order = await Order.findOne({_id:id});

        for (let i = 0; i < nameDishlength; i++){
            const nameDish = req.body.content[i].nameDish;
            const addto = await Menu.findOne({name: nameDish}, {name: 1, price:1} );
            if(addto ===null)
            {
                res.status(404).json({message: "Brak w menu"});
            }

            await order.content.push(addto);
        }

        await order.save();
        res.status(201).json(order);
    }

    async updateOrder(req, res){
        const id = req.params.id;
        const status = req.body.status;
        const doc = await Order.findOne({_id:id});
        doc.status = status;
        await doc.save();
        res.status(201).json(doc);
    }

    async deleteOrder(req, res){
        const id = req.params.id;
        await Order.deleteOne({_id:id});

        res.sendStatus(204);
    }
}
module.exports = new menuActions();