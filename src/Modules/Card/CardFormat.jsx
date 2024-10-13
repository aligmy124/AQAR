import React from "react";
import img from "../../../src/assets/img/image.jpg";
import { Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { Phone, WhatsApp, Facebook } from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PlaceIcon from "@mui/icons-material/Place";
// دالة لإنشاء بيانات الصفوف
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// بيانات الصفوف
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// مكون CardFormat
export default function CardFormat() {
  const nav = useNavigate();

  return (
    <div
      className="cardDetails"
      style={{
        direction: "rtl",
        overflow:"hidden",
        backgroundColor: "#f5f5f5",
        maxWidth: "1500px", // تحديد الحد الأقصى لعرض العنصر
        margin: "0 auto", // مركزي العنصر
      }}
    >
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
      <Box>
        <Box className="title">
          <Typography variant="p" sx={{ ml: "10px" }}>
            شقة ايجار
          </Typography>
          <Typography variant="p" >9 اكتوبر</Typography>
          <Typography variant="h4" sx={{my:"10px"}}>
            أراضي سكنية 2150م للبيع كاش بالعبور الجديدة القاهرة
          </Typography>
          <Typography variant="h5"sx={{mb:"10px"}}>
            <PlaceIcon /> العدوة
          </Typography>
          <Typography variant="p" sx={{ mt: "20px" }} fontWeight={"700"}>
            يبدأ من 3,783,209 جنيه
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={4} className="details">
        <Grid item lg={6} md={12}>
          <Paper
            sx={{ overflow: "hidden", margin: "20px", borderRadius: "8px" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="right">الموقع</TableCell>
                  <TableCell align="right">المساحة</TableCell>
                  <TableCell align="right">عدد الغرف</TableCell>
                  <TableCell align="right">عدد الحمامات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">العدوة</TableCell>
                  <TableCell align="right">120 م²</TableCell>
                  <TableCell align="right">3</TableCell>
                  <TableCell align="right">2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          <Paper
            sx={{ overflow: "hidden", margin: "20px", borderRadius: "8px" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">الوصف</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">
                    تتميز هذه الشقة الفاخرة بتصميم عصري ومساحة واسعة تجعلها
                    مثالية للعائلات أو الأفراد الذين يبحثون عن الراحة والرفاهية.
                    تقع الشقة في حي هادئ وقريب من جميع الخدمات، مما يوفر بيئة
                    مريحة للحياة اليومية.
                    <br />
                    <strong>المواصفات:</strong>
                    <ul>
                      <li>المساحة: 150 متر مربع</li>
                      <li>عدد الغرف: 3 غرف نوم واسعة</li>
                      <li>عدد الحمامات: 2 حمام حديث</li>
                      <li>
                        المطبخ: مطبخ مفتوح مزود بأجهزة كهربائية عالية الجودة
                      </li>
                      <li>غرفة المعيشة: فسيحة مع نوافذ كبيرة</li>
                      <li>البلكونة: خاصة للاسترخاء</li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid item lg={6} md={12} sm={12}>
          <Card
            variant="outlined"
            style={{
              maxWidth: "400px",
              margin: "auto",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={4}>
                  <img
                    src={img}
                    className="img-fluid rounded-start"
                    alt="...منشئ"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography variant="h6">Youssef Gamal</Typography>
                  <Typography variant="body2">
                    تاريخ النشر: 2024/10/02
                  </Typography>
                </Grid>
              </Grid>

              <Box mt={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  className="w-50 mb-2"
                  fullWidth
                >
                  01125683265 <Phone />
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  className="w-100 mb-3"
                >
                  تواصل مع واتساب <WhatsApp />
                </Button>
                <Button variant="contained" color="error" fullWidth>
                  راسل صاحب العقار <Facebook />
                </Button>
                <Link
                  className="btn btn-outline-dark w-100"
                  onClick={() => nav("/advertiser/profile")}
                >
                  جميع اعلانات صاحب العقار
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
