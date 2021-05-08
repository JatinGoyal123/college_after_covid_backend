import mongoose from 'mongoose';
const UserSchema=mongoose.Schema({
    uname:String,
    email:String,
    password:String,
    role:String,
});
const Users=mongoose.model('Users',UserSchema);
export default Users;