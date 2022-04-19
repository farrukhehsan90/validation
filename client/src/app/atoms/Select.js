import React,{useState} from 'react'

export default function Select({name,options,item,selectedOptions,onChangeSelect,setUnitAndQ}) {

  const [inp,setInp]=useState('');

  return (
      <>
      <label className='form-label mt-4 form-label-font-weight-bold'>{name}</label>
      <select className="form-select mt-1" style={{width:300}} aria-label={name} onChange={(e)=>onChangeSelect(name,e.target.value)}>
        {
            options.map((val,i)=>{
                if(i===0){
                    return <option key={i} defaultValue>{val}</option>
                }
                else{
                    return <option key={i} value={val}>{val}</option>
                }
            })
        }
    </select>
    {item?.optionsToShow && item?.optionsToShow.options.length!=0 &&
    <div>
         <select className="form-select mt-4" style={{width:300}} onChange={(e)=>onChangeSelect('FoodType',e.target.value)}>
        {
            item?.optionsToShow.options.map((val,i)=>{
                if(i===0){
                    return <option key={i} defaultValue>{val}</option>
                }
                else{
                    return <option key={i} value={val}>{val}</option>
                }
            })
        }
        </select>
        <div className="input-group mt-4" style={{width:300}}>
        <input type="text" className="form-control" onChange={(e)=>{setUnitAndQ({quantity:e.target.value,unit:item?.optionsToShow?.unit})}}/>
        <span className="input-group-text">{item?.optionsToShow?.unit}</span>
      </div>

    </div>
   
        }
        
        
      </>
    
  )
}
