
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const PurchaseBanner = ({date,setDate}) => {
   

  return (
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/free-photo/top-view-photographer-s-workplace-camera-photography-equipment-notepad-with-pen-white-table-background_358320-3037.jpg?w=360" className="max-w-sm rounded-lg shadow-2xl" />

                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
               </div>
        </div>
   </div>
  )
}

export default PurchaseBanner