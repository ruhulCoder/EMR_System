import React from 'react'
import "../Styles/EditClinician.css"

function EditClinician({closeModal4}) {
  return (
    <div>
        <div class="editclinicianbox">
                <div class="header">
                    <p class="heading">Edit clinician data</p>
                    <button class="closebtn" onClick={() => closeModal4(false)}> X </button>
                </div>
                <div class="main">
                    <lable class="name">First name</lable>
                    <input type="text" class="field2"/>
                    <lable  class="name">Middle name</lable>
                    <input type="text" class="field2"/>
                    <lable class="name">Last name</lable>
                    <input type="text" class="field2"/>
                    <lable class="name">Speciality</lable>
                    <select class="field3">
                        <option disable selected hidden>select</option>
                        <option>Surgeon</option>
                    </select>
                    <lable class="name">Position</lable>
                    <select class="field3">
                        <option disable selected hidden>select</option>
                        <option>Practitioner</option>
                    </select>
                </div>
                <div class="footer">
                    <input type="button" class="cancelbtn" onClick={() => closeModal4(false)} value="Cancel"/>
                    <input type="button" class="savebtn4" value="Save"/>
                </div>
         </div>
    </div>
  )
}

export default EditClinician