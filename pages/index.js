import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function Home({ products }) {
  return (
    <main style={{padding:40,fontFamily:'Arial'}}>
      <h1>Offerte Automatiche</h1>
      <p>Prodotti aggiornati automaticamente — demo boilerplate</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20}}>
        {products.map(p => (
          <div key={p.id} style={{border:'1px solid #ddd',padding:12,borderRadius:8}}>
            <img src={p.image} alt={p.title} style={{width:'100%',height:160,objectFit:'cover'}}/>
            <h3>{p.title}</h3>
            <p>Prezzo: €{p.price}</p>
            <Link href={`/product/${encodeURIComponent(p.id)}`}>Vedi offerta</Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export async function getStaticProps(){
  const file = path.join(process.cwd(),'data','products.json')
  const raw = fs.readFileSync(file,'utf8')
  const products = JSON.parse(raw)
  return { props: { products }, revalidate: 3600 }
}
