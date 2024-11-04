import { useParams } from "react-router-dom"

export default function HolidayDetails() {
    const { holidayId } = useParams()

    return (
        <div>HolidayDetails {holidayId} </div>
    )
}