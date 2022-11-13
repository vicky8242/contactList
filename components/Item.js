import React, { useState } from 'react'
import ItemChild from './ItemChild'
const Item = () => {

  const initialData = { fName: "", lName: "", mobile: "" }
  const [currentContact, setContact] = useState(initialData)
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [searchtxt, setSearchtxt] = useState("");

  const [searchedData, setSearchedData] = useState([]);
  console.log(data);
  console.log(editId);


  const handleChange = (e) => {
    setContact({ ...currentContact, [e.target.name]: e.target.value })
  }

  const handleDelete = (ID) => {
    const newArr = data.filter(({ id }) => id !== ID)
    setData(newArr)
  }
  const handleSubmit = (e) => {
    const { fName, lName, mobile } = currentContact;
    console.log(currentContact);
    if (editId) {
      const findObj = data.find((el) => {
        return el.id == editId;
        console.log(el)
        // console.log(editId)
      })
      console.log(findObj);
      setContact(findObj)
      const idx = data.indexOf(findObj);
      console.log(idx);
      data[idx] = currentContact;
      setContact(initialData)
      setEditId(null);

      // setData(...data);

    } else {

      if (fName && lName && mobile) {
        const newArr = [...data, { ...currentContact, id: Date.now() }]
        setData(newArr)
        setContact(initialData)
      } else {
        alert("fill all fields")
      }
    }
  }


  const handleEdit = (contact) => {
    setEditId(contact.id)
    console.log(contact.id)
    setContact(contact)
  }

  const handleFilter = () => {
    const newArr = data.filter(({ fName, mobile, lName }) => {
      const nFilter = (fName.indexOf(searchtxt) !== -1) || (lName.indexOf(searchtxt) !== -1) || (mobile.indexOf(searchtxt) !== -1);
      return nFilter
    })

    setSearchedData(newArr);

  }

  const handleClear = () => {


    setSearchtxt("");
    setSearchedData([]);

  }
  console.log(searchtxt);


  const { fName, lName, mobile } = currentContact;
  console.log(searchedData)
  return (

    <div className='container-outer'>
      <div className='search-div'>

        <input className='name-search' placeholder='Type Name or Number' value={searchtxt} onChange={(e) => setSearchtxt(e.target.value)}></input>
        <button className='search-btn' onClick={handleFilter} >Search</button>
        <button className='search-btn' onClick={handleClear} > Clear Search</button>
      </div>

      {searchedData.length !== 0 ? <h1> Searched List</h1> :
        <div className='container'  >
          <h2 className="register">Register Here</h2>
          <div className='First-Name'>
            <label>First Name</label>
            <input
              value={fName}
              onChange={handleChange}
              name="fName"
              id="firstName"
              className='firstName'
            ></input>
          </div>
          <div className='First-Name'>
            <label>Last Name</label>
            <input
              value={lName}
              name="lName"
              onChange={handleChange}
              id="lastName"
              className='firstName'></input>
          </div>
          <div className='First-Name'>
            <label>Mobile No.</label>
            <input
              value={mobile}
              onChange={handleChange}
              name="mobile"
              id="firstName" className='firstName'></input>
          </div>

          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            {!editId ? 'Submit' : 'Update'}
          </button>
        </div>}
      {searchedData.length === 0 ? <h1 className='contact-heading'> Contact List  </h1> : null}
      <div className='data-main'>


        {searchedData.length !== 0 ? < ItemChild data={searchedData} handleDelete={handleDelete} handleEdit={handleEdit} />
          : < ItemChild data={data} handleDelete={handleDelete} handleEdit={handleEdit} />}
      </div>
    </div>
  )
}

export default Item