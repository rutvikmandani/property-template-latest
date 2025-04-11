import AppLayout from "@/component/Layout/AppLayout";
import Profile from "@/component/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Profile',
}

export default function MyProfile() {
  return (
    <AppLayout>
      <Profile />
    </AppLayout>
  );
}
