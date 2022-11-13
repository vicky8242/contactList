import React from 'react'

const ItemChild = ({data, handleDelete, handleEdit}) => {
  return (
    <>
    {
        data.map((el) => {
          return <>
              <div className='card-div'>
              <div className='label-flex'>
                <label>FULLNAME : </label>
                <p className='profile-info' id="name-capitalize">{el.fName} {el.lName} </p>
              </div>
              <div className='label-flex'>
                <label>MOBILE NO : </label>
                <p className='profile-info'>{el.mobile}</p>
              </div>
              <div className='del-edit-btn'>
                <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
                <button className="delete-btn" onClick={() => handleEdit(el)}>edit</button>
              </div>
              </div>
              </>
        })
      }
      </>
  )
}

export default ItemChild