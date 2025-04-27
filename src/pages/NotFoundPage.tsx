

const NotFoundPage = () => {
  return (
    <div>
        <h1 className="text-4xl text-center text-white">404 - Page Not Found</h1>
        <p className="text-center text-gray-400">You seem to have found our hidden page (that doesn't exist).</p>
        <div className="flex justify-center mt-4">
            <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
        </div>
    </div>
  )
}

export default NotFoundPage