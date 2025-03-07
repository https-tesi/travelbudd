
import { format } from "date-fns";
import { toast } from "sonner";

export const useAccommodationBooking = (destinationName: string | undefined) => {
  const handleAccommodationBooking = (accommodation: { name: string; description: string; type: string }) => {
    const destinationQuery = destinationName || "";
    const accommodationNameQuery = accommodation.name;
    
    const checkInDate = new Date();
    const checkOutDate = new Date();
    checkOutDate.setDate(checkOutDate.getDate() + 3);
    
    const formattedCheckIn = format(checkInDate, "yyyy-MM-dd");
    const formattedCheckOut = format(checkOutDate, "yyyy-MM-dd");
    
    const searchQuery = encodeURIComponent(`${destinationQuery} ${accommodationNameQuery}`);
    
    const bookingUrl = `https://www.booking.com/searchresults.html?ss=${searchQuery}&checkin=${formattedCheckIn}&checkout=${formattedCheckOut}&group_adults=2&no_rooms=1`;
    
    window.open(bookingUrl, '_blank');
    
    toast.success(`Opening Booking.com to find "${accommodation.name}" in ${destinationName}`);
  };

  return { handleAccommodationBooking };
};
