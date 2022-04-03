import { contactList } from "./contact-list";
import useFetch from 'react-fetch-hook'
import ContactCard from './ContactCard'
import {useEffect, useState} from 'react'
import React from 'react'
const axios = require('axios');

 

const App = () => {
  // const url = 'https://api.androidhive.info/json/contacts.json'
  // const { data } = useFetch(url+'?results=200')
  // const [contactList, setContactList] = useState()
  // const [filterQuery, setFilterQuery] = useState()

  // useEffect(() => {
  //   // if (!filterQuery) {
  //   //   setContactList(data?.results?.slice(0, 10))
  //   // } else {
  //   //   const queryString = filterQuery.toLowerCase()
  //   //   // const filteredData = data?.results?.filter(contact => {
  //   //   //   const fullName = `${contact.name.first} ${contact.name.last}`

  //   //   //   // if it's just one letter, return all names that start with it
  //   //   //   if (queryString.length === 1) {
  //   //   //     const firstLetter = fullName.charAt(0).toLowerCase()
  //   //   //     return firstLetter === queryString
  //   //   //   }
  //   //   //   else {
  //   //   //     return fullName.toLowerCase().includes(queryString)
  //   //   //   }
  //   //   // })
  //   //   setContactList(contactList)
  //   //   getUser()
  //   // }
  //   setContactList(contactList)
  // })

  return (
    <>
    <section className={"grid"}>
    {contactList?.length < 1 && (
      <h1>No data matches your search</h1>
    )}
    <ContactCard contactList={contactList}/>
  </section>
  </>
  )

}



export default App 
