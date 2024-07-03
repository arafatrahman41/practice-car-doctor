import error from '../../assets/error/404-error.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen max-w-6xl mx-auto'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;