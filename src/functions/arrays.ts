export function embaralhar(elementos: any[]): any[] {
  return elementos.map(valor => {
    return ({ valor, aleatorio: Math.random() })
  }).sort((a, b) => a.aleatorio - b.aleatorio).map(obj => obj.valor)
}