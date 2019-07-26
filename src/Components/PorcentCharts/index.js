


const PorcentCharts = ( {data} ) => {
  let count = 0
  let result
  let array = []
  data.map(value =>(
    array.push(value.first_name + value.last_name)
  ))

  array.forEach( valor => {
    if(valor.length > 12){
      count +=1 
    }
  })
  result = (count/3)*100

  return( result.toFixed(2) )
}

export default PorcentCharts
