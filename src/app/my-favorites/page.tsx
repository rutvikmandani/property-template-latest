import AppLayout from "@/component/Layout/AppLayout";
import MyFavorites from "@/component/Profile/MyFavorites";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Favorite Properties'
}

export default function MyFavoritesPage() {
  return (
    <AppLayout>
      <MyFavorites />
    </AppLayout>
  );
}
