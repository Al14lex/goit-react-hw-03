import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  tel: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});


export default function ContactForm ({onAdd}) {

const nameFieldId = useId();
const telFieldId = useId();

const handleSubmit = (values, actions) => {
	onAdd({
      id: Date.now(),
      name: values.username,
      number: values.tel,
    });
    
	actions.resetForm();
};

const initialValues = {
  username: "",
  tel: "",
};
  
return (
      <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
    validationSchema={FeedbackSchema}>
    
          <Form style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px"
          }}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="username" id={nameFieldId} />
              <ErrorMessage name="username" component="span" />
              
              <label htmlFor={telFieldId}>Number</label>
              <Field type="tel" name="tel" id={telFieldId} />
              <ErrorMessage name="tel" component="span" />
              
            <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}


