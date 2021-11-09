const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const sort = ["name", "level"];

function orderByProps(obj, sort) {

    const arr1 = [];
    const arr2 = [];

    // for (let key in obj) {
    //     for (let arrKey of sort) {
    //         if (arrKey === key) {
    //             arr1.push({'key': arrKey, 'value': obj[key]});
    //         }
    //     }
    // }

    // for (let key in obj) {
    //     for (let arrKey of sort) {
    //         if (arrKey === key) {
    //             arr1.push({'key': arrKey, 'value': obj[key]});
    //         } else {
    //             arr2.push({'key': arrKey, 'value': obj[key]});
    //         }
    //     }
    // }


    // for (let arrKey in sort) {
    //    if (sort[arrKey] in obj) {
    //        console.log(sort[arrKey]);
    //    }
    // }

    for (let key in obj) {
        arr2.push({'key': key, 'value': obj[key]});
    }

    arr2.sort( (a, b) => {
        if (a.key > b.key) {
            return 1;
        };
        if (a.key < b.key) {
            return -1;
        };
        return 0;
    });


    // console.log(arr1);
    console.log(arr2);

    // return arr.sort( (a, b) => a-b );
    // return arr1;
}

const result = orderByProps(obj, sort);
console.log(result);