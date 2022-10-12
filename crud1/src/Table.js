import React from 'react'
import { useState } from 'react'
import { Data } from './Data'
const Table = () => {
    const [data, setData] = useState(Data)
    console.log(data, "data")

    const deleteData = (id) => {
        const delData = data.filter((elem, index) => {
            return id !== index
        })
        setData(delData)
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Designation</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Operator</th>
                </tr>
                
                {
                    data.map((currValue, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{currValue.srno}</td>
                                    <td>{currValue.name}</td>
                                    <td>{currValue.lname}</td>
                                    <td>{currValue.designation}</td>
                                    <td>{currValue.state}</td>
                                    <td>{currValue.city}</td>
                                    <td>
                                        <button onClick={() => deleteData(index)}>Delete</button>
                                        <button>Edit</button>
                                    </td>
                                </tr>
                            </>
                        )

                    })
                }
            </table>
        </div>
    )
}

export default Table
