import { dbConnect } from "../../../utils/dbConnect";

dbConnect()

export default function handler(req,res){
    res.json({name:"article"})
}