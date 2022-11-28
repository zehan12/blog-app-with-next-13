import mongoose from "mongoose";


const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    content: { type: String, required: true },
    tagList: [ { type: String } ],
    author: { type: String, required: true },
    // comments: [ { type: Schema.Types.ObjectId, ref: "comment" } ],
    claps: { type : Number, default: 0 },
    slug: { type: String, unique: true }
}, { timestamps: true }
);

function generateUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = Date.now()
    firstPart = ("000" + firstPart.toString(36)).slice(-1);
    secondPart = ("000" + secondPart.toString(36)).slice(-2);
    return firstPart + secondPart;
}

articleSchema.pre('save', async function(next){
    console.log(this)
    if ( this.title.length > 13 ) {
        this.slug = this.title.slice(0,13).split(" ").join("-")+"-"+generateUID();
    } else {
        this.slug = this.title.split(" ").join("-")+"-"+generateUID();   
    }
    next();
})

export default mongoose.models.Article || mongoose.model("Article", articleSchema)