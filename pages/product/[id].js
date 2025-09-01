import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function Product({ product }){
  if(!product) return <div>Prodotto non trovato</div>
  return (
    <main style={{padding:40,fontFamily:'Arial'}}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{width:400,height:260,objectFit:'cover'}} />
      <p>Prezzo: €{product.price}</p>
      <p><a href={`/api/redirect?id=${encodeURIComponent(product.id)}`}>Vai all'offerta</a></p>
      <p><Link href="/">← Torna</Link></p>
    </main>
  )
}

export async function getStaticPaths(){
  const file = path.join(process.cwd(),'data','products.json')
  const raw = fs.readFileSync(file,'utf8')
  const products = JSON.parse(raw)
  return { paths: products.map(p=>({ params: { id: p.id }})), fallback: false }
}

export async function getStaticProps({ params }){
  const file = path.join(process.cwd(),'data','products.json')
  const raw = fs.readFileSync(file,'utf8')
  const products = JSON.parse(raw)
  const product = products.find(p=>p.id===params.id) || null
  return { props: { product } }
}
