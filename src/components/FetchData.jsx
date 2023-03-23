import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FetchDataa.css';

const FetchData = ({ cat }) => {
  const [data, setData] = useState("");
  
  
  const fetchData = async () => {
    await axios.get(
      cat 
        ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=9330b11c7a314d8fb623262e0e70e605`
        :  "https://newsapi.org/v2/top-headlines?country=in&apiKey=9330b11c7a314d8fb623262e0e70e605"
    )
    .then((res) => {
      setData(res.data.articles);
    });
  };
  
  useEffect(() => {
    fetchData()
  }, [cat])

  return (
    <div className='container my-4'>
      <h3>Top Headlines</h3>
      <div className="container d-flex justify-content-center align-items-center flex-wrap my-3 "  style={{minHeight: '100vh'}}>
        {data
          ? data.map((item, index) => (
            <div key={index} className='box-shadow rounded m-3 news-div' style={{ width: '500px' }}>
              <div className='my-3 news-img-container' style={{ height: "200px" }}>
                <img 
                  src={item.urlToImage} 
                  alt="image is somewhere in paradise" 
                  className='img-fluid rounded news-img'
                  style={{ 
                    width: '100%', 
                    height: "100%", 
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div className='px-3 d-flex flex-column justify-content-between news-content-container' style={{ height: "300px" }}>
                <div>
                  <h5 className='my-3 news-title'>
                    <a 
                      href={item.url} 
                      target='_blank' 
                      rel='noreferrer' 
                      className='news-title-link'
                    >
                      {item.title}
                    </a>
                  </h5>
                  <p className="news-description">{item.content}</p>
                </div>
                <a href={item.url} target='_blank' className='btn btn-primary my-3'>View More</a>
              </div>
            </div>
          )) : "LOADING..."}
      </div>
    </div>
  )
}

export default FetchData;
