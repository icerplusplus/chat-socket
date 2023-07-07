import { Children } from "@/utils/types";
import "../../styles/globals.css";

export default function Layout({ children }: Children) {
  return (
    // custom theme color
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
