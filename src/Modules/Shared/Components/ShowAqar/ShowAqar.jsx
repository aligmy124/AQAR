import {
  Button,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";

export default function ShowAqar() {
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        textAlign: "right",
        direction: "rtl",
      }}
    >
      <div className="row">
        <form
          className="shadow col-lg-9 m-auto p-4"
          style={{ borderRadius: "8px", backgroundColor: "#f9f9f9" }}
        >
          <Typography variant="h5" className="text-muted text-center mb-4">
            إضافة عقار جديد
          </Typography>

          <FormControl component="fieldset" className="mb-3">
            <FormLabel component="legend" className="text-danger">
              اختر نوع العقار:
            </FormLabel>
            <RadioGroup row aria-label="property-type" name="property-type">
              <FormControlLabel
                value="building"
                control={<Radio />}
                label="أرض مباني"
              />
              <FormControlLabel
                value="agricultural"
                control={<Radio />}
                label="أرض زراعية"
              />
              <FormControlLabel value="mixed" control={<Radio />} label="شقة" />
              <FormControlLabel
                value="mixed2"
                control={<Radio />}
                label="بيت"
              />
            </RadioGroup>
          </FormControl>

          <div className="form-group mb-3">
            <TextField
              type="text"
              id="price"
              fullWidth
              variant="outlined"
              style={{ backgroundColor: "##002" }}
              placeholder="جنيه"
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <TextField
              id="area"
              variant="outlined"
              className="w-50 mx-1"
              placeholder="المساحة بالمتر"
              style={{ backgroundColor: "##002" }}
            />
            <TextField
              id="pricePerMeter"
              placeholder=" سعر المتر للارض "
              variant="outlined"
              className="w-50 mx-1"
              style={{ backgroundColor: "##002" }}
            />
          </div>

          <div className="form-group mb-3">
            <TextField
              id="address"
              fullWidth
              variant="outlined"
              style={{ backgroundColor: "##002" }}
              placeholder="العنوان بالتفصيل"
            />
          </div>

          <div className="form-group mb-3">
            <TextField
              id="description"
              label=""
              multiline
              rows={5}
              fullWidth
              variant="outlined"
              style={{ backgroundColor: "##002" }}
              placeholder="وصف قطعة الأرض"
            />
          </div>

          <div style={{ position: "relative", marginBottom: "20px" }}>
            <Typography variant="h6" color="error" className="mb-2">
              إضافة صورة رئيسية للعقار
            </Typography>
            <label
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
              <Typography variant="h5">رفع صورة</Typography>
              <input
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
            </label>
          </div>
          <div
            className="btns mt-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="outlined"
              color="primary"
              className="mx-2"
              endIcon={<CreateIcon />}
              style={{ padding: "10px 20px", borderRadius: "5px" }}
            >
              إنشاء
            </Button>
            <Button
              variant="contained"
              color="error"
              className="mx-2"
              endIcon={<CloseIcon />}
              style={{ padding: "10px 20px", borderRadius: "5px" }}
            >
              إغلاق
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
