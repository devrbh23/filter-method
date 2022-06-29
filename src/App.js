import React, {useState} from 'react';

function App() {
  const [car, setCar] = useState([
    {
      color: 'red',
      id: 0,
    },
    {
      color: 'green',
      id: 1,
    },
    {
      color: 'blue',
      id: 2,
    },
    {
      color: 'yello',
      id: 3,
    },
  ]);

  const names = {name: 'dev', full: 'devRaj', names: 'dev', sur: 'Bhattarai'};

  const fullName = Object.values(names);
  console.log(fullName, ['object values']);
  console.log([...new Set(fullName)], ['remove duplicate using (SET)']); //remove duplicate
  console.log(
    fullName.filter((n) => n.includes('de')),
    ['delete using (filter)']
  );
  console.log(
    fullName.some((n) => n === 'dev'),
    ['test (some) value passes the test']
  ); // ||
  console.log(
    fullName.map((n) => n),
    ['(map)ping return values']
  );
  const eachName = [];
  console.log(
    fullName.forEach((n) => {
      eachName.push(n, n.length);
    })
  );
  console.log(eachName, ['call function on each element onnce']);
  console.log(
    fullName.every((n) => n.includes('bh')),
    ['test (every) value pass the test']
  );
  console.log(
    fullName.sort((n) => n.length - 7),
    ['(sort)ing ascending if true']
  );
  console.log(
    fullName.find((n) => n.includes('Bhattarai')),
    ['(find) first value and return']
  );
  // console.log(
  //   fullName.fill((n) => n),
  //   ['fill,ggggggggggggggggggggg']
  // );

  const arrName = fullName.reduce(
    (prev, curr, i, s) => {
      console.log(prev);
      const nam = Object.keys(prev);
      // console.log(nam);
      // console.log(nam[i]);
      prev[nam[i]] = curr;
      // prev['name'] = s[0];
      // prev['sur'] = s[1];
      // prev['fullName'] = s[2];
      return prev;
    },
    {name: '', full: '', names: '', sur: ''}
  );
  console.log(arrName, ['using (reduce) to make single object from array']);

  const nam = {name: 'first', surname: 'last'};

  const full = Object.values(nam);
  const fullNames = full.reduce((prev, curr, i) => {
    prev[i] = i + 1 + '.' + curr;
    return prev;
  }, []);

  const delet = (id) => {
    setCar(car.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <ul>
        {car.map((item) => (
          <li key={item.id}>
            <button onClick={() => delet(item.id)}> {item.color}</button>
          </li>
        ))}

        {fullNames.map((n) => {
          return <li key={n}>{n}</li>;
        })}
      </ul>
      <ol>
        {fullName.map((n, i) => {
          return <li key={i}>{n}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;

// We will start from here

// var campus = {
//   name: 'amrit science campus',
//   imageUrl:
//     'https://lh5.googleusercontent.com/p/AF1QipPsK2pL8Ib0aJufW6BPSsPNjhmVXtiUdCKJe3zd=w431-h160-k-no',
//   courses: ['master', 'bachelor'],
//   classes: [
//     {
//       name: 'csit',
//       students: [
//         {name: 'dev', age: 24, sec: 'a', address: 'rasuwa', roll: 12},
//         {name: 'nabin', age: 25, sec: 'b', address: 'suwa', roll: 122},
//         {name: 'aawaj', age: 27, sec: 'b', address: 'uwa', roll: 132},
//         {name: 'pravin', age: 28, sec: 'a', address: 'ras', roll: 142},
//         {name: 'sid', age: 29, sec: 'b', address: 'rasuw', roll: 14},
//       ],
//     },
//     {
//       name: 'math',
//       students: [
//         {name: 'dev', age: 24, sec: 'a', address: 'rasuwa', roll: 12},
//         {name: 'nabin', age: 25, sec: 'b', address: 'suwa', roll: 122},
//         {name: 'aawaj', age: 27, sec: 'b', address: 'uwa', roll: 132},
//         {name: 'pravin', age: 28, sec: 'a', address: 'ras', roll: 142},
//         {name: 'sid', age: 29, sec: 'b', address: 'rasuw', roll: 14},
//       ],
//     },
//     {
//       name: 'physics',
//       students: [
//         {name: 'dev', age: 24, sec: 'a', address: 'rasuwa', roll: 12},
//         {name: 'nabin', age: 25, sec: 'b', address: 'suwa', roll: 122},
//         {name: 'aawaj', age: 27, sec: 'b', address: 'uwa', roll: 132},
//         {name: 'pravin', age: 28, sec: 'a', address: 'ras', roll: 142},
//         {name: 'sid', age: 29, sec: 'b', address: 'rasuw', roll: 14},
//       ],
//     },
//     {
//       name: 'chemestry',
//       students: [
//         {name: 'dev', age: 24, sec: 'a', address: 'rasuwa', roll: 12},
//         {name: 'nabin', age: 25, sec: 'b', address: 'suwa', roll: 122},
//         {name: 'aawaj', age: 27, sec: 'b', address: 'uwa', roll: 132},
//         {name: 'pravin', age: 28, sec: 'a', address: 'ras', roll: 142},
//         {name: 'sid', age: 29, sec: 'b', address: 'rasuw', roll: 14},
//       ],
//     },
//     {
//       name: 'english',
//       students: [
//         {name: 'dev', age: 24, sec: 'a', address: 'rasuwa', roll: 12},
//         {name: 'nabin', age: 25, sec: 'b', address: 'suwa', roll: 122},
//         {name: 'aawaj', age: 27, sec: 'b', address: 'uwa', roll: 132},
//         {name: 'pravin', age: 28, sec: 'a', address: 'ras', roll: 142},
//         {name: 'sid', age: 29, sec: 'b', address: 'rasuw', roll: 14},
//       ],
//     },
//   ],
// };
