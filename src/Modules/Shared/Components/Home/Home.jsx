import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";
import { Carousel } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import img from "../../../../assets/img/image.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardComponent() {
  const [all_property, setAll_property] = useState([]);
  const nav = useNavigate();

  const get_all_properity = async () => {
    try {
      let response = await axios.get(
        "https://real-state-backend-mohamedfathy1991s-projects.vercel.app/api/property",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlqMDgyMDk5NkBnbWFpbC5jb20iLCJ1c2VyTmFtZSI6IllvdXNzZWYgZ2FtYWwiLCJwaG9uZSI6IjAxMTI1NjgzMjY1Iiwicm9sZSI6InNlbGxlciIsImlkIjoiNjcxMWU5MTFkODkwN2RlY2U0ZmRjNjMzIiwiaWF0IjoxNzI5MjI3MTIzfQ.cj3QEay_mAMlB0XJqTFpkjQpoHdukBiuyqO-zu9QvJY",
          },
        }
      );
      console.log(response.data.property);
      setAll_property(response.data.property);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_all_properity();
  }, []);

  return (
    <>
      <Box mb={4}>
        <Carousel
          data-bs-theme="white"
          className="w-100"
          interval={3000}
          controls={true}
          indicators={true}
        >
          {[...Array(3)].map((_, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  height: "auto", // جعل الارتفاع تلقائي
                  maxHeight: "400px", // تحديد الحد الأقصى للارتفاع
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
      <div className="search_bar shadow-lg  d-flex flex-column flex-md-row">
        <select
          className="form-select w-100 w-md-20 text-center text-md-left"
          style={{ width: "20%", margin: "auto" }}
        >
          <option selected> نوع العقار </option>
          <option value="1">شقه </option>
          <option value="2"> مبنى سكنى </option>
          <option value="3">اراضى </option>
        </select>
        <select
          className="form-select  w-100 w-md-20 text-center text-md-left"
          style={{ width: "20%", margin: "auto" }}
        >
          <option selected>نوع العقد </option>
          <option value="1"> ايجار </option>
          <option value="2"> للبيع </option>
        </select>
        <button
          type="submit "
          className=" btn btn-outline-danger w-100 w-md-20"
          style={{ width: "20%", margin: "auto" }}
        >
          {" "}
          بحث{" "}
        </button>
      </div>
      <h2 className="text-center text-primary my-5"> جميع العقارات </h2>

      <Grid container spacing={3} justifyContent="center">
        {all_property.map((prop) => (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  position: "relative",
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
                onClick={() => nav("/card")}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={prop.images[0].url}
                  alt="Card image"
                  sx={{ objectFit: "cover" }} // يضمن الحفاظ على النسب أثناء تغيير الحجم
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ position: "absolute", top: 10, right: 10 }}
                >
                  للايجار
                </Button>
                <CardContent>
                  <Typography
                    
                    variant="h2"
                    // component="div"
                    sx={{
                      textAlign: "right",
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    {prop.title}
                  </Typography>

                  <Typography
                  varient="h6"
                    sx={{
                      textAlign: "right",
                      fontSize: { xs: "1rem", sm: "1.25rem" , marginBottom:'30px' },
                    }}
                  >
                    {prop.description}
                  </Typography>
                  <Table
                    size="small"
                    sx={{ width: "100%", tableLayout: "fixed" }}
                  >
                    <TableBody>
                      <TableRow>
                        <TableCell
                          sx={{ borderBottom: "none", textAlign: "center" }}
                        >
                          الموقع
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none", textAlign: "center" }}
                        >
                          المساحه
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none", textAlign: "center" }}
                        >
                          عدد الغرف
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none", textAlign: "center" }}
                        >
                          عدد الحمامات
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{ borderBottom: "none", textAlign: "center" }}
                        >
                          <i className="fa-solid fa-location-dot mx-2"></i>{" "}
                          {prop.location}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none", textAlign: "center" }}
                        >
                          <i className="fa-solid fa-house mx-2"></i> {prop.area}{" "}
                          م²
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none", textAlign: "center" }}
                        >
                          <i className="fa-solid fa-bed mx-2"></i>{" "}
                          {prop.bedrooms}
                        </TableCell>
                        <TableCell
                          sx={{ borderBottom: "none", textAlign: "center" }}
                        >
                          <i className="fa-solid fa-bath mx-2"></i>{" "}
                          {prop.bathrooms}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "right",
                      color: "primary",
                      marginTop: 2,
                      fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    }}
                  >
                    {`${prop.price} جنيه`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
