import { Button, TextField, Typography } from "@mui/material";
// import prifile_img from "../../../assets/images.png";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";
import { Form } from "react-bootstrap";

export default function BuildingData() {
  // const displaySelectedImage = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div
      style={{
        width: "85%",
        margin: "auto",
        textAlign: "right",
        direction: "rtl",
      }}
    >
      <h3 className="text-muted text-center">انشاء مبنى سكنى </h3>
      <div className="row">
        <form className="shadow col-lg-9 m-auto p-4">
          <Typography variant="h3" className="my-2">
            مبنى سكنى
          </Typography>
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
            />
          </div>
          <div className="d-flex align-items-center my-2">
            <TextField
              id="outlined-basic"
              label=" المساحه بالمتر"
              variant="outlined"
              className="w-50 mx-2"
              style={{ backgroundColor: " #87a1ff46" }}
            />{" "}
            <TextField
              id="outlined-basic"
              label="سعر المتر"
              variant="outlined"
              className="w-50 mx-2"
              style={{ backgroundColor: " #87a1ff46" }}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address" className="text-danger my-2 ">
              العنوان بالتفصيل
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
              * اضافه وصف للمبنى السكنى
            </label>
            <textarea
              className="form-control textarea"
              id="description"
              rows="5"
              style={{ backgroundColor: "#87a1ff46" }}
              placeholder="مثال (مبنى سكنى ممكون من دورين تشطيب كامل كل دور مكون من ثلاثه غرف رءيسيه + حمام + مطبخ  + الواجهه 10 متر  + الشارع 8متر   )"
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
              <h2 className="text-center text-danger "> Add Image </h2>
              <Form.Control
                type="file"
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

          <div className="w-100 my-3">
            <label htmlFor="price" className="text-danger my-2">
              عدد الادوار
            </label>
            <input
              type="number"
              className="form-control w-100  "
              placeholder="عدد الادوار  "
            />
          </div>
          <div className="w-100 my-3 ">
            <label htmlFor="door" className="text-danger my-2 ">
              عدد الغرف الرءيسيه
            </label>
            <input
              type="number"
              id="door"
              className="form-control w-100 "
              placeholder=" عدد  الغرف الرءيسيه"
            />
          </div>
          <div
            className="btns mt-5"
            style={{ textAlign: "center", display: "flex" }}
          >
            <Button
              variant="outlined"
              className="mx-3"
              startIcon={<CreateIcon className="mx-2" />}
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
