const express=require('express')
const server=express()
const SearchMgr=require('./controllers/SearchMgr')
const DeleteMgr=require('./controllers/DeleteMgr')
const CreateMgr=require('./controllers/CreateMgr')

const bp=require('body-parser')
server.use(bp.json())

server.use('/',SearchMgr) 
server.use('/',DeleteMgr)
server.use('/',CreateMgr)

server.listen(3001,()=>console.log('server started'))