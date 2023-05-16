import _ from 'lodash';

export default function solution(content){
  // BEGIN
  let split = content.split('\r\n')
  let slice = split.slice(1, split.length)
  console.log(`количество партий ${slice.length}`);

  let map = slice.map(r => r.split(','))
  let ratedgames = map.map(r => r[1])
  let ttrue = 0
  let ffalse = 0
  let counter = ratedgames.map(r =>{
    if(r === 'TRUE'){
     return ttrue += 1
    }return ffalse += 1
  })
  let sootnochenie = ttrue/slice.length * 100
  console.log(`рейтинговых ${Math.round(sootnochenie)}%`);
  let sootnochenie2 = ffalse/slice.length * 100
  console.log(`безрейтинговых ${Math.round(sootnochenie2)}%`);

  let openingname = map.map(r => r[13])
  let uniq = _.uniq(openingname)
  console.log(`дебюты ${uniq}`);

  let status = map.map(r => r[4])
  let uniq2 = _.uniq(status).filter(r => r !== undefined)
  let white = 0
  let black = 0
  let draw = 0
  let counter2 = status.map(r =>{
    if(r === 'White'){
     return white += 1
    }
    if(r === 'Black'){
      return black += 1
    }return draw += 1
  })
  console.log(`победы ${Math.round(white/slice.length * 100)}%`);
  console.log(`поражения ${Math.round(black/slice.length * 100)}%`);
  console.log(`ничья ${Math.round(draw/slice.length * 100)}%`);

  const winners = map.filter((row) => row[4] !== 'Draw');
  const search = winners.filter((row) => (row[4] === 'White' && Number(row[7]) < Number(row[9])) || (row[4] === 'Black' && Number(row[7]) > Number(row[9])));
  console.log(search.length);

 

  // END
}