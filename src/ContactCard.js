const ContactCard = ({ contactList }) => {
    return (
      <>
        {contactList?.map((contact, index) => (
          <div className="grid-item" >
            <figure className="" >
              <img alt="user" className="" src={contact.image} />
              <figcaption className="">
                <p className="">
                  {contact.name}
                </p>
                <p className="">
                  {/* <span className="font-medium">email: </span>{contact.email} */}
                </p>
                <p className="">
                  <span className="font-medium">phone: </span>{contact.phone}
                </p>
                <p className="">
                  {/* <span className="font-medium">city: </span>{contact.location.city} */}
                </p>
              </figcaption>
            </figure>
          </div>
         
        ))}
      </>
    )
  }
  
  export default ContactCard