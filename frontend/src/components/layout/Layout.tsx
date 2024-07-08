import { PropsWithChildren } from "react";
import styles from "@/styles/Layout.module.css";

// function Layout({ children }: { children: React.ReactNode }) {
function Layout({ children }: PropsWithChildren) {
  return (
    <div>
          <AdCard />

    </div>
  );
}

export default Layout;