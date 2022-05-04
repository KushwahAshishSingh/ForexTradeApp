export default function FormikReactSelect(props) {
    const options = [
        { value: '1', label: 'White' },
        { value: '2', label: 'Yellow' },
    ];
    return (
        <Formik>
            {formProps => (
                <Form>
                    <Field name='SelectColor' options={options} component={SelectField} />
                </Form>
            )}
        </Formik>
    );
}