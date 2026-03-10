let fm = document.getElementById('form')
let btn = document.getElementById('submit-btn')
let fname = document.getElementById('name')
let mail = document.getElementById('email')
let mes = document.getElementById('msg')

let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

let validate = function (ev) {
   ev.preventDefault()

   let data = {}
   let errors = []

   if (fname.value === '') {
      errors.push('full name is missing')
   } else {
      data.fullname = fname.value   //was testing so this is inverted, but works fine
   }

   if (mail.value) {
      if (regex.test(mail.value)) {
         data.email = mail.value
      }
      else {
         errors.push('email is invalid')  
      }
   }
   else {
   errors.push('email is missing')
   }

   if (mes.value){
      data.message = mes.value
   }
   else{
      errors.push('message is missing')
   }

   if (errors.length > 0) {
      console.log(`errors: ${errors}`)
   }
   else{
      console.log(`fullname: ${data.fullname}, email: ${data.email}, message: ${data.message}`)
   }
}
fm.addEventListener('submit', validate)