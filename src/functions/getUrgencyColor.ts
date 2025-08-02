export default function getUrgencyColor(urgency: string) {
  switch (urgency) {
    case "ASAP":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    case "Medium":
      return "bg-orange-100 text-orange-800 hover:bg-orange-200";
    case "Low":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
}
