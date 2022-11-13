import * as Yup from "yup";


export const signUpSchema = Yup.object({

    firstname : Yup.string().min(2).max(25).required("Please enter your firstname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastname : Yup.string().min(2).max(25).required("Please enter your lastname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    mobile:Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required')
});

