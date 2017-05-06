/**
 * entry
 */
console.log('hello typescript')
export function add(a, b) { return a + b; }
//*************************************************** */
import { Observable } from 'rx'
import rxNode from 'rx-node'

export function test1() {
    var result$ = Observable.fromArray([1, 2, 3, 4, 5]).map((v) => {
        return v + 'A'
    }).reduce((sum, item) => {
        return sum + item
    })
    result$.subscribe((result) => {
        console.log(`result`, result)
    })
}
/**
 * amb 从一系列的观察对象中 拿到最先onNext的
 * 适合用于 抢购场景 最先点击的人进入支付 流程
 */
export function learnAmb() {
    var foo1 = Observable.create((observer) => {
        setTimeout(() => { observer.onNext(111) }, 2000)
    });

    var foo2 = Observable.create((observer) => {
        setTimeout(() => { observer.onNext(222) }, 1000)
    });

    var foo3 = Observable.create((observer) => {
        setTimeout(() => { observer.onNext(333) }, 500)
    });


    Observable.amb([foo1, foo2, foo3]).subscribe((v) => {
        console.log(`amd->${v}`)
    })
}

// var foo = Observable.create((observer) => {
//     console.log('Hello');
//     observer.onNext(111)
//     observer.onNext(222)
//     observer.onNext(333)
// });

// console.log('before');
// foo.subscribe(function (x) {
//     console.log(x);
// });
// console.log('after');
