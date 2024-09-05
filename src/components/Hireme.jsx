import React from "react";
import TextField from "@mui/material/TextField";

const Hireme = () => {
  return (
    <>
      <div className="bg-[#808080] py-[50px] mt-[80px] h-[280px]">
        <div className="text-[30px] md:text-[35px] lg:text-[40px] leading-[1.5] font-normal text-[#fff] text-center mt-[30px]">
          Hire Me!
        </div>
        <div className="flex justify-center items-center mt-[20px]">
          <button className="site_btn">CONTACT ME</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[80px]">
        <div className="col-span-1 flex justify-center items-center">
          <img
            src="images/cover_bg_1.jpg"
            alt="Contact Form Illustration"
            className="w-full h-[800px] object-cover"
          />
        </div>

        <div className="col-span-1 flex flex-col justify-center gap-[20px]">
          <span className="text-[25px] md:text-[27px] lg:text-[30px] text-[#000] leading-[1.1] font-normal">
            Contact
          </span>
          <div className="w-[60%]">
            <TextField
              id="description"
              name="description"
              placeholder="Your first Name"
              multiline
              minRows={1}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: {
                  fontSize: "19px", 
                  padding: "15px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: "14px", 
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&:hover fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#BBBBBB",
                  },
                },
                "& .MuiInputBase-root": {
                  padding: "15px",
                },
              }}
            />
          </div>
          <div className="w-[60%]">
            <TextField
              id="description"
              name="description"
              placeholder="Your last Name"
              multiline
              minRows={1}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: {
                  fontSize: "19px",
                  padding: "15px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&:hover fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#BBBBBB",
                  },
                },
                "& .MuiInputBase-root": {
                  padding: "15px",
                },
              }}
            />
          </div>
          <div className="w-full">
            <TextField
              id="description"
              name="description"
              placeholder="Your email address"
              multiline
              minRows={1}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: {
                  fontSize: "19px",
                  padding: "15px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&:hover fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#BBBBBB",
                  },
                },
                "& .MuiInputBase-root": {
                  padding: "15px",
                },
              }}
            />
          </div>
          <div className="w-full">
            <TextField
              id="description"
              name="description"
              placeholder="Your Subject of this message"
              multiline
              minRows={1}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: {
                  fontSize: "19px", 
                  padding: "15px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: "14px", 
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&:hover fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#BBBBBB",
                  },
                },
                "& .MuiInputBase-root": {
                  padding: "15px",
                },
              }}
            />
          </div>
          <div className="w-full">
            <TextField
              id="description"
              name="description"
              placeholder="Say something about us"
              multiline
              minRows={8}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: {
                  fontSize: "19px", 
                  padding: "15px",
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: "14px", 
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&:hover fieldset": {
                    borderColor: "#BBBBBB",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#BBBBBB",
                  },
                },
                "& .MuiInputBase-root": {
                  padding: "15px",
                },
              }}
            />
          </div>
          <div>
            <button className="gray_btn">Send message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hireme;
