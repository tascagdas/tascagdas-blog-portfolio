export default function Card({ children }) {
    return (
        <div className="border rounded-md border-gray-500 p-4">
            {children}
        </div>
    )
}