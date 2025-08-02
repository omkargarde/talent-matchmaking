export default function getStatusColor(status: string) {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "open":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "in_progress":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
}
