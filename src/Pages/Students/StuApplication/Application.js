import React from "react";
import {
  Box,
  Typography,
  Snackbar,
  Alert,
  Button,
  TextField,
  Grid,
  InputAdornment, 
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Application() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {

        fullName: "",
        NICNumber: "",
        nationality: "",
        country: "",
        dob: "",
        cdcNumber: "",
        address: "",
        contactResidence: "",
        contactMobile: "",
        email: "",
        emergencyName: "",
        emergencyContact: "",
        emergencyAddress: "",  

        stream: "",
        selectedCourses: "",
        dlNo: "",
        class: "",
        department: "",
        seaService: "",
        company: "",
        swimmingAbility: "",
        isSLPAEmployee: "",
        designation: "",
        division: "",
        serviceNo: "",
        sectionUnit: "",

        nic: "",
        passport: "",
        photo: "",
    },
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const coursesByStream = {
    "Fire & Safety & Occupational Health": [
      "Fire Prevention and Fire Fighting",
      "Elementary First Aid",
      "Occupational Health and Safety",
      "Basic Fire Fighting",
      "Safety Course on Basic First Aid",
      "Chemical Handling",
      "Fire Prevention in Building",
      "Trauma First Aid",
      "Oil and Chemical Tanker",
      "Lashing Safety",
      "DC Cargo Handling",
      "Breathing Apparatuses Training Programme ",
      "Health and Safety at Work",
      "Refresh and Updating Course for Seafarer",
    ],
    Management: [
      "Diploma in Port Operation Management",
      "Certificate Course on Accounting & Auditing",
      "Tamil Language Course ",
      "Sinhala Language",
      "Certificate Course in English – Preliminary",
      "Certificate Course in English – Intermediate",
      "Training Programme on Disciplinary Procedure",
      "Diploma in Port Security ",
      "Course on Supplies & Materials Management",
      "Training Programme on Typing Skills Development (Sinhala)",
      "Training Programme on Typing Skills Development ( Tamil ) ",
      "Course on Supplies & Materials Management ( Intermediate)",
      "Diploma in Advanced English ( 1 1/2 Years - 72 F/days )",
      "Training Programme on Management Skills Development (English) ( 06 F/days )",
      "Training Programme on Management Skills Development ( Sinhala ) ( 06 F/days )",
      "Training Programme on Financial & Administrative Procedures ( 05 F/days)",
      "Skills Development Programme for Security Personals ( 06 F/days )",
      "Training of Trainers (TOT) - ( 10F/days )",
      "Training Programme on Office Management ( 10 F/days )",
      "Training Programme on Clerical Skills Development ( 05 F/days )",
      "Multi Skill Development Programme for Work Assistants ( 05 F/days )",
      "Diploma in Human Resource Management ( 1 1/2 Years - 72 F/days )",
      "Seminars",
      "Workshop & Special Progresso on Different Subjects ( 01 day )",
    ],
    IS: [
      "Diploma in Management and Information Technology",
      "Course on Desktop Publishing with Microsoft Office Word 200X (Executive Staff)",
      "Course on Desktop Publishing with Microsoft Office Word 200X (Non-Executive Staff)",
      "Course on Electronic Spread Sheet with Microsoft Office Excel 200X (Executive Staff)",
      "Course on Electronic Spread Sheet with Microsoft Office Excel 200X (Non-Executive Staff)",
      "Course on Computer Aided Electronic Presentation with Microsoft Office PowerPoint 200X (Executive Staff)",
      "Course on Information Communication Technology Technician NVQ Level 03 (Non Levy-Int) ",
      "Course on Information Communication Technology Technician NVQ Level 03 (Fee Levy-Int)",
      "Course on Project Management with Premavera (Executive Staff)",
      "Workshop on Internet and Email",
      "Course on Computer Graphic Design NVQ Level 04",
      "Course on Computer Aided Drawing (Auto Cad) 2D/3D Drawing",
      "Data Communication and Computer Networking",
      "Course on Project Management with MS Project ",
      "Course on Geo Information Systems",
    ],
    "Equipment Operations & Logistics": [
      "Prime Mover Operators Programme",
      "Fork Lift Operator Programme",
      "Mobile Crane Operators Programme",
      "Gantry Crane Operators Programme",
      "Transfer Crane Operators Programme",
      "Top Lift Operators Programme",
      "Heavy Vehicle Drives Programme",
      "Shore Crane Operators Programme",
      "Diploma in Logistic Management",
      "Gantry Signalmen",
      "Skills Upgrading Programme",
      "Awareness Programme",
      "Foreign Recruitment Test",
      "NVQ Trial Test",
      "Trade Test",
    ],
    Maritime: [
      "Deck Rating",
      "PSSR",
      "PPST",
      "SDSD",
      "Maritime English",
      "Coxswain",
      "COP (Deck)",
      "COC (Engine)",
      "COC (Deck)",
      "COP (Engine)",
      "Boat Master",
      "Winchmen Training Course ",
      "Rigging Course",
    ],
    "Technical 1": [
      "Wireman Upgrading Training Programme",
      "Motor Control Circuits",
      "Programmable Logic Controller Training Programme",
      "Mechatronic for Beginners",
      "Basic Archino Training Programme",
      "Electronic for Electricians",
      "Basic Welding",
      "Advanced Engineering Drawing",
      "Basic Engineering Drawing",
      "Plumbing Course",
      "Advanced Welding",
      "General Fitter",
      "Machine Shop Practice",
      "Ref & Air Conditioning",
      "Electro Hydraulics",
      "Auto Mobile AC",
    ],
    "Technical 2": [
      "Course On Advanced Engineering Drawing",
      "Course On Basic Smithy And Forging",
      "Course On Energy Management",
      "Course On Machine And Fitting Shop Practice",
      "Course On Refrigeration And Air-Conditioning",
      "Course On Welding",
    ],
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("nic", data.nic[0]);
    if (data.passport?.length) {
      formData.append("passport", data.passport[0]);
    }
    formData.append("photo", data.photo[0]);

    try {
      const response = await axios.post("http://localhost:3000/application", formData);
      if (response.status === 201) {
        setOpenSnackbar(true);
        reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting. Please try again.");
    }
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post('http://localhost:5000/api/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(response.data.message);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};

  return (
<>
    <Box
      sx={{
        padding: 3,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "-20px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Biographical Details
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* Full Name */}
          <Grid item xs={12}>
            <Controller
              name="fullName"
              control={control}
              rules={{ required: "Full Name is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Full Name"
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* NIC Number */}
          <Grid item xs={12}>
            <Controller
              name="NICNumber"
              control={control}
              rules={{ required: "NIC Number is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="NIC Number"
                  error={!!errors.NICNumber}
                  helperText={errors.NICNumber?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Nationality */}
          <Grid item xs={6}>
            <Controller
              name="nationality"
              control={control}
              rules={{ required: "Nationality is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Nationality"
                  error={!!errors.nationality}
                  helperText={errors.nationality?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Country */}
          <Grid item xs={6}>
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Country"
                  error={!!errors.country}
                  helperText={errors.country?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Date of Birth */}
          <Grid item xs={12}>
            <Controller
              name="dob"
              control={control}
              rules={{ required: "Date of Birth is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.dob}
                  helperText={errors.dob?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* CDC Number */}
          <Grid item xs={12}>
            <Controller
              name="cdcNumber"
              control={control}
              rules={{ required: "CDC Number is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="CDC Number"
                  error={!!errors.cdcNumber}
                  helperText={errors.cdcNumber?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <Controller
              name="address"
              control={control}
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Address"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Contact Residence */}
          <Grid item xs={6}>
            <Controller
              name="contactResidence"
              control={control}
              rules={{
                required: "Residence contact number is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Contact number must contain only digits",
                },
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Contact No (Residence)"
                  error={!!errors.contactResidence}
                  helperText={errors.contactResidence?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Contact Mobile */}
          <Grid item xs={6}>
            <Controller
              name="contactMobile"
              control={control}
              rules={{
                required: "Mobile contact number is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Contact number must contain only digits",
                },
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Contact No (Mobile)"
                  error={!!errors.contactMobile}
                  helperText={errors.contactMobile?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FormControl variant="standard">
                          <Select
                            value="+94"
                            disabled
                            sx={{ minWidth: 60 }}
                          >
                            <MenuItem value="+94">+94</MenuItem>
                          </Select>
                        </FormControl>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Email Address"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Emergency Contact */}
          <Grid item xs={6}>
            <Controller
              name="emergencyName"
              control={control}
              rules={{ required: "Emergency Contact Name is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Emergency Contact Name"
                  error={!!errors.emergencyName}
                  helperText={errors.emergencyName?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              name="emergencyContact"
              control={control}
              rules={{
                required: "Emergency Contact Number is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Contact number must contain only digits",
                },
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Emergency Contact Number"
                  error={!!errors.emergencyContact}
                  helperText={errors.emergencyContact?.message}
                  {...field}
                />
              )}
            />
          </Grid>

          {/* Emergency Address */}
          <Grid item xs={12}>
            <Controller
              name="emergencyAddress"
              control={control}
              rules={{ required: "Emergency Address is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Emergency Address"
                  error={!!errors.emergencyAddress}
                  helperText={errors.emergencyAddress?.message}
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>

        {/* Submit and Back Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
          }}
        >
        </Box>
      </form>
    </Box>

    <Box
      sx={{
        padding: 3,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Academic Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Select Stream
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid item xs={12}>
            <Controller
              name="stream"
              control={control}
              rules={{ required: "Stream is required." }}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Stream</InputLabel>
                  <Select {...field} label="Stream">
                    <MenuItem value="">Select Stream</MenuItem>
                    {Object.keys(coursesByStream).map((stream) => (
                      <MenuItem key={stream} value={stream}>
                        {stream}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            {errors.stream && (
              <Typography color="error">{errors.stream.message}</Typography>
            )}
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          Select Courses
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
          <Controller
            name="selectedCourses"
            control={control}
            render={({ field: { value, onChange } }) => (
              Object.keys(coursesByStream).map(
                (stream) =>
                  value.stream === stream && (
                    coursesByStream[stream].map((course) => (
                      <Grid item xs={6} key={course}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={value.includes(course)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  onChange([...value, course]);
                                } else {
                                  onChange(value.filter((c) => c !== course));
                                }
                              }}
                            />
                          }
                          label={course}
                        />
                      </Grid>
                    ))
                  )
              )
            )}
          />
        </Grid>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Proficiency in Driving Heavy Vehicle
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Controller
              name="dlNo"
              control={control}
              render={({ field }) => <TextField {...field} fullWidth label="D/L No" />}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name="class"
              control={control}
              render={({ field }) => <TextField {...field} fullWidth label="Class" />}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth type="date" InputLabelProps={{ shrink: true }} />
              )}
            />
          </Grid>
        </Grid>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2, marginTop: 3 }}>
          Proficiency in Sea Services
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="department"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Department/Rank" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="seaService"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Sea Services (Year/Months if applicable)" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="company"
              control={control}
              render={({ field }) => <TextField {...field} fullWidth label="Company" />}
            />
          </Grid>
        </Grid>

        <FormControlLabel
          control={
            <Controller
              name="swimmingAbility"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            />
          }
          label="Swimming Ability"
        />
      </form>
    </Box>

    <Box
      sx={{
        padding: 3,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        maxWidth: 600,
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Upload Documents
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* NIC File Upload */}
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          NIC *
        </Typography>
        <Controller
          name="nic"
          control={control}
          rules={{ required: "NIC is required." }}
          render={({ field }) => (
            <TextField
              fullWidth
              type="file"
              inputProps={{
                accept: "image/*,application/pdf",
              }}
              error={!!errors.nic}
              helperText={errors.nic?.message}
              onChange={(e) => field.onChange(e.target.files)}
              sx={{ marginBottom: 2 }}
            />
          )}
        />

        {/* Passport File Upload */}
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Passport
        </Typography>
        <Controller
          name="passport"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              type="file"
              inputProps={{
                accept: "image/*,application/pdf",
              }}
              onChange={(e) => field.onChange(e.target.files)}
              sx={{ marginBottom: 2 }}
            />
          )}
        />

        {/* Photo File Upload */}
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Photo (Passport size) *
        </Typography>
        <Controller
          name="photo"
          control={control}
          rules={{ required: "Photo is required." }}
          render={({ field }) => (
            <TextField
              fullWidth
              type="file"
              inputProps={{
                accept: "image/*",
              }}
              error={!!errors.photo}
              helperText={errors.photo?.message}
              onChange={(e) => field.onChange(e.target.files)}
              sx={{ marginBottom: 2 }}
            />
          )}
        />

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/Application2")}
          >
            Back
          </Button>

          <Button type="submit" onClick={handleFileUpload} variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully registered!
        </Alert>
      </Snackbar>
    </Box>
    </>
  );

  
}

export default Application;
