import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { useForm } from 'react-hook-form'
import './PostJobForm.css'

const steps = ['Provide company Details', 'Provide Job Details'];



export default function PostJobForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [jobFor, setJobFor] = React.useState('Fresher');
  const [jobType, setJobType] = React.useState('Full Time')

  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleChange = (event) => {
    setJobFor(event.target.value);
  };

  const handleChange2 = (event) => {
    setJobType(event.target.value);
  };

  const onSubmit = (data) => {
    data.jobFor = jobFor
    data.jobType = jobType
    console.log(data)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  const handleNext = (data) => {
    console.log(data)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [image, setImage] = React.useState(null)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 2 }}>Step {activeStep + 1}</Typography>

          {activeStep === 0 &&
            <Grid container direction='row'>
              <Grid item xs={6} sx={{ pr: 2 }}>
                <Grid item xs={12} sx={{ mb: 3, mt: 1 }} >
                  <TextField
                    id="outlined-name"
                    label="Company Name"
                    fullWidth
                    required
                    className='loginInput'
                    {...register("company", { required: true })}
                  />
                  {errors.company?.type === 'required' && <p className="required-mark">Name is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 3 }}>
                  <TextField
                    id="outlined-name"
                    label="Place"
                    fullWidth
                    required
                    className='loginInput'
                    {...register("place", { required: true })}
                  />
                  {errors.place?.type === 'required' && <p className="required-mark">Place is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 3 }} >
                  <TextField
                    id="outlined-name"
                    label="State"
                    fullWidth
                    required
                    className='loginInput'
                    {...register("state", { required: true })}
                  />
                  {errors.state?.type === 'required' && <p className="required-mark">State is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 3 }} >
                  <TextField
                    id="outlined-name"
                    label="Country"
                    fullWidth
                    required
                    className='loginInput'
                    {...register("country", { required: true })}
                  />
                  {errors.country?.type === 'required' && <p className="required-mark">Country is required</p>}
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid item xs={12} sx={{ mb: 3, mt: 1, textAlign: 'center' }} >
                  <img src={image} alt="preview-imag" className='image-preview' /><br />
                  <input type="file" onChange={onImageChange} className="filetype" />
                </Grid>
              </Grid>



            </Grid>}

          {activeStep === 1 &&
            <Grid container direction='row'>
              <Grid item xs={6} sx={{ pr: 2 }}>
                <Grid item xs={12} sx={{ mb: 3, mt: 1 }} >
                  <TextField
                    id="outlined-name"
                    label="Job Designation"
                    fullWidth
                    required
                    className='loginInput'
                    {...register("designation", { required: true })}
                  />
                  {errors.designation?.type === 'required' && <p className="required-mark">Please fill this field</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 3 }}>
                  <FormControl  >
                    <FormLabel id="demo-row-radio-buttons-group-label">Job For</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                      value={jobFor} onChange={handleChange}  >
                      <FormControlLabel value="Fresher" control={<Radio />} label="Fresher" />
                      <FormControlLabel value="Experienced" control={<Radio />} label="Experienced" />
                    </RadioGroup>
                  </FormControl>

                </Grid>
                {(jobFor === 'Experienced') &&
                  <Grid item xs={12} sx={{ mb: 3 }} >
                    <FormLabel>Experienced needed</FormLabel><br />
                    <TextField
                      id="outlined-name"
                      required
                      sx={{ width: '20%' }}
                      className='loginInput'
                      {...register("expMin", { required: true, pattern: /^[0-9]+$/ })}
                    />
                    {errors.expMin?.type === 'required' && <span className="required-mark">Required</span>}
                    {errors.expMin?.type === 'pattern' && <span className="required-mark">Incorrect Format</span>}
                    <span > To </span>
                    <TextField
                      id="outlined-name"
                      sx={{ width: '20%' }}
                      required
                      className='loginInput'
                      {...register("expMax", { required: true, pattern: /^[0-9]+$/ })}
                    />
                    {errors.expMax?.type === 'required' && <span className="required-mark">Required</span>}
                    {errors.expMax?.type === 'pattern' && <span className="required-mark">Incorrect Format</span>}
                    <span > Years </span>
                  </Grid>}
                <Grid item xs={12} sx={{ mb: 3 }} >
                  <TextField
                    id="outlined-name"
                    label="Job Description"
                    multiline
                    maxRows={4}
                    fullWidth
                    required
                    className='loginInput'
                    {...register("description", { required: true })}
                  />
                  {errors.description?.type === 'required' && <p className="required-mark">Please fill this field</p>}
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid item xs={12} sx={{ mb: 3, mt: 1 }} >
                  <TextField
                    id="outlined-name"
                    label="Vacancies"
                    type='number'
                    fullWidth
                    className='loginInput'
                    {...register("vacancy", { required: true })}
                  />
                  {errors.vacancy?.type === 'required' && <p className="required-mark">Please fill this field</p>}
                </Grid>

                <Grid item xs={12} sx={{ mb: 3 }}>
                  <FormControl  >
                    <FormLabel id="demo-row-radio-buttons-group-label">Job For</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                      value={jobType} onChange={handleChange2}  >
                      <FormControlLabel value="Full Time" control={<Radio />} label="Full Time" />
                      <FormControlLabel value="Part Time" control={<Radio />} label="Part Time" />
                      <FormControlLabel value="Remote" control={<Radio />} label="Remote" />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sx={{ mb: 3 }} >
                  <FormLabel>Payscale</FormLabel><br />
                  <span > ₹ </span>
                  <TextField
                    id="outlined-name"
                    required
                    sx={{ width: '20%' }}
                    className='loginInput'
                    {...register("salaryMin", { required: true, pattern: /^[0-9]+$/ })}
                  />
                  {errors.salaryMin?.type === 'required' && <span className="required-mark">Required</span>}
                  {errors.salaryMin?.type === 'pattern' && <span className="required-mark">Incorrect Format</span>}
                  <span > To </span>
                  <TextField
                    id="outlined-name"
                    sx={{ width: '20%' }}
                    required
                    className='loginInput'
                    {...register("salaryMax", { required: true, pattern: /^[0-9]+$/ })}
                  />
                  {errors.salaryMax?.type === 'required' && <span className="required-mark">Required</span>}
                  {errors.salaryMax?.type === 'pattern' && <span className="required-mark">Incorrect Format</span>}
                </Grid>

              </Grid>



            </Grid>}


          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            {activeStep === steps.length - 1 ?
              <Button onClick={handleSubmit(onSubmit)}>
                FINISH
              </Button> :
              <Button onClick={handleSubmit(handleNext)}>
                NEXT
              </Button>
            }

          </Box>
        </React.Fragment>
      )
      }
    </Box >
  );
}