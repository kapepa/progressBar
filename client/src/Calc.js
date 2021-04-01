import React, {useRef, useState} from 'react';

export default function Calc(){
    const [state,setState] = useState({
        people: 10000,
        maxPeople: 100000,
        day: 1,
				maxDay: 180,
        peoplePrice: 0.01,
        allprice: (10000 * 0.01) * 1,
        salePrice: 0,
        additionPrice: 0
    })


    const calcSale = (price, day) => {
        const sale = .95;
        const count =  Math.floor(day / 10);
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
					calcSale((val * peoplePrice) * val, day)
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
        if(isNaN(val)) setState((prevState) => {return {...prevState, maxPeople: 100000} })
        if(val > 1000) setState((prevState) => {return {...prevState, maxPeople: val} })
    }

    const newCounMaxEmpty = (e) => {
        const val = e.target.value;
        if(val.trim() === "") setState((prevState) => {return {...prevState, maxPeople: 100000} });
				e.target.value = ""
    }

		const newCounMaxDay = (e) => {
			const val = parseInt(e.target.value);
			if(isNaN(val)) setState((prevState) => {return {...prevState, maxDay: 180} })
			if(val > 1) setState((prevState) => {return {...prevState, maxDay: val} })
		}

		const newCounMaxDayBlur = (e) => {
			const val = e.target.value;
			if(val.trim() === "") setState((prevState) => {return {...prevState, maxDay: 180} });
			e.target.value = ""
		}


    return  (
    <div className="calc-section">

        <div className="s-input">

            <span className="s-input__start">min:10000</span>
            <span>
                Люди 
                <input className="line__appendLine" name="newcountPeople" placeholder="введите число выше 100000" onChange={newCounMaxPeople} onBlur={newCounMaxEmpty}/>
            </span> 
            <input className="line__input" name="people" type="range" min="10000" max={state.maxPeople} onChange={fnpeople}/>
            <span className="count" >{state.people}</span>
            
        </div>
        
        <div className="s-input">
            <span className="s-input__start">min:1</span>
            <span>
							Дни
							<input className="line__appendLine" name="newcountDay" placeholder="Введите дни не меньше 1" onChange={newCounMaxDay} onBlur={newCounMaxDayBlur}/>
						</span>
            <input className="line__input" name="day" type="range" min="1" max={state.maxDay} defaultValue="1" onChange={fnday}/>
            <span className="count" >{state.day}</span>
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


        <div className="show-result"><span className="result_field">result:</span>
            {state.day < 10 ? <span>{(+state.allprice + state.additionPrice).toFixed(1)}$</span> : <><span className="sale" >{(+state.allprice + state.additionPrice).toFixed(1)}$</span><span>{(+state.salePrice + state.additionPrice).toFixed(1)}$</span></>  } 
        </div>
        

    </div>)
}
