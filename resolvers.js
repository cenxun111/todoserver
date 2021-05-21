const Card = require('./models/Postm')
const resolvers = {
    Query:{
        hello:() => {
            return 'Hello World';
        },
        getAllCard:async() => {
            return await Card.find()
        },
        getCard:async(parent,{id})=> {
            return await Card.findById(id)
        }
    },
    Mutation:{
        // createCard:async(parent,args,context, info) =>{
        //     const {name,genre,year} = args.card;
        //     const card = new Card({name,genre,year});
        //     await card.save();
        //     return card;
        // }
        createCard:(parent,args) =>{
            const card = new Card({
                id: args.id,
                name:args.name,
                genre:args.genre,
                year:args.year
            });
            card.save()
            return card;
        },
        deleteCard: async(parent,args) =>{
        //     // const id = args.id
        //     // await Card.delete(id)
        // },
            const { id } =args
            // const card = new Card({
            //     id: args.id
            // }
            // )

            await Card.findByIdAndDelete(id)
            return"post deleted";
        },
        updateCard: async (parent,args,context,info)=>{ 
           const{id}= args;
           const {name,genre,year} =args.card ;
           const updates = {};
           if(name !== undefined) {
               updates.name = name;
           }
           if(genre!== undefined) {
            updates.genre = genre;}
            if(year!== undefined) {
                updates.year = year;
        
        }
           const card = await Card.findByIdAndUpdate(
                id, 
                updates,
                { new :true}
            );
            return card
        }
        }
    };

module.exports = resolvers;