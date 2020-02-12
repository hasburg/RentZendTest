import React from 'react';
import TextField from '@material-ui/core/TextField';
import './AgentsForm.sass';
import Button from '@material-ui/core/Button';

const AgentsForm = ({
  values,
  handleChange,
  handleSubmit,
  errors, 
  touched,
  handleBlur,
  setFieldValue
}) => (
  <form onSubmit={handleSubmit} id="AgentsForm">
    <div>
      <TextField
        onBlur={handleBlur}
        margin="dense"
        size="small"
        error={errors.name && touched.name}
        helperText={touched.name && errors.name}
        label="Name"
        type="text"
        variant="outlined"
        name="name"
        onChange={handleChange}
        value={values.name}
      />
    </div>

    <div>
      <TextField
        onBlur={handleBlur}
        margin="dense"
        size="small"
        error={errors.email && touched.email}
        helperText={touched.email && errors.email}
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        onChange={handleChange}
        value={values.email}
      />
    </div>

    <div>
      <TextField
        onBlur={handleBlur}
        margin="dense"
        size="small"
        error={errors.phone && touched.phone}
        helperText={touched.phone && errors.phone}
        label="Phone number"
        type="text"
        variant="outlined"
        name="phone"
        onChange={handleChange}
        value={values.phone}
      />
    </div>

    <div>
      <TextField
        onBlur={handleBlur}
        margin="dense"
        size="small"
        error={errors.address && touched.address}
        helperText={touched.address && errors.address}
        label="Address"
        type="text"
        variant="outlined"
        name="address"
        onChange={handleChange}
        value={values.address}
      />
    </div>

    <div>
      <TextField
        onBlur={handleBlur}
        margin="dense"
        size="small"
        error={errors.zipCode && touched.zipCode}
        helperText={touched.zipCode && errors.zipCode}
        label="Zip Code"
        type="text"
        variant="outlined"
        name="zipCode"
        onChange={handleChange}
        value={values.zipCode}
      />
    </div>

    <label>
      <input
        accept="image/*"
        className="nativeFileInput"
        multiple
        type="file"
        onChange={(event: any) => {
          setFieldValue("photo", event.currentTarget.files[0]);
        }}
      />

      <Button 
        className="actionButton"
        size="small"
        component="span"
        variant="contained" 
        color="primary"
      >
        Upload photo
      </Button>
    </label>

    {errors.photo && touched.photo ? (
      <div className="error">{errors.photo}</div>
    ) : null}

    <Button 
      className="actionButton"
      variant="contained" 
      color="primary"
      size="small"
      type="submit"
    >
      Send data
    </Button>
  </form>
);

export default AgentsForm;