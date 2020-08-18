const express = require('express')
const Author = require('../model/Author')

const authorRoute=express.Router()
authorRoute.use(express.json())

authorRoute.route('/')
.get((req,res)=>{
})