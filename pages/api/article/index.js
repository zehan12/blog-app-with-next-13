import { dbConnect } from "../../../utils/dbConnect";
import Article from "../../../models/Article";
import { errorMessage, successMessage, status } from "../../../helplers/status";


dbConnect()

export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {

    case "GET":
      try {
        const article = await Article.find();
        successMessage.articles = article
        return res.status(status.success).json(successMessage)
      } catch (err) {
        errorMessage.error = err.message 
        return res.status(status.bad).json({ errorMessage });
      }

    case "POST":
      try {
        let { title, description, content, tagList, author } = body;
        if ( !title || !description || !content ) {
          errorMessage.error = "title, description and content field cannot be empty"
          return res.status(status.bad).json({error:errorMessage})
        }
        if ( !author ) {
          errorMessage.error = "Author name not found"
          return res.status(status.notfound).json({error:errorMessage})
        }
        if ( tagList ) {
          console.log( tagList)
          tagList = tagList.split(",")
          console.log(tagList)
        }
        
        const createArticle = await Article.create({ title, description, content, tagList, author });
        return res.status(status.success).json(createArticle)
      } catch (err) {
        errorMessage.error = err.message
        return res.status(status.bad).json({ error: errorMessage });
      }
    }
}

