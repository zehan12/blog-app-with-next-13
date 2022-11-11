import { dbConnect } from "../../../utils/dbConnect";
import Article from "../../../models/Article"


dbConnect()

export default async function handler(req,res){
    const { method, body } = req;
    console.log(method,body,"body")
    res.json({name:"article"})

    switch ( method ) {
        case "GET": 
          try {
            const article  = await Article.find();
            res.status(200).json(article)
          } catch ( err ) {
            return res.status(400).json({msg:err.message});
          }

        case "POST":
          try {
            const newArticle = new Article(body);
            const savedArticle = await newArticle.save();
            return res.status(200).json(savedArticle)
          } catch (err) {
            return res.status(400).json({msg:err.message});
          }
    }
}