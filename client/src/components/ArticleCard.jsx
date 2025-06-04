import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({item}) => {
    const {id, title, images, content, createdAt} = item.attributes || {}
    // console.log('ArticleCard', item);
    const navigate = useNavigate();
 return (
     <div onClick={() => navigate(`/news/${title}`)} className="card w-96 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={`https://api.antares-rh.net${images.data[0]?.attributes?.url}`} alt="Card image cap" className="img-fluid h-44 w-full object-cover card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}?</h5>
                <p className="card-text w-72 overflow-hidden">{content[0].contentTitle} .</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">{new Date(createdAt ?? "")?.toLocaleDateString() }</small>
            </div>
        </div>
  )
}

export default ArticleCard
