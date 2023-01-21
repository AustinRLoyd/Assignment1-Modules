// reference module
//module.exports = (htmlStr, course)=>{ // fat arrow function or lambda
    //let output = htmlStr.replace(/{%NAME%}/g, course.courseName);
    //output = output.replace(/{%IMAGE%}/g, course.image);
    //output = output.replace(/{%FROM%}/g, course.from);
    //output = output.replace(/{%INSTRUCTOR%}/g, course.instructor);
    //output = output.replace(/{%CREDITS%}/g, course.credits);
    //output = output.replace(/{%DESCRIPTION%}/g, course.description);
    //output = output.replace(/{%ID%}/g, course.id);
    //return output;
//}

// Module to add new JSON data definitions
module.exports = (htmlStr, course, newtotal)=>{
    let output = htmlStr.replace(/{%ID%}/g, course.id);
    output = output.replace(/{%CUSTOMERNAME%}/g, course.customerName);
    output = output.replace(/{%PHONENUMBER%}/g, course.phoneNumber);
    output = output.replace(/{%ADDRESS%}/g, course.address);
    output = output.replace(/{%LOANAMOUNT%}/g, course.loanAmount);
    output = output.replace(/{%INTEREST%}/g, course.interest);
    output = output.replace(/{%LOANTERMYEARS%}/g, course.loanTermYears);
    output = output.replace(/{%LOANTYPE%}/g, course.loanType);
    output = output.replace(/{%DESCRIPTION%}/g, course.description);
    output = output.replace(/{%NEWVALUE%}/g, newtotal);
    return output;
}