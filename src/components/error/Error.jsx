import "./style.scss";

const Error = ({ children }) => {
    return (
        <div className='errorContainer'>
            <h2 className='errorMessage text-dull'>
                {children}
            </h2>
        </div>
    )
}

export default Error