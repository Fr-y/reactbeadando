export default function BlogPost({title, date, category, content}) {
    return (
        <div className="white-bg post">

            <h3>{title}</h3>
            <p>{date} | {category}</p>
            <p>{content}</p>

        </div>
    )
}