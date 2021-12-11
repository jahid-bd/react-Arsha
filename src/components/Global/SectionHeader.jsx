const SectionHeader = (props) => {
    const heading = props.heading;
    const title = props.title;
    return(
        <div class="section-title">
        <h2>{heading}</h2>
        <p>{title}</p>
    </div>
    )
}

export default SectionHeader;