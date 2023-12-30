import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type:String,
        default:"https://us.123rf.com/450wm/mamun25g/mamun25g2104/mamun25g210400720/167497007-kp-letter-logo-design-on-black-background-kp-creative-initials-letter-logo-concept-kp-letter-design.jpg?ver=6",
    },



},{timestamps: true})


const User = mongoose.model('User',userSchema);
export default User;