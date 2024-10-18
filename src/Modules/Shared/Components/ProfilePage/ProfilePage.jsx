import { useNavigate } from "react-router-dom";
import Profile_img from "../../../../assets/img/user-placeholder.png";
import img from "../../../../assets/img/image.jpg";

export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="profile_page">
      <div className="mb-4">
        <img
          src={Profile_img}
          alt="profile_img"
          style={{ width: "80px", marginTop: "20px" }}
        />
        <h6 className="mt-3">Youssef Gamal Saleh </h6>
        <button className="btn btn-outline-danger d-block">
          01125683265
        </button>
      </div>
      <div className="cards">
        <div
          style={{
            position: "relative",
            textAlign: "right",
            cursor: "pointer",
            // width: "20rem",
            margin: "20px 0px ",
          }}
          className="card shadow-lg "
          onClick={() => navigate("/card")}
        >
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
            </h5>
            <table style={{ color: "#777" }} className="my-4">
              <tbody>
                <tr>
                  <td>عدد الحمامات</td>
                  <td>عدد الغرف</td>
                  <td>المساحه</td>
                  <td>الموقع</td>
                </tr>
                <tr>
                  <td>
                    3 <i className="fa-solid fa-city mx-2"></i>
                  </td>
                  <td>
                    2 <i className="fa-solid fa-bed mx-2"></i>
                  </td>
                  <td>
                    180 <i className="fa-solid fa-house mx-2"></i>
                  </td>
                  <td>
                    العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3> 3,600,800 جنيه</h3>
          </div>
          <i className="fa-solid fa-heart fav"></i>
        </div>
        <div
          style={{
            position: "relative",
            textAlign: "right",
            cursor: "pointer",
            // width: "20rem",
            margin: "20px 0px ",
          }}
          className="card shadow-lg "
          onClick={() => navigate("/card")}
        >
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
            </h5>
            <table style={{ color: "#777" }} className="my-4">
              <tbody>
                <tr>
                  <td>عدد الحمامات</td>
                  <td>عدد الغرف</td>
                  <td>المساحه</td>
                  <td>الموقع</td>
                </tr>
                <tr>
                  <td>
                    3 <i className="fa-solid fa-city mx-2"></i>
                  </td>
                  <td>
                    2 <i className="fa-solid fa-bed mx-2"></i>
                  </td>
                  <td>
                    180 <i className="fa-solid fa-house mx-2"></i>
                  </td>
                  <td>
                    العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3> 3,600,800 جنيه</h3>
          </div>
          <i className="fa-solid fa-heart fav"></i>
          <button className="buy">للايجار </button>
        </div>


        <div
        style={{
          position: "relative",
          textAlign: "right",
          cursor: "pointer",
          // width: "20rem",
          margin: "20px 0px ",
        }}
        className="card shadow-lg "
        onClick={() => navigate("/card")}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
      </div>
      <div
        style={{
          position: "relative",
          textAlign: "right",
          cursor: "pointer",
          // width: "20rem",
          margin: "20px 0px ",
        }}
        className="card shadow-lg "
        onClick={() => navigate("/card")}
      >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            شقه سكنيه 150 متر للبيع كاش بمحافظه المنيا
          </h5>
          <table style={{ color: "#777" }} className="my-4">
            <tbody>
              <tr>
                <td>عدد الحمامات</td>
                <td>عدد الغرف</td>
                <td>المساحه</td>
                <td>الموقع</td>
              </tr>
              <tr>
                <td>
                  3 <i className="fa-solid fa-city mx-2"></i>
                </td>
                <td>
                  2 <i className="fa-solid fa-bed mx-2"></i>
                </td>
                <td>
                  180 <i className="fa-solid fa-house mx-2"></i>
                </td>
                <td>
                  العدوه <i className="fa-solid fa-location-dot mx-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <h3> 3,600,800 جنيه</h3>
        </div>
        <i className="fa-solid fa-heart fav"></i>
    
      </div> 
      </div>
    </div>
  );
}
