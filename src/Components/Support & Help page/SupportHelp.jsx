import React from 'react'
import { AiFillMessage } from "react-icons/ai";
import { IoMdListBox } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosBook } from "react-icons/io";
import './SupportHelp.css'

const SupportHelp= () => {
  return (
    <div className='fulltwopages'>

   <div className='fullsupportpage1'>

    <div className='fullcontact'>

        <div className='contactclass'>
     <p className='logo1'><AiFillMessage /></p>
     <p className='contactus'>Contact Us</p>
     <p className='reach'>Reach out to our dedicated support team through<br></br>
     email,phone,or live chat. We're here to assist you with<br></br>any queries or concerns.</p>
      </div>

<div className='phonemail'>
     <p className='phonenumber'>Phone Number<br></br><span className='fornum' >+961 021313</span></p>
     <p className='email'>Email<br></br><span className='foremail'>Example@gmail.com</span></p>
</div>

    </div>

    <div className='fullterms'>

      <div className='full'>
        <p className='logo2'><IoMdListBox /></p>
        <p className='termcond'>Terms & Conditions,Privacy<br></br>Policy,and Legal Information</p>
        <p className='yourself'>Familiarize yourself with our platform's terms of use,<br></br>
        privacy policy,data protection measures,and other<br></br>
        legal information. Your rights and responsibilities are<br></br>important to us</p>
      </div>

    </div>

    </div>

   <div className='fullsupportpage2'>

    <div className='requestdiv'>
      <div className='semirequest'>
       <p className='logo3'><BsFillInfoCircleFill /></p>
       <p className='suppreq'>Support Request</p>
       <p className='feedback'>Share your feedback, suggestions, or specific support<br></br>
       requests. Let us know how we can improve and<br></br>
       address any issues you encounter. We're committed<br></br>
       to providing excellent support.</p>
       </div>
    </div>
         
      <div className='guides'>
        <div className='semidiv'>
        <p className='logo4'><IoIosBook /></p>
        <p className='guide'>How-to Guides</p>
        <p className='details'>Access detailed user guides and manuals to navigate<br></br>
        through every aspect of our  trading platform. Get<br></br>
        familiar with features, account setup, trading<br></br>
        processes, and more.</p>
        </div>
      </div>

    </div><br></br><br></br><br></br>
  <hr className='hr'></hr>

<h2 className='frq'>Frequently Asked Questions</h2>
<div className='thequestions'>
<p className='par1'>Example of question?<br></br><span className='question1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Porro deleniti assumenda quasi fugit repellat dolorem omnis cumque commodi,
  quibusdam ab officia sit.</span></p>
  <p className='par2'>Example of question?<br></br><span className='question2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></p>
  <p className='par3'>Example of question?<br></br><span className='question3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></p>
  <p className='par4'>Example of question?<br></br><span className='question4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></p>
  </div>
  <hr></hr>

    </div>
  
  )
}

export default SupportHelp
