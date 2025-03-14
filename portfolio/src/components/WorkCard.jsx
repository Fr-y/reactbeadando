
export default function WorkCard({ title, year, category, content, image }) { 
    return (
        <div className='card'>
            <img className='cardImage' src={image} alt="Designing Dashboards" />
            <div className="cardContent">
                <span className="h3">{ title }</span>
                <div className="row">
                    <p className='badge'>{ year }</p>
                    <p className='light'>{ category }</p>
                </div>
                <p>{ content }</p>
            </div>
        </div>
    )
}