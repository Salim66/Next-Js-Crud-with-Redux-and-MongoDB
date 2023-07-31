import mongoose from "mongoose";


// create schema
const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    priority: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true    
});

// export default
export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);