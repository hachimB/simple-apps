export default function Greet() {
    const greeting = "Hello everyone"

    return <div>
    <h1 className='className="text-4xl font-bold mb-5'>{greeting}</h1>
    <p>{new Date().toLocaleDateString()}</p>
    </div>
}