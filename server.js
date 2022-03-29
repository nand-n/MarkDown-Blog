const express =require('express')
const articleRouter =require('./routes/articles')
const app =express()

app.set('view engine','ejs')

app.use('/articles',articleRouter)

app.get('/',(req,res)=>{
    res.render('index',{text:'Hellow'})
})
const port=process.env.PORT || 5000
app.listen(port, console.log(`Server Started at port ${port}.....`))