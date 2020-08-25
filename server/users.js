const users=[];

const addUser=({id,name,room})=>{
     name=name.trim().toLowerCase();
     room=room.trim().toLowerCase();
const user={id,name,room};
const existingUser=users.find(user=>user.name===name && user.room===room);
if(existingUser){
    return {error:'The username is already been taken'}
}
users.push(user);
return {user}
}

const removeUser= id=>{
    const index=users.findIndex(user=>user.id===id);
    if(index!==-1){
   let user= users.splice(index,1);
   
   return user[0]
}


}

const getUser=id=>users.find(user=>user.id===id);

const getUsersInRoom=room=>users.filter(user=>user.room===room);


module.exports={addUser,removeUser,getUser,getUsersInRoom};