import { dbConnect } from "../../../utils/dbConnect";
import Article from "../../../models/Article"


dbConnect()

export default async function handler(req,res){
    const { method, body } = req;
    switch ( method ) {
        case "GET": 
          try {
            const article  = await Article.find();
            return res.status(200).json(article)
          } catch ( err ) {
            return res.status(400).json({msg:err.message});
          }

        case "POST":
          try {
            const { title, content } = body;
            const slug = title.split(" ").join("-")+String(Date.now()).slice(9)
            const articleBody = {
                title: title,
                content: content,
                slug
            }
            const createArticle = await Article.create(articleBody);
            return res.status(200).json(createArticle)
       } catch (err) {
            return res.status(400).json({msg:err.message});
          }
    }
}