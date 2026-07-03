//for
let element;
// for(let i = 0;i<10;i++){
//     element  =i;
//     console.log(element);
// }

// for(let i = 0;i<10;i++){
//     console.log(`Outer loop: ${i}`);
//     for(let j = 0;j<10;j++){
//         console.log(`Inner loop: ${j}`);
//     }
// }

for(let i = 1; i<=10;i++){
    console.log(`table of ${i}`);
    for(let j = 1;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}