import  app  from './App'

const port = process.env.PORT || 5000
app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log('Express server puerto 5000: \x1b[32m%s\x1b[0m', 'online');
})
