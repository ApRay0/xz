import { filter, id_show,map, take, compose, convergence, within, double, Pair, pairOf, fst, isOdd } from "./util";

const repeat = <T>(f:(x:T)=>T, init:T) => {
     return (function*(){ 
        let cur = init 
        while(true){ 
            yield cur 
            cur = f(cur) 
        } 
    }) 
    }

const next = (n:number)=>(x:number) => (x + n / x) / 2
const nr_g = (n:number) => repeat(next(n),n/2)
const sqrt = compose(convergence(within(0.0000001)), nr_g )
console.log(sqrt(25)())