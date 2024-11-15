import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import HomeBanner from '../images/home-banner-2.png'
import Products from '../components/Products'
import Footer from '../components/Footer'
import FlashSale from '../components/FlashSale'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [bannerImg, setBannerImg] = useState();

  useEffect(()=>{
    fetchBanner();
  }, [])

  const fetchBanner = async() =>{
    await axios.get('http://localhost:6001/fetch-banner').then(
      (response)=>{
        setBannerImg(response.data);
      }
    )
  }

  return (
    <div className="HomePage">
      <div className="home-banner">
        {bannerImg ?
          <img src={bannerImg} alt="" />
        :
        ""}
      </div>

      <div className="home-categories-container">

      <div className="home-category-card" onClick={()=>navigate('/category/Fashion')}>
          <img src="https://thumbs.dreamstime.com/b/clothing-accessories-men-women-ready-travel-life-style-90671251.jpg" alt="   " />
          <h5>Fashion</h5>
        </div>

      <div className="home-category-card" onClick={()=>navigate('/category/HairCare')}>
          <img src="https://static.vecteezy.com/system/resources/previews/024/631/883/non_2x/hair-care-logo-hair-skin-minimalist-simple-icon-template-design-free-vector.jpg" alt="" />
          <h5>HairCare</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/SkinCare')}>
          <img src="https://thumbs.dreamstime.com/z/skin-care-logo-inspiration-vector-beauty-butterfly-skin-care-logo-inspiration-vector-181052872.jpg" alt="" />
          <h5>SkinCare</h5>
        </div>
        
        <div className="home-category-card" onClick={()=>navigate('/category/Books')}>
          <img src="https://th.bing.com/th/id/OIP.uyi1Q5l2H8Zf9APJQplJfQHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" alt="" />
          <h5>Books</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Electronics')}>
          <img src="https://th.bing.com/th/id/R.9f7eb1ee867f0a2f9b9780d4a89da345?rik=0kM9y%2fe9coPVuQ&riu=http%3a%2f%2fimg0cf.b8cdn.com%2fimages%2fuploads%2fuser_photos%2f55%2fspc_i_44372355_20171012054526.jpg&ehk=40us3cz16PW%2fFLHkNgmzyeNe8RjDSPCJD5VeRwG9JNU%3d&risl=&pid=ImgRaw&r=0" alt="" />
          <h5>Electronics</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Groceries')}>
          <img src="https://th.bing.com/th/id/OIP.EngSBRxdHEkz_layq222YwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="" />
          <h5>Groceries</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Sports-Equipment')}>
          <img src="https://th.bing.com/th/id/OIP.eaXe26_9ETnZXha1U85eQgHaE1?w=1024&h=668&rs=1&pid=ImgDetMain" alt="" />
          <h5>Sports Equipments</h5>
        </div>

      </div>


      <div id='products-body'></div>
      <Products category = 'all'  />


      <Footer />
    </div>
  )
}

export default Home