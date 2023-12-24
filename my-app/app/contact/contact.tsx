"use client"
import { useState } from "react"
import { contactTypes, onChangeEventType } from "../types/types"
import Display from "../Compnents/Button/display"
import * as yup from "yup"

export default function Contact() {
  
  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(5).max(20),
    email: yup.string().email().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required(),
    education: yup.string().required(),
    phone: yup.number().required(),
    message: yup.string().required()

  })
  const [contactInfo1,setContactInfo1] =useState<contactTypes>({
    name: "",
    fname: "",
    email:"",
    country: "",
    education: "",
    city:"",
    address:"",
    phone: 0,
    subject:"",
    message:""
  })
  const [errors,setErrors]= useState<string[]> ([])
  
const OnChangeHandler=(e:onChangeEventType)=>{
// console.log(e.target.value);
// console.log(e.target.name);


  let userDetail = {
  
  ...contactInfo1,
  [e.target.name]: e.target.value
}
setContactInfo1(userDetail)
  }
  const[contactList,setContactList] = useState<contactTypes[]>([])
  const onClickHandler =async ()=>{
    try {
      const result =await contactInfoSchema.validate({contactInfo1 })
      console.log(result)
      let newContactList:contactTypes[]=[...contactList,contactInfo1]
      setContactList(newContactList)
      setErrors([])
      console.log(newContactList)
      setContactInfo1({
      name: "",
      fname: "",
      email:"",
      country: "",
      education: "",
      city:"",
      address:"",
      phone: 0,
      subject:"",
      message:""
  
      })
    
    } catch (error) {
      setErrors(error.errors)
      console.log(error.errors);
      
    }
      }
//   const [fName,setfName] = useState("")
//   const nameHandler = (event:onChangeEventType)=>{
// console.log("Onchange handler", event.target.value)
// setuserName(event.target.value)  
// }
// const fNameHandler =(event:onChangeEventType)=>{
//   console.log(event.target.value);
  
//   // setfName(event.target.value) 

 console.log(contactInfo1);

// }
  return ( 
    <>
        <form className="max-w-lg mx-auto">
        <div className="mb-4">
       
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
            Name
          </label>
          <input
          value={contactInfo1.name}
          onChange={OnChangeHandler}
            type="text"
            id="name"
            name="name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div> <div className="mb-4">
          
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
           Father Name
          </label>
          <input
          value={contactInfo1.fname}
          onChange={OnChangeHandler}
            type="text"
            id="fname"
            name="fname"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
          Country
          </label>
          <input
          value={contactInfo1.country}
          onChange={OnChangeHandler}
            type="text"
            id="country"
            name="country"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
            City
          </label>
          <input
          value={contactInfo1.city}
          onChange={OnChangeHandler}
            type="text"
            id="city"
            name="city"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
            Address
          </label>
          <input
          value={contactInfo1.address}
          onChange={OnChangeHandler}
            type="text"
            id="address"
            name="address"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
         <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
           Phone Number
          </label>
          <input
          value={contactInfo1.phone}
          onChange={OnChangeHandler}
            type="text"
            id="Phone"
            name="Phone"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
           Education
          </label>
          <input
          value={contactInfo1.education}
          onChange={OnChangeHandler}
            type="text"
            id="education"
            name="education"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
          Email
          </label>
          <input
          value={contactInfo1.email}
          onChange={OnChangeHandler}
            type="email"
            id="email"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
        Subject
          </label>
          <input
          value={contactInfo1.subject}
          onChange={OnChangeHandler}
            type="subject"
            id="subject"
            name="subject"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
            Message
          </label>
          <textarea
          value={contactInfo1.message}
          onChange={OnChangeHandler}
            id="message"
            name="message"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            rows={4}
            required
          ></textarea>
        </div>
        {errors.map((item)=>{
          return(
            <div style={{color:"red"}}>
              <h2>{item}
              </h2>
            </div>
          )
        })}
        <div className="mb-4">
          <button
          onClick={onClickHandler}
            type="submit"
            className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Send
          </button>
        </div>
      </form>
      <Display contactInfo={contactList} />
    </>
  )
  }