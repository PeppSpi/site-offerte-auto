// registra click e reindirizza al link affiliato
import fs from 'fs'
import path from 'path'

export default async function handler(req,res){
  const { id } = req.query
  const file = path.join(process.cwd(),'data','products.json')
  const raw = fs.readFileSync(file,'utf8')
  const products = JSON.parse(raw)
  const product = products.find(p=>p.id===id)
  if(!product) return res.status(404).send('Not found')

  // log semplice: append su file clicks.log (non ideale per produzione ma ok per boilerplate)
  const logLine = `${new Date().toISOString()}\t${id}\t${req.headers['x-forwarded-for']||req.socket.remoteAddress}\n`
  try{ fs.appendFileSync(path.join(process.cwd(),'data','clicks.log'), logLine) }catch(e){/*ignore*/}

  // redirect immediato al link affiliato
  return res.redirect(product.affiliate_link)
}
