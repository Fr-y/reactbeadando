export default function BlogPost({title, date, category, content}) {
    return (
        <div className="white-bg post">

            <h2>{title}</h2>
            <p style={{fontSize:"1.2em"}}>{date} | <span className="light">{category}</span></p>
            <p>{content}</p>

        </div>
    )
}