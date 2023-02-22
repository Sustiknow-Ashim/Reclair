import { Link } from 'react-router-dom'

function School() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link to="/project" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Project Page
      </Link>
    </div>
  )
}

export default School;
