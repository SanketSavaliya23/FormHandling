import React, { useState } from 'react'

function Form() {

    const [obj, setobj] = useState({})
    const [array, setarray] = useState([])
    let [count, setcount] = useState(0)

    const saveData = (e) => {
        e.preventDefault();
        count++;  
        setcount(count)
        obj.id = count;
        setarray([ ...array , obj])
    }

    const getInputValue = (e) => {
        setobj({ ...obj ,[e.target.name] : e.target.value})
    }

  return (
    <>

        <h2 className='text-center'>FormHandling</h2>

        <form className='w-50 mx-auto p-3 rounded' style={{backgroundColor:'lightgray'}}>
            <h4>Registration</h4>
            <div>
                <label className='w-100'>First Name</label>
                <input type="text" className='w-100 border-0 rounded py-1 px-2 mb-2 abc' name='fname' onChange={getInputValue} />
            </div>
            <div>
                <label className='w-100'>Middle Name</label>
                <input type="text" className='w-100 border-0 rounded py-1 px-2 mb-2' name='mname' onChange={getInputValue}  />
            </div>
            <div>
                <label className='w-100'>Last Name</label>
                <input type="text" className='w-100 border-0 rounded py-1 px-2 mb-2' name='lname' onChange={getInputValue} />
            </div>
            <input type='submit' className='btn btn-success border-0 mt-4' style={{backgroundColor:'purple'}} onClick={saveData} value='Save' />
        </form>

        <table className='table mt-3 myTable'>
            <thead>
                <tr>
                    <th className='bg-dark text-white'>ID</th>
                    <th className='bg-dark text-white'>First Name</th>
                    <th className='bg-dark text-white'>Middle Name</th>
                    <th className='bg-dark text-white'>Last Name</th>
                    <th className='bg-dark text-white'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    array.map((element, index) => {
                        return <tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.fname}</td>
                            <td>{element.mname}</td>
                            <td>{element.lname}</td>
                            <td>
                                <button className='btn btn-warning py-0 me-2'>EDIT</button>
                                <button className='btn btn-danger py-0'>DELETE</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Form