import React from 'react'
import "../Styles/EditPatient.css"

function EditPatient({closeModal2}) {
  return (
    <div>
    <div class="editpatientbox">
                <div class="header">
                    <p class="heading">Edit patient data</p>
                    <button class="closebtn" onClick={() => closeModal2(false)}> X </button>
                </div>
                <div class="main">
                    <lable class="name">First name</lable>
                    <input type="text" class="field2"/>
                    <lable  class="name">Middle name</lable>
                    <input type="text" class="field2"/>
                    <lable class="name">Last name</lable>
                    <input type="text" class="field2"/>
                    <lable class="name">Date of birth</lable>
                    <input type="date" class="field2"/>
                    <lable class="name">Gender</lable>
                    <select class="field3">
                        <option disable selected hidden>select</option>
                        <option>male</option>
                        <option>female</option>
                    </select>
                    <lable class="name">Type of insurance</lable>
                    <select class="field3">
                        <option disable selected hidden>select</option>
                        <option>abc</option>
                        <option>xyz</option>
                    </select>
                    <lable class="name">Insurance number</lable>
                    <input type="number" class="field2"/>
                    <lable class="name">NHI number</lable>
                    <input type="text" class="field2"/>
                </div>
                <div class="footer">
                    <input type="button" class="cancelbtn" onClick={() => closeModal2(false)} value="Cancel"/>
                    <input type="button" class="savebtn2" value="Save"/>
                </div>
         </div>
    </div>
  )
}

export default EditPatient