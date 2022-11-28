import { dbConnect } from "../../../utils/dbConnect";
import Article from "../../../models/Article"


dbConnect()

export default async function handler(req, res) {
  const { method, body, query: { slug } } = req;
  console.log(slug)
  switch (method) {
    case "GET":
      try {
        const article = await Article.findOne({ slug });
        return res.status(200).json(article)
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    case "DELETE":
      try {
        const article = await Article.findOneAndDelete({ slug });
        return res.status(200).json(article)
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
  }
}

