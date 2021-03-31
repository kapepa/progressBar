import React, {useRef, useState} from 'react';

export default function Calc(){
    const refPeople = useRef(null);
    const refDay = useRef(null);
    const refResult = useRef(null)
    const [state,setState] = useState({
        people: 1000,
        maxPeople: 100000,
        day: 1,
        peoplePrice: 0.1,
        allprice: (1000 * 0.1) * 1,
        salePrice: 0,
        additionPrice: 0
    })


    const calcSale = (price, day) => {
        const sale = .95;
        const count =  parseInt((day / 10).toFixed(0));
        const totalSale = Array(count).fill("").reduce((total, el) => {
            return total * sale
        },price)
        setState((prevState) => {
            return {...prevState, salePrice: totalSale.toFixed(1)}
        })
    }
    

    const fnpeople = (e) => {
        const val = parseInt(e.target.value);
        const {peoplePrice, day} = state;
        

        setState((prevState) => {
            return {...prevState, allprice: ((val * peoplePrice) * day).toFixed(1), people:  val}
        })
    } 

    const fnday = (e) => {
        const val = parseInt(e.target.value)
        const {peoplePrice, people} = state;

        setState((prevState) => {
            calcSale((people * peoplePrice) * val, val)
            return {...prevState, allprice: (people * peoplePrice) * val, day: val }
        })
    } 

    const checkAction = (e) => {
        const val = parseInt(e.target.value)
        const contion = e.target.checked;
        contion ?  setState((prevState) => {return {...prevState, additionPrice: parseInt(prevState.additionPrice) + val} }) :  setState((prevState) => {return {...prevState, additionPrice: parseInt(prevState.additionPrice) - val} })
    }

    const newCounMaxPeople = (e) => {
        const val = parseInt(e.target.value);
        if(isFinite(val)) setState((prevState) => {return {...prevState, maxPeople: 100000} })
        if(val > 1000) setState((prevState) => {return {...prevState, maxPeople: val} })
    }

    const newCounMaxEmpty = (e) => {
        const val = e.target.value;
        if(val.trim() === "") setState((prevState) => {return {...prevState, maxPeople: 100000} })
    }


    return  (
    <div className="calc-section">

        <div className="s-input">

            <span className="s-input__start">min:1000</span>
            <span>
                Люди 
                <input className="line__appendLine" name="newcountPeople" placeholder="введите число выше 1000" onChange={newCounMaxPeople} onBlur={newCounMaxEmpty}/>
            </span> 
            <input className="line__input" name="people" type="range" min="1000" max={state.maxPeople} onChange={fnpeople}/>
            <span ref={refPeople} className="count" >{state.people}</span>
            
        </div>
        
        <div className="s-input">
            <span className="s-input__start">min:1</span>
            <span>Дни</span>
            <input className="line__input" name="day" type="range" min="1" max="180" defaultValue="1" onChange={fnday}/>
            <span ref={refDay} className="count" >{state.day}</span>
        </div>

        <div className="s-input s-input--checkbox">
            <label for="50">
                50
                <input onChange={checkAction} className="checkbox-price" name="50" type="checkbox" value="50"/>
            </label>
            <label for="100">
                100
                <input onChange={checkAction} className="checkbox-price" name="100" type="checkbox" value="100"/>
            </label>
            <label for="200">
                200
                <input onChange={checkAction} className="checkbox-price" name="200" type="checkbox" value="200"/>
            </label>
        </div>


        <div ref={refResult} className="show-result"><span className="result_field">result:</span>
            {state.day < 10 ? <span>{+state.allprice + state.additionPrice}$</span> : <><span className="sale" >{+state.allprice + state.additionPrice}$</span><span>{+state.salePrice + state.additionPrice}$</span></>  } 
        </div>
        

    </div>)
}
