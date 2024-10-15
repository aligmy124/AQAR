import nodemailer  from "nodemailer"
const transporter = nodemailer.createTransport({
      // Use `true` for port 465, `false` for all other ports
      service:"gmail",
     auth: {
         user:'mohamed.electronics1991@gmail.com',
         pass:"jkbh ylts qqgi jpgi"
   
     },
   });
   
   export  async function sendmail(mail, name ,opt) {
        
               const info = await transporter.sendMail({
                     from: '"Real Estate عقارات" mohamed.electronics1991@gmail.com', // sender address
                     to:mail , // list of receivers
                     subject: "Real Estate site", // Subject line
                     text: "كود تاكيد الاميل", // plain text body
                     html: `<h2> welcome ${name} </h2>
                            <h3>otp is ${opt} </h3>
                     
                     `, 
                   });
                 
                   console.log("Message sent: %s", info.messageId);
   
       
         // send mail with defined transport object
        
       }