export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#5c3b23' }}>
          Test Page
        </h1>
        <p className="text-gray-600 mb-8">
          Navigation is working correctly!
        </p>
        <a href="/" className="text-blue-600 hover:text-blue-800 underline">
          Go back to home
        </a>
      </div>
    </div>
  );
}
