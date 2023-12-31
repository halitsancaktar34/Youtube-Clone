import { createContext, useEffect, useState } from "react";
import { categories } from './../utils/constants';
import { getData } from './../helpers/getData';

export const YoutubeContext = createContext()

export function YoutubeProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]
  )
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    // Ana sayfa veya trendler seçildiyse api isteği:
    if (selectedCategory.type === "home" || selectedCategory.type === "trending") {
      getData(`/${selectedCategory.type}`).then((res) => setVideos(res.data.data))
    }

    // Tip kategoriyse api isteği:
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}&type=video`).then((res) => setVideos(res.data.data))
    }

  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory, videos }}>
      {children}
    </YoutubeContext.Provider>
  )
}
