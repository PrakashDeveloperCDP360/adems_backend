const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question_answerSchema = new Schema(
  {
    question_id:{type:Array},
    question_ans:{type:Array},
    user_id:{type:String},
    faq:{type:String},
    like:{type:Number,default:0},
    dislike:{type:Number,default:0},
    content_id:{type:Number},
    content:{type:String}
  },
  { timestamps: { createdAt: "dt", updatedAt: "u_dt" } }
);

module.exports = mongoose.model("Question_answer", Question_answerSchema);
