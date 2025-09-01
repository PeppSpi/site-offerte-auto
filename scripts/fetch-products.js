// Script demo: da sostituire con chiamate reali alle API affiliate per aggiornare data/products.json
const fs = require('fs')
const path = require('path')

async function fetchDemo(){
  const items = []
  for(let i=1;i<=5;i++){
    items.push({
      id: `demo-${i}`,
      title: `Prodotto demo ${i}`,
      price: (Math.random()*80+10).toFixed(2),
      affiliate_link: `https://example.com/product/${i}?aff=YOUR_TRACKING`,
      image: `https://picsum.photos/seed/demo${i}/600/400`,
      updated_at: new Date().toISOString()
    })
  }
  return items
}

async function main(){
  const items = await fetchDemo()
  const file = path.join(process.cwd(),'data','products.json')
  fs.writeFileSync(file, JSON.stringify(items,null,2), 'utf8')
  console.log('Wrote', items.length, 'items')
}

main().catch(e=>{console.error(e); process.exit(1)})
