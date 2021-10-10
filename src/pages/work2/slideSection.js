import './slideSection.scss'

const slideSection = ({show})=>{

    let animationStyle = {
        height: show?'calc((100vh - 100px) / 2)':0,
        background: show? "#8DD6CD" : "#db7093",
    }
    return (
        <div className='slideSection' style={animationStyle}>
        </div>
    )
}

export default slideSection;