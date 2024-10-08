import express, { Router } from 'express'
import post from '../models/post.js'

const router = Router();

router.get(':id', async (req, res) => {
    let collection = await db.collection("posts")
    let query = { _id: new ObjectId(req.params.id) }
    let result = await collection.findOne(query)
    console.log(result)
    if(!result) {
        res.send('Not found').status(400)
    } else {
        res.send(result).status(200)
    }
})
router.get('/', async (req, res) => {
    try{
      const posts = await Posts.find({}).limit(10).select('title author');
      res.json(posts).status(200);
    }
    catch (error) {
res.json(error).status(400)
    }
});
router.post('/', async (req, res) => {
        const Restaurant = Restaurant({
            name: req.body.name,
        })
        try {
            const newRestaurant = await Restaurant.save()
            res.status(201).json(newRestaurant)
         } catch (error) {
            res.send(error).status(400)
                }
            });

router.patch('/:id', async (req, res) => {
    try {
       const query = { _id: new ObjectId(req.params.id)}
       const updates = {
        $push: { comments: req.body }
       }
       let collection = await db.collection("posts")
       let Updatedpatch = await collection.findOneAndUpdate(query, updates)
       res.send(Updatedpatch).status(200)
    }
    catch {
           console.log(error)
           res.send(error).status(400)
    }
});
router.delete('/:id', async (req, res) => {
    try {
       const Updatedpatch = await db.collection("posts")
       let result = await collection.deleteOne(Updatedpatch);
       res.send(result).status(200)
    }
    catch (error) {
console.log(error)
res.send(error).status(400)
    }
});
router.delete('/', async (req, res) => {
    try {
       const boroughs = await db.collection("borough")
       let result = await collection.deleteMany(boroughs);
       res.send(result).status(200)
    }
    catch (error) {
console.log(error)
res.send(error).status(400)
    }
});
export default router;