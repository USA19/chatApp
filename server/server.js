const express =require('express');
const http=require('http');
const socketIO=require('socket.io');

const {addUser,removeUser,getUser,getUsersInRoom}=require('./users');
const { compileFunction } = require('vm');
// ServerConfigration
const app =express();
const server=http.createServer(app);
const port=process.env.PORT||5000;
const io=socketIO(server);


// socket on connection
io.on('connect', socket => {
  socket.on('join', ({ name, room }, callback) => {
      const {error,user}=addUser({id:socket.id,name,room});
      if(error){
        
        return callback(error);
      }
      socket.emit('message',{user:'admin',text:`${user.name},welcome to the room ${user.room}`});
      socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} has joined`});
      socket.join(user.room);
      io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)});
     
       });
    socket.on('sendMessage',(message)=>{
      const user=getUser(socket.id);
  
      io.to(user.room).emit('message',{user:user.name,text:message});
      io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)});
    });
    
    socket.on('disconnect', () => {
     
     
      const user=removeUser(socket.id);
      
      if(user){
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} left`});
        io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)});
        }
        console.log('User Left');
      });
})








server.listen(port);



