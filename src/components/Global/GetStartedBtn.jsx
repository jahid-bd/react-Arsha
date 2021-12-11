
const sizes = {
    small : {
        padding: '7px 20px',
        fontSize: '14px',
    },
    medium: {
        padding: '10px 24px',
    },
    large: {
        padding: '14px 30px',
    }
}

const GetStartedBtn = (props) => {
    const size = sizes[props.size]
    const link = props.link
    return(
        <span href={link} style={{
        ...size,
        color: '#fff',
        border: '2px solid #209dd8',
        borderRadius: '50px',
        fontWeight: '600',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'ease-in-out .2s'
    }} className="GetStartedBtn">Get Started</span>
    )
}

export default GetStartedBtn;