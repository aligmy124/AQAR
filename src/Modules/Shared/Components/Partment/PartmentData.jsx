import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Form from "react-bootstrap/Form";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import axios from "axios";


export default function PartmentData() {

  const [status, setStatus] = useState();
  const [img, setImg] = useState();

  const handleChange = ( event ) => {
    setStatus(event.target.value);
  };

  const handleImage = (event) => {
    setImg(event.target.value);
    console.log(event.target.value);
  };

  let append_to_form_data = (data) => {
    let formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("price", data.price);
    formdata.append("type", "partment");
    formdata.append("description", data.description);
    formdata.append("area", data.area);
    formdata.append("status", status);
    formdata.append("bedrooms", data.bedrooms);
    formdata.append("bathrooms", data.bathrooms);
    formdata.append("images", img);
    return formdata;
  };

  let { register, handleSubmit } = useForm();

  const create_partment = async (data) => {
    console.log(data);
    let form_data = append_to_form_data(data);
    console.log(form_data);
    try {
      const response = await axios.post(
        "https://real-state-backend-mohamedfathy1991s-projects.vercel.app/api/property" ,
        form_data,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlqMDgyMDk5NkBnbWFpbC5jb20iLCJ1c2VyTmFtZSI6IllvdXNzZWYgZ2FtYWwiLCJwaG9uZSI6IjAxMTI1NjgzMjY1Iiwicm9sZSI6InNlbGxlciIsImlkIjoiNjcxMWU5MTFkODkwN2RlY2U0ZmRjNjMzIiwiaWF0IjoxNzI5MjI3MTIzfQ.cj3QEay_mAMlB0XJqTFpkjQpoHdukBiuyqO-zu9QvJY`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        width: "85%",
        margin: "auto",
        textAlign: "right",
        direction: "rtl",
      }}
    >
      <h3 className="text-muted text-center"> Partment Real State Create </h3>
      <div className="row">
        <form
          className="shadow col-lg-9 m-auto p-4"
          onSubmit={handleSubmit(create_partment)}
        >
          <div className="form-group mb-3">
            <label htmlFor="title" className="text-danger my-2 ">
              Title
            </label>

            <input
              type="text"
              id="title"
              className="form-control w-100"
              style={{ backgroundColor: "#87a1ff46" }}
              placeholder="title "
              {...register("title", {
                required: "title is required ",
              })}
            />
          </div>
          <div className="d-flex align-items-center my-2">
            <Box className="w-50 mx-2">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">نوع العقد</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="نوع العقد "
                  onChange={handleChange}
                >
                  <MenuItem value={"sale"}>للبيع </MenuItem>
                  <MenuItem value={"cell"}>للايجار </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              id="outlined-basic"
              label=" المساحه بالمتر"
              variant="outlined"
              className="w-50 mx-2"
              style={{ backgroundColor: " #87a1ff46" }}
              {...register("area", {
                required: " Partment Area is Required  ",
              })}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="price" className="text-danger my-2 ">
              * السعر بالجنية
            </label>
            <input
              type="number"
              id="price"
              className="form-control w-100"
              style={{ backgroundColor: "#87a1ff46" }}
              placeholder="0 جنيه "
              {...register("price", {
                required: "price is required ",
              })}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="address" className="text-danger my-2 ">
              * العنوان بالتفصيل
            </label>
            <input
              type="text"
              id="address"
              className="form-control w-100"
              style={{ backgroundColor: "#87a1ff46" }}
              placeholder="العنوان بالتفصيل  "
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description" className="text-danger mb-2">
              * اضافه وصف للعقار
            </label>
            <textarea
              className="form-control textarea"
              id="description"
              rows="5"
              style={{ backgroundColor: "#87a1ff46" }}
              placeholder="مثال ( شقه مساحه 100متر الدور الخامس تتكون من ثلاثه غرف  نوم بالاضافه الى اوضه الصاله بالاضافه الى مضبخ وحمام )"
              {...register("description", {
                required: "description is required ",
              })}
            ></textarea>
          </div>

          <Form.Group
            controlId="formFile"
            className="my-4"
            style={{ position: "relative" }}
          >
            <h5 className="text-danger mb-3">اضافة صوره رءيسيه للعقار</h5>
            <Form.Label
              style={{
                display: "block",
                padding: "10px",
                border: "2px dashed rgba(0, 128, 0, 0.5)",
                backgroundColor: "rgba(240, 255, 239, 1)",
                borderRadius: "5px",
                textAlign: "center",
                cursor: "pointer",
                color: "#28a745",
                fontSize: "18px",
              }}
            >
              <h2 className="text-center text-danger"> Add Image </h2>
              <Form.Control
                type="file"
                onChange={handleImage}
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
              />
            </Form.Label>
          </Form.Group>

          <Typography variant="h3" className="my-3">
            المرافق
          </Typography>
          <div className="mb-3">
            <div className="w-75 mx-3 ">
              <label htmlFor="door" className="text-danger my-2 ">
                عدد الغرف الرءيسيه
              </label>
              <input
                type="number"
                id="door"
                className="form-control w-100 "
                placeholder="عدد  الغرف الرءيسيه"
                {...register("bedrooms", {
                  required: "number of bedrooms is required ",
                })}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="w-75 mx-3">
              <label htmlFor="price" className="text-danger my-2 ">
                عدد الحمامات
              </label>
              <input
                type="number"
                className="form-control w-100  "
                placeholder="عدد الحمامات "
                {...register("bathrooms", {
                  required: "number of bathrooms is required ",
                })}
              />
            </div>
          </div>

          <div
            className="btns mt-5"
            style={{ textAlign: "center", display: "flex" }}
          >
            <Button
              variant="outlined"
              className="mx-3"
              type="submit"
              startIcon={<CreateIcon className="mx-2" />}
              onSubmit={create_partment}
            >
              Create
            </Button>
            <Button
              variant="contained"
              color="error"
              className="mx-3"
              startIcon={<CloseIcon className="mx-2" />}
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
