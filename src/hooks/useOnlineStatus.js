// src/hooks/useOnlineStatus.js
import { useState, useEffect } from 'react';
/**
 * Custom React Hook to track the online/offline status of the browser.
 * @returns {boolean} - True if online, false if offline.
 */
const useOnlineStatus =()=> {
  // Initialize state with the current online status
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    // Event handlers to update the state
    const handleOnline = () => setIsOnline(true);  //setIsOnline he setter funtion aahe & IsOnline he var aahe
    const handleOffline = () => setIsOnline(false);  //setIsOnline he value set krnyasathi use krtat
    // Add event listeners when the component mounts
    window.addEventListener('online', handleOnline);  //online asel tr true
    window.addEventListener('offline', handleOffline); //offline  asel tr false
    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline); //online asel tr handleOnline fun call honar
      window.removeEventListener('offline', handleOffline); //same vr
    };
  }, []); // Empty dependency array means this effect runs only once on mount and cleans up on unmount
  return isOnline;  //user on aahe ki off he return krnar
}
export default useOnlineStatus;

