import mongose from 'mongose';

// create schema
const userSchema = mongose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    cell: {
        type: String,
        default: null
    },
    photo: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    status: {
        type: Boolean,
        default: true
    },
    trash: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// export schema
export default mongose.modal('User', userSchema);