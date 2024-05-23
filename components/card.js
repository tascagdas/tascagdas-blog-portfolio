export default function Card({ children, className }) {
    return (
        <div className={`border rounded-md border-gray-500 p-4 ${className}`}>
            {children}
        </div>
    )
}