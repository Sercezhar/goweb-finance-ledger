import Button from 'components/Button';
import Container from 'components/Container';
import ResponsiveImage from 'components/ResponsiveImage';
import { useFormik } from 'formik';
import icons from '../../assets/icons.svg';
import styles from './RequestCallback.module.scss';

function RequestCallback() {
  // const encode = data => {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  //     .join('&');
  // };

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'This is a required field';
    } else if (
      !/^.{1,}[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Email must be valid';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      // fetch('/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: encode({ 'form-name': 'contact', ...values }),
      // })
      //   .then(() => alert('Success!'))
      //   .catch(error => alert(error));

      resetForm();
    },
  });

  const iconError = (
    <svg width="16" height="16">
      <use href={`${icons}#icon-warning`}></use>
    </svg>
  );

  return (
    <section className={styles.section}>
      <Container resetPadding grid>
        <ResponsiveImage folder="home" imgName="contact" alt="contact" />

        <div className={styles.content}>
          <h2 className={styles.title}>Request Callback</h2>

          <form
            className={styles.form}
            onSubmit={formik.handleSubmit}
            name="contact"
            method="post"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label>
              <input
                className={styles.inputName}
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </label>

            <label>
              <input
                className={styles.inputEmail}
                type="email"
                name="email"
                placeholder="Enter email*"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              {formik.errors.email ? (
                <div className={styles.error}>
                  {iconError}
                  {formik.errors.email}
                </div>
              ) : null}
            </label>

            <Button text="Send" secondClass="form" type="submit" />
          </form>
        </div>
      </Container>
    </section>
  );
}

export default RequestCallback;
