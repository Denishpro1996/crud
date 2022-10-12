import React from 'react'
import { useState } from 'react'

const App = () => {
    const [inputData, setInputData] = useState({
        list: ""
    }
    )
    const [data, setData] = useState([])


    const [isToggle,setIsToggle] = useState(true)
    const [isEdit,setIsEdit] = useState(null)
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setInputData((oldValue) => {
            return {
                ...oldValue,
                [name]: value
            }
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
    const additem = () => {
        console.log("abc")
        setInputData({
            list: ""
        })
        if (!inputData.list) {
            alert("Empty Data")
        }else if(inputData && !isToggle) {

            setData(
                data.map((elem)=>{
                        if(elem.id = isEdit){
                            return{...elem,name:inputData}
                        }
                        return elem;
                })
            )
        }
        else {
            const addAllInput = { id: new Date().getTime().toString(), name: inputData }
            setData([...data, addAllInput])
        }
    }
    const delData = (id) => {
        const deleteIte = data.filter((elem) => {
            return elem.id !== id;
        })
        setData(deleteIte)
    }
    const editItem=(id)=>{
        const updateData = data.find((elem)=>{
            return elem.id === id
        })
        setInputData(updateData.name)
        setIsToggle(false)
        setIsEdit(id)
    }
    return (
        <div>
            <h1>Crud Operation...</h1>
            <form action="" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder='list....'
                    value={inputData.list}
                    name='list'
                    onChange={changeHandler}
                />
                {
                    isToggle ?<button onClick={additem}>+</button>: <button onClick={additem}>edit
                    </button>

                }
                {
                    data.map((CurrValue) => {
                        return (
                            <>
                                <div>
                                    {CurrValue.name.list}
                                </div>
                                <button onClick={() => delData(CurrValue.id)}>del</button>
                                <button onClick={() => editItem(CurrValue.id)}>Edit</button>
                            </>
                        )
                    })
                }


            </form>
        </div>
    )
}

export default App
